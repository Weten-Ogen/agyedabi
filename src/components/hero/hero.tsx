"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import Typoh2 from '../customs/typoh2'
import Typoh4 from '../customs/typoh4'
import Typop from '../customs/typop'
import TypoBtn from '../customs/typobtn'
import { Session } from 'next-auth'
import BtnLink from '../customs/btnlink'

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


        <div className='text-pri-color flex-col flex mt-32 p-4  space-y-8 md:mt-60  w-full h-full md:p-12 font-space-grotesk'>
            <Typoh2 className='uppercase md:max-w-xl font-space-grotesk text-smm md:text-med text-left md:text-justify '>
                    {props.heading}
            </Typoh2>
            <Typoh4 className='normal leading-7 md:max-w-xl text-sml font-space-grotesk md:text-smm text-left md:text-justify '>
                    {props.subHeading}
            </Typoh4>
            <BtnLink
                href='https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=108050337403-ku8t66ucm9otms14eohrvabckebpik7n.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.agyedabi.shop%2Fapi%2Fauth%2Fcallback%2Fgoogle&code_challenge=baFKinlqZFSngRI24mwoEk6z5gtheR7rKt7VL9GAb2w&code_challenge_method=S256&scope=openid%20profile%20email&service=lso&o2v=2&flowName=GeneralOAuthFlow'
                label='join our community'
                className='text-white bg-acc-color hover:bg-acc-color hover:text-white'
            />
        </div>
        </div>
       

    </div>
  )
}

export default Hero