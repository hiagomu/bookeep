import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== "GET") return res.status(405).end()

    const search = req.query.search

    try {
        const data = await prisma.post.findMany({
            where: {
                title: {
                    contains: String(search),
                    mode: 'insensitive'
                }
            },
            include: {
                user: true,
                comments: true,
                likes: true
            },
            orderBy: {
                createdAt: "desc",
            }
        })
        res.status(200).json(data)
    } catch(err) {
        res.status(403).json({ err })
    } 
}