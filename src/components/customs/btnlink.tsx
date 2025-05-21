"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface btnlinkprops {
    className?:string,
    label:string,
    href:string
}

const BtnLink = (props:btnlinkprops) => {
    const router = useRouter();
    const handlepress = () => {
        router.push(props.href)
    }
    return (
    <Button
    className={cn('bg-acc-color hover:bg-acc-color hover:text-white hover:ease-out hover:duration-300 hover:-translate-y-0.5 cursor-pointer text-white font-bold capitalize p-4 text-sml z-10  my-2',props.className)} 
    onClick={handlepress} 
     >
        <span className='text-white font-space-grotesk text-sml capitalize'>
        {props.label}

        </span>
    </Button>
  )
}

export default BtnLink