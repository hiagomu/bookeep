import prisma from '../../../prisma/client'
import { getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  
  if (!session) {
    return res
      .status(401)
      .json({ message: "Por favor, faça o login para favoritar o post!" })
  }

  const { id } = req.body.data

  const prismaUser = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || undefined
    },
  });

  const alreadyLiked = await prisma.like.findFirst({
    where: {
      postId: id as string,
      userId: prismaUser?.id as string,
    },
  })

  try {
    if (!alreadyLiked) {
      const result = await prisma.like.create({
        data: {
          postId: id as string,
          userId: prismaUser?.id as string,
        },
      })

      return res.status(200).json(result)
    } else {
      const result = await prisma.like.delete({
        where: {
          id: alreadyLiked.id,
        },
      });

      return res.status(201).json(result)
    }
  } catch (err) {
    res.status(402).json({ err })
  }
}