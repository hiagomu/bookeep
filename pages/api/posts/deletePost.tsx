import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "DELETE") {
        res.status(405).end()
    }


    try {
        const body = await req.body

        const post = await prisma.post.delete({
            where: {
                id: body.id
            }
        })

        return res.status(200).json(post)
    } catch (err) {
        res.status(403).json({err: "Erro ao deletar post"})
    }
}