import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import {prisma} from "./db"
import {PrismaAdapter} from '@next-auth/prisma-adapter'




export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google(
    {
      clientId:process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }
  )],
  adapter:PrismaAdapter(prisma),
})