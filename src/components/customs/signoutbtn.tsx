"use client"
import React from 'react'
import { Button } from '../ui/button'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const SignOutBtn = () => {
    const session = useSession();  
    const router = useRouter()
  return (
    <div>
      <Button className='bg-acc-color text-sml m-2 font-poppins capitalize text-white' onClick={() => {
        signOut()
        if(session.status =='unauthenticated' && router.push('/'))
        session.status=== 'unauthenticated' && toast('logged out successfully')
        }}>log out</Button>
    </div>
  )
}

export default SignOutBtn