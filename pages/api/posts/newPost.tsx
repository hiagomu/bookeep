import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '../../../prisma/client'
import client from '../twitter/twitterConfig'
import { PostType } from '@/app/@types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== "POST") return res.status(405).end()

    const session = await getServerSession(req, res, authOptions)
    
    if (!session)
        return res
            .status(401)
            .json({message: "Por favor, faça o login para criar um post!"})
    
    const {
        price,
        title,
        coupon,
        category,
        saleLink,
        description,
        bookImageURL
    }: PostType = req.body.data
    
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email || undefined
        }
    })

    try {
        if (user) {
            const result = await prisma.post.create({
                data: {
                    bookImageURL: bookImageURL,
                    description: description,
                    category: category,
                    coupon: coupon,
                    title: title,
                    price: price,
                    saleLink: saleLink,
                    userId: user.id
                }
            })

            await client.post("statuses/update", {
                status: `⭐️Promoção via Amazon\n\n📚${title}\n💰R$${price}\nConfira:${saleLink}`
            })
            
            res.status(200).json(result)
        }

    } catch (err) {
        res.status(403).json({ err })
    }
}