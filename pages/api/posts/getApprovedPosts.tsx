import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== "GET") return res.status(405).end()

    try {
        const data = await prisma.post.findMany({
            where: {
                status: "published"
            },
            include: {
                user: true,
                comments: true,
                likes: true
            },
            orderBy: {
                updatedAt: "desc",
            }
        })
        
        res.status(200).json(data)
    } catch(err) {
        res.status(403).json({ err })
    } 
}