"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import UserBio from '../userbio'

interface  homepageimageprops {
    className?:string,
    imageUrl:string,

}

const HomePageImage = (props:homepageimageprops) => {
  return (
    <div className={cn('w-full relative h-[45vh]  bg-black/65  -z-30 overflow-hidden object-cotain',props.className)}>
        {
            props.imageUrl ?
            <Image
            src={props.imageUrl}
            alt={props.imageUrl}
            width={1000}
            height={1000}
            className='w-full h-full  md:h-auto md:object-fill '
        />: 
        <Skeleton  
            className='w-full h-[45vh] bg-slate-400'
        />
        }
        <div className='absolute inset-5 z-10 text-white'>
            <UserBio
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, neque! Laudantium eum voluptatum a unde, est doloremque totam earum fuga magni eaque sit praesentium libero veniam voluptatibus quibusdam amet explicabo adipisci, temporibus rem! Distinctio, hic exercitationem. Alias cupiditate, repudiandae in veniam, incidunt consectetur, quos nesciunt laborum corrupti fuga laudantium minus.'
                imageUrl=''
                className=''
                userName='marcus'
            />
        </div>
    </div>
  )
}

export default HomePageImage