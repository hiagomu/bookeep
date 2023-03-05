import prisma from "../../../prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  
  if (!session) {
    return res.status(401).json({ message: "Por favor, faça login para comentar" })
  }

  const prismaUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  })
  
  if (req.method === "POST") {
    const { comment, id } = req.body.data
    
    if (!comment.length) {
      return res.status(401).json({ message: "Adicione um comentário válido" })
    }
    
    try {
      const result = await prisma.comment.create({
        data: {
          message: comment,
          userId: prismaUser.id,
          postId: id,
        },
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(403).json({ err })
    }
  }
}