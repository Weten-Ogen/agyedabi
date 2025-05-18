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
      <Card className='p-0 bg-acc-color rounded-none shadow-xl md:h-[120vh]'>
        <CardContent className='bg-white rounded-t-lg rounded-lg h-full flex flex-col gap-8 mt-6 p-2'>
            <CardTitle className='text-smm text-center tracking-wide leading-6 uppercase font-bold'>
                {props.details.course}
            </CardTitle>
            
            <CardDescription className=' leading-7 md:h-[30vh]'>
              {props.details.description}
            </CardDescription>
            <BtnLink
              href={props.details.href}
              label={props.details.callToAction}
              className="text-white tracking-wide font-bold"
            />
            <div
              className="h-[2px] w-full rounded-lg bg-slate-100 "
            />
            <HeroList
              className=''
              details={props.details.herolist}
            />

        </CardContent>
      </Card>
    </div>
  )
}

export default HeroBilling