import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '../../../prisma/client'
import { EditPostType } from '@/app/@types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== "PUT") return res.status(405).end()

    const session = await getServerSession(req, res, authOptions)
    
    if (!session)
        return res
            .status(401)
            .json({message: "Por favor, faça o login para editar o post!"})
    
    const {
        id,
        price,
        title,
        marketplace,
        coupon,
        category,
        saleLink,
        description,
        bookImageURL
    }: EditPostType = req.body
    
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email || undefined
        }
    })

    try {
        if (user) {
            const result = await prisma.post.update({
                where: {
                    id: id
                },
                data: {
                    bookImageURL: bookImageURL,
                    description: description,
                    category: category,
                    seller: marketplace,
                    coupon: coupon,
                    title: title,
                    price: Number(price),
                    saleLink: saleLink
                }
            })
            
            res.status(200).json(result)
        }

    } catch (err) {
        res.status(403).json({ err })
    }
}