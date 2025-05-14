'use server'
import { signIn, signOut } from "@/lib/auth";

export async function Login () {
    await signIn(
    )
}

export async function LogOut() {
    await signOut()
    
}