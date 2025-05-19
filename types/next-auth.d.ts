// types/next-auth.d.ts or anywhere accessible by tsconfig
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role?: string
      bio?:string
      country?: string | null
      status?: string
      city?: string | null
      occupation?: string | null
      profileImage?: string | null
    }
  }

  interface User {
    id: string
    role: string
    country?: string
    status?: string
    city?: string
    occupation?: string
    profileImage?: string
    bio?:string
  }
}
