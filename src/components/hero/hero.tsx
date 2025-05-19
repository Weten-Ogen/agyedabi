"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import Typoh2 from '../customs/typoh2'
import Typoh4 from '../customs/typoh4'
import Typop from '../customs/typop'
import TypoBtn from '../customs/typobtn'
import { Session } from 'next-auth'

interface heroprops {
    className?:string,
    heroImage:string,
    heading:string,
    subHeading:string,
    user:Session | null
    paragraph:string,
}
const Hero = (props: heroprops) => {
  return (
    <div className={cn('relative w-full h-screen   ',props.className)}>
        <div className=' w-full h-full'/>
        <div className='max-w-full  w-full h-full absolute inset-0'>
            <Image
                src={props.heroImage}
                alt={props.heroImage}
                width={1000}
                height={800}
                className='w-full h-screen object-cover'
            />
        </div>
        <div className='absolute inset-0 z-20   bg-black/80 w-full h-full  '>


        <div className='text-pri-color flex-col flex mt-32 p-4  space-y-8 md:mt-80  w-full h-full md:p-12'>
            <Typoh2 className='uppercase md:max-w-xl text-smm md:text-med text-left md:text-justify '>
                    {props.heading}
            </Typoh2>
            <Typoh4 className='normal leading-7 md:max-w-xl text-sml md:text-smm text-left md:text-justify '>
                    {props.subHeading}
            </Typoh4>
            <TypoBtn className='bg-acc-color  text-pri-color text-sml uppercase font-poppins hover:bg-pri-color hover:text-acc-color tracking-wider md:w-xl py-2 px-8' href="/api/auth/callback/google">
                join us
            </TypoBtn>
        </div>
        </div>
       

    </div>
  )
}

export default Hero