import { getServerSession } from 'next-auth'
import prisma from '../../../prisma/client'
import { authOptions } from '../auth/[...nextauth]'
import client from '../twitter/twitterConfig'
import TelegramBot from "node-telegram-bot-api"

export default async function handler(
    req,
    res
) {
    const session = await getServerSession(req, res, authOptions)
    
    if (!session) {
        return res
            .status(401)
            .json({ message: "Por favor, faça login para avaliar post!" })
    }

    if (session.user.user_access_level !== "admin") {
        return res
            .status(401)
            .json({ message: "Você não possui permissão para avaliar" })
    }

    if (req.method !== "PUT") return res.status(405).end()

    try {
        const body = await req.body.data
        const bot = new TelegramBot(String(process.env.TELEGRAM_API_TOKEN))

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
                status: "published"
            }
        })

        const message = `Oferta 📢 #AmazonBrasil\n\n📖${body.title} (Por: R$ ${body.price})\n📦Entrega grátis (Amazon Prime)${body.coupon ? `\n🎟️Cupom (${body.coupon})`: ""}\n\n${body.saleLink.split("https://")[1]}\n${body.saleLink.split("https://")[1]}\n${body.saleLink.split("https://")[1]}\n${body.saleLink.split("https://")[1]}`
        
        bot.sendMessage("@starbooksbr", message)
        await client.v2.tweet(message)

        return res.status(200).json(result)
    } catch (err) {
        res.status(403).json({ err })
    }
}
