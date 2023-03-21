import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import prisma from '../../../prisma/client'
import { authOptions } from '../auth/[...nextauth]'
import client from '../twitter/twitterConfig'
import TelegramBot from "node-telegram-bot-api"
import S3 from "aws-sdk/clients/s3"

const s3 = new S3({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: "v4",
})


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getServerSession(req, res, authOptions)
    
    if (!session) {
        return res
            .status(401)
            .json({ message: "Por favor, faça login para avaliar post!" })
    }

    if (req.method !== "PUT") return res.status(405).end()

    try {
        const body = await req.body.data
        const bot = new TelegramBot(String(process.env.TELEGRAM_API_TOKEN))

        const result = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                bookImageURL: body.bookImageURL,
                description: body.description,
                category: body.category,
                coupon: body.coupon,
                title: body.title,
                price: body.price,
                saleLink: body.saleLink,
                userId: body.userId,
                published: true
            }
        })

        const downloadImageFromS3 = (bucketName: string, fileName: string, callback: (imageBuffer: Buffer) => void) => {
            const params = {
                Bucket: bucketName,
                Key: fileName
            }
            s3.getObject(params, (error, data) => {
                if (error) {
                    console.error('Erro ao baixar a imagem do S3:', error);
                    return;
                }
                callback(data.Body as Buffer);
            })
        }

        const sendImageToTelegramChannel = (chatId: string, imageBuffer: Buffer) => {
            bot.sendPhoto(chatId, imageBuffer, { caption: `✨Promoção via Amazon\n\n📚${body.title}\n💵R$${body.price}\n🚨Confira:${body.saleLink}` })
                .then(() => {
                    console.log('Imagem enviada com sucesso!')
                })
                .catch((error) => {
                    console.error('Erro ao enviar a imagem:', error)
                })
        }

        downloadImageFromS3(`${process.env.BUCKET_NAME}`, body.bookImageURL.split('/')[3], (imageBuffer: Buffer) => {
            sendImageToTelegramChannel(`@${process.env.TELEGRAM_CHANNEL}`, imageBuffer)
        })

        // await client.post("statuses/update", {
        //     status: `✨Promoção via Amazon\n\n📚${body.title}\n💵R$${body.price}\n🚨Confira:${body.saleLink}`
        // })

        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(403).json({ err })
    }
}
