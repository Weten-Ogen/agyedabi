"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'
import BtnLink from './btnlink'
import Image from 'next/image'
import { ListEnd, LucideUnderline, PenLine, Underline } from 'lucide-react'

interface aboutusprops {
    className?:string,
    details:aboutprops,
}

const AboutUs = (props:aboutusprops) => {
    
  return (
    <div className={cn(' md:w-[80%] md:mx-auto p-4 py-20',props.className)}>
        <Card className='p-0 shadow-xl'>
            <CardContent className='flex font-poppins flex-col gap-4 p-0'>
                <div>
                    <CardTitle className='text-med uppercase font-space-grotesk py-5 text-center'>
                    {props.details.heading}
                </CardTitle>
                </div>
                <div className='max-w-full h-[45vh] p-0 object-contain overflow-hidden'>
                    <Image
                        src={props.details.imageUrl}
                        alt={props.details.imageUrl}
                        width={1000}
                        height={900}
                        className='w-full h-auto object-cover md:object-fill'
                    />
                </div>
                <CardDescription className='text-sml md:max-w-2xl md:mx-auto leading-8 capitalize tracking-wide p-4'>
                    {props.details.content}
                </CardDescription>
                <BtnLink
                    href={props.details.href}
                    label={props.details.callToAction}
                    className='text-sml font-poppins text-white max-w-lg mx-auto'
                />
            </CardContent>
        </Card>
    </div>
  )
}

export default AboutUs