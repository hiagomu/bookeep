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
        session.user.id = user.id;
        const user_acess_level = await axios.get('http://localhost:3000/api/posts/getUserById', { params: {id: user.id}})
        session.user.user_access_level = user_acess_level.data.access_level
      }
      return session;
    },
  },
}

export default NextAuth(authOptions)