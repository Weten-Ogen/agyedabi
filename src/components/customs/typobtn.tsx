"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface typobtnprops {
    className?:string,
    children: string,
    href:string,
}

const TypoBtn = (props:typobtnprops) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`${props.href}`);

    }
    return (
    <Button 
        onClick={handleClick} 
        className={cn('',props.className)}
    >
        {props.children}
    </Button>
  )
}

export default TypoBtn