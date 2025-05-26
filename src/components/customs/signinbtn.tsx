"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useSession,signIn, } from 'next-auth/react'
import { cn } from '@/lib/utils'

interface signprops {
  label?: string,
  className?:string
}

const SignInBtn = (props: signprops) => {
  const session = useSession();   
      const router = useRouter()
    return (
    <div className=''>
        <Button className={cn('bg-acc-color text-sml font-poppins  capitalize text-white hover:bg-acc-colo  cursor-pointer hover:duration-300 ease-out hover:-translate-y-0.5  hover:text-white ',props.className)} onClick={()=> {
          signIn('google')
          session.status === 'authenticated' && router.push('/home')
          session.status === 'authenticated' && toast.success('logged in successfully')

        }}>{props.label ? props.label : 'log in'}</Button>
    </div>
  )
}

export default SignInBtn