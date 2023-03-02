import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import prisma from '../../../prisma/client'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
        return res.status(401).json({ message: "Por favor faça login para deletar post" })
    }

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