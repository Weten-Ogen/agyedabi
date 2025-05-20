"use client"
import React from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'


interface heropaymentsprops{
    className?:string,
    content:string,
    title:string,
}
const HeroPayments = (props:heropaymentsprops) => {
  return (
    <div className={cn(' md:h-screen md:mt-20',props.className)}>
        <Card className=''>
            <CardContent className='flex flex-col items-center gap-8'>
                <CardTitle className='text-smm font-bold uppercase bg-clip-content'>
                    {props.title}
                </CardTitle>
                <CardContent className='md:max-w-4xl text-justify leading-8 text-sml tracking-wide'>
                    {props.content}
                </CardContent>
            </CardContent>
        </Card>
    </div>
  )
}

export default HeroPayments