"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useSession,signIn,signOut } from 'next-auth/react'



const SignInBtn = () => {
    return (
    <div>
        <Button className='bg-acc-color text-sml font-poppins capitalize text-white' onClick={()=> signIn('google',{redirectTo:"/home"})}>log in</Button>
    </div>
  )
}

export default SignInBtn