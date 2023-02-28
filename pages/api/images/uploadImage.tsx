import type { NextApiRequest, NextApiResponse } from 'next'
import S3 from "aws-sdk/clients/s3"

const s3 = new S3({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: "v4",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    let { name } = req.query;
    const prefix = Math.random().toString(32).slice(2)
    const key = `${prefix}-${name}`.replaceAll(".", "_")

    const uploadURL = s3.getSignedUrlPromise('putObject', {
      Bucket: process.env.BUCKET_NAME,
      Key: key,
      Expires: 120,
      ContentType: 'application/octet-stream',
    })

    const url = await uploadURL

    res.status(200).json({ url });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "8mb",
    },
  },
}