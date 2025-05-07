"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import Typoh2 from '../customs/typoh2'
import Typoh4 from '../customs/typoh4'
import Typop from '../customs/typop'
import TypoBtn from '../customs/typobtn'

interface heroprops {
    className?:string,
    heroImage:string,
    heading:string,
    subHeading:string,
    paragraph:string,
}
const Hero = (props: heroprops) => {
  return (
    <div className={cn('relative w-full md:h-screen overflow-hidden',props.className)}>
        <div className='max-w-full h-full bg-black/70'>
            <Image
                src={props.heroImage}
                alt={props.heroImage}
                width={500}
                height={500}
                className='w-full h-screen object-cover'
            />
        </div>
        <div className='absolute inset-0    flex justify-center p-4      text-pri-color flex-col gap-4 space-y-5  bg-black/40 w-full h-full'>
            <Typoh2 className='uppercase max-w-2xl text-med text-left '>
                    {props.heading}
            </Typoh2>
            <Typoh4 className='normal tracking-wider max-w-2xl text-left '>
                    {props.subHeading}
            </Typoh4>
            <TypoBtn className='bg-acc-color text-pri-color text-sml uppercase font-poppins hover:bg-pri-color hover:text-acc-color tracking-wider md:w-sm' href="/api/auth/callback/google">
                join us
            </TypoBtn>
        </div>

    </div>
  )
}

export default Hero