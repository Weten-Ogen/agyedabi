"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useSession,signIn, } from 'next-auth/react'



const SignInBtn = () => {
  const session = useSession();  
      const router = useRouter()
    return (
    <div className=''>
        <Button className='bg-acc-color text-sml font-poppins  capitalize text-white' onClick={()=> {
          signIn('google')
          session.status === 'authenticated' && router.push('/home')
          session.status === 'authenticated' && toast('logged in successfully')

        }}>log in</Button>
    </div>
  )
}

export default SignInBtn