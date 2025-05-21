'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import HeroBilling from './herobilling'
import { AdminContent } from '../../../content/general'
import Typoh2 from './typoh2'


interface herobillingCardprops {
    className?:string,
    details?:string,
}
const HerobillingCard = (props:herobillingCardprops) => {
  return (
    <div className={cn('w-full md:w-[80%] md:mx-auto py-20 ',props.className)}>
        <Typoh2 className='text-smm text-center mb-10 uppercase font-bold underline'>courses</Typoh2>
        <div className={cn('grid grid-cols-1 lg:grid-cols-3 items-start gap-8 w-full p-4',props.className)}>
            {
              AdminContent.Herobilling.map((item:any, i:number) => {
                return (
                  <HeroBilling  key={i} details={item} />
                )
              })
            }
        </div>
    </div>
  )
}

export default HerobillingCard