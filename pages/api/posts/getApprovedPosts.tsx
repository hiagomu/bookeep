import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'

export default async function getApprovedPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== "GET") return res.status(405).end()

    const {
        min,
        max,
        category,
        orderBy,
        search
      } = req.query;

    let query: any = {}
    let whereQuery: any = {}


    if (orderBy) {
        query.orderBy = orderBy;
    }

    if (category) {
        whereQuery.category = category;
    }

    try {
        if (category == "all") {
            const data = await prisma.post.findMany({
                where: {
                    status: "published",
                    price: {
                        gte: Number(min),
                        lte: Number(max)
                    },
                    OR: [
                        { title: { contains: String(search), mode: 'insensitive' } },
                        { seller: { contains: String(search), mode: 'insensitive' } },
                    ]
                },
                include: {
                    user: true,
                    comments: true,
                    likes: true
                },
                orderBy: {
                    updatedAt: query.orderBy || "desc",
                }
            })
            
            res.status(200).json(data)
        } else {
            const data = await prisma.post.findMany({
                where: {
                    status: "published",
                    price: {
                        gte: Number(min),
                        lte: Number(max)
                    },
                    category: String(category),
                    OR: [
                        { title: { contains: String(search), mode: 'insensitive' } },
                        { seller: { contains: String(search), mode: 'insensitive' } },
                    ]
                },
                include: {
                    user: true,
                    comments: true,
                    likes: true
                },
                orderBy: {
                    updatedAt: query.orderBy || "desc",
                }
            })
            
            res.status(200).json(data)
        }
    } catch(err) {
        res.status(403).json({ err })
    } 
}