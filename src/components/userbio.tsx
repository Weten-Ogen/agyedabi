"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Skeleton } from './ui/skeleton'
import Typop from './customs/typop'
import Typoh4 from './customs/typoh4'

interface userbioprops {
    className?:string,
    description:string,
    imageUrl:string,
    userName:string,

}

const UserBio = (props:userbioprops) => {
    const  userString = `Welcome, ${props.userName.toLocaleUpperCase()}`
  return (
    <div className={cn('mt-10 md:mt-15 md:p-4 flex flex-col items-start gap-2',props.className)}>
        <div className='flex items-center gap-2'>
            {props.imageUrl ?  <Image
                src={props.imageUrl}
                alt={props.imageUrl}
                width={20}
                height={20}
            />  : <Skeleton className='h-10 w-10 rounded-lg bg-slate-400'/>}
            <Typoh4  className='font-poppins text-smm  capitalize '>
               {props.userName}
            </Typoh4>
        </div>
        <div >
            <Typop className='text-white max-w-lg font-poppins text-sml '>
                {props.description}
            </Typop>
        </div>
    </div>
  )
}

export default UserBio