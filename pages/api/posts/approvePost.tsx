import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import prisma from '../../../prisma/client'
import { authOptions } from '../auth/[...nextauth]'
import client from '../twitter/twitterConfig'

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

        await client.post("statuses/update", {
            status: `✨Promoção via Amazon\n\n📚${body.title}\n💵R$${body.price}\n🚨Confira:${body.saleLink}`
        })

        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(403).json({ err })
    }
}
