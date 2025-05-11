"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import BtnLink from './btnlink'
import HeroList from './herolist'

interface herobillingprops {
    className?:string,
    details:billingprops,
}
const HeroBilling = (props:herobillingprops) => {
  return (
    <div className={cn('w-full   ',props.className)}>
      <Card className='p-0 bg-acc-color shadow-xl '>
        <CardContent className='bg-white rounded-t-2xl rounded-lg flex flex-col gap-4 mt-14 p-4'>
            <CardTitle className='text-sml tracking-wide leading-6 uppercase font-bold'>
                {props.details.course}
            </CardTitle>
            
            <CardDescription className='py-2 leading-7'>
              {props.details.description}
            </CardDescription>
            <BtnLink
              href={props.details.href}
              label={props.details.callToAction}
              className="text-white"
            />
            <div
              className="h-[2px] w-full rounded-lg bg-slate-100 my-4"
            />
            <HeroList
              className='py-0 px-6'
              details={props.details.herolist}
            />

        </CardContent>
      </Card>
    </div>
  )
}

export default HeroBilling