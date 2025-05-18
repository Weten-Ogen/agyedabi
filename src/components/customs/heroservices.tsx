'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import HeroServiceCard from './heroservicecard'
import { AdminContent } from '../../../content/general'
import Typoh2 from './typoh2'

interface heroservicesprops {
    className?:string,
    details: any,
}
const HeroServices = (props:heroservicesprops) => {
  return (
    <div className={cn('bg-acc-color bg-gradient-to-b from-blue-400 to-blue-300',props.className)}>
      <Typoh2 className='text-smm text-center uppercase underline underline-offset-4 underline-white  py-4   text-white'>Services</Typoh2>
      <div className=' md:w-[75%] md:h-screen py-20 md:mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  gap-4 md:gap-8'>
          {AdminContent.heroContent.services.map((item:any,i:number) => {
            return(
              <HeroServiceCard
              key={i + item.label}
              className=''
              details={{
                content:item.content,
                icon:<item.icon/>,
                label:item.label,

              }}
              />
            )
          })}
      </div>

    </div>
    </div>
  )
}

export default HeroServices