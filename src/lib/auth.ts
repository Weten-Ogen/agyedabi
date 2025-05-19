import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user }) {
      // Attach additional user fields to session
      if (session.user) {
        session.user.id = user.id
        session.user.role = user.role
        session.user.country = user.country
        session.user.status = user.status
        session.user.city = user.city
        session.user.occupation = user.occupation
        session.user.bio = user.bio
        session.user.profileImage = user.profileImage
      }
      return session
    },
  },
})
