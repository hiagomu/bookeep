import { getServerSession } from 'next-auth'
import prisma from '../../../prisma/client'
import { authOptions } from '../auth/[...nextauth]'
import client from '../twitter/twitterConfig'
import TelegramBot from "node-telegram-bot-api"
import S3 from "aws-sdk/clients/s3"


// const s3 = new S3({
//   region: process.env.AWS_DEFAULT_REGION,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   signatureVersion: "v4",
// })


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

    if (req.method !== "PUT") return res.status(405).end()

    try {
        const body = await req.body.data
        // const bot = new TelegramBot(String(process.env.TELEGRAM_API_TOKEN))

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
        
        // bot.sendMessage("@starbooksbr", `✨Promoção via Amazon\n\n📚${body.title}\n💵R$${body.price}\n🚨Confira:${body.saleLink}`)

        await client.v2.tweet(`✨Promoção via Amazon\n\n📚${body.title}\n💵R$${body.price}\n🚨Confira:${body.saleLink}`)
        
        return res.status(200).json(result)
    } catch (err) {
        console.log(err.response)
        res.status(403).json({ err })
    }
}
