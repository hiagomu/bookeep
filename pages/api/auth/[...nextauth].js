import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../prisma/client"
import axios from "axios"

const adapter = PrismaAdapter(prisma)

export const authOptions = {
  adapter: adapter,
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user) {
        session.user.id = user.id

        const userData = await prisma.user.findUnique({
          where: {
            id: user.id
          },
          select: {
            access_level: true
          }
        })
        
        session.user.user_access_level = userData.access_level
      }
      return session;
    },
  },
}

export default NextAuth(authOptions)