"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import UserBio from '../userbio'
import { Session } from 'next-auth'
import { projectGetSourceMap } from 'next/dist/build/swc/generated-native'

interface  homepageimageprops {
    className?:string,
    imageUrl:string,
    user:Session | null
}

const HomePageImage = (props:homepageimageprops) => {
  return (
    <div className={cn('w-full relative  h-[50vh    ] md:h-[45vh] overflow-hidden object-contain',props.className)}>
        <div className='-z-20'>
        {
            props.imageUrl ?
            <Image
            src={props.imageUrl}
            alt={props.imageUrl}
            width={1000}
            height={1000}
            className='w-full h-full  md:h-auto md:object-cover '
            />: 
            <Skeleton  
            className='w-full  bg-slate-400'
            />
        }
        </div>
        <div className='absolute inset-0 h-[45vh] bg-black/80 text-white'>
        <div className=''>

            {
                props.user &&
                <UserBio
                description={props.user?.user.bio as string}
                imageUrl={props.user?.user.profileImage as string}
                className=''
                userName={props.user?.user.name as string}
                />
            }
            </div>
        </div>
    </div>
  )
}

export default HomePageImage