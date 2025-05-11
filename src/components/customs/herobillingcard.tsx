'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import HeroBilling from './herobilling'
import { AdminContent } from '../../../content/general'


interface herobillingCardprops {
    className?:string,
    details?:string,
}
const HerobillingCard = (props:herobillingCardprops) => {
  return (
    <div className={cn('w-full md:w-[80%] md:mx-auto py-20 ',props.className)}>
     
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