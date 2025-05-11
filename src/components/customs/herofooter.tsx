'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Typop from './typop'
import { information, navigation, services, solutions } from '../../../content/general'
import HeroFooterLink from './herofooterlink'
import Typoh4 from './typoh4'

interface herofooterprops {
    className?:string,
    

}

const HeroFooter = (props:herofooterprops) => {
  
  return (
    <div className={cn('bg-slate-900 text-white w-full pt-5  ',props.className)}>

    <div className='grid grid-cols-2 capitalize  p-4 md:w-[70%] md:mx-auto lg:grid-cols-3  gap-8'>
      <div className='flex flex-col gap-4'>
        <Typoh4 className='text-med font-bold underline underline-offset-4 underline-acc-color text-acc-color capitalize'>services</Typoh4>
        <div className='flex flex-col gap-4'>
          {navigation.map((item:any, i:number) => {
            return(
              <HeroFooterLink key={i} details={item}/>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <Typoh4 className='text-med font-bold underline underline-offset-4 underline-acc-color text-acc-color capitalize'>solutions</Typoh4>
        <div className='flex flex-col gap-4'>
          {solutions.map((item:any, i:number) => {
            return(
              <HeroFooterLink key={i} details={item}/>
            )
          })}
        </div>
    </div>
    <div className='flex flex-col gap-4'>
        <Typoh4 className='text-med font-bold underline underline-offset-4 underline-acc-color text-acc-color capitalize'>information</Typoh4>
        <div className='flex flex-col gap-4'>
          {information.map((item:any, i:number) => {
            return(
              <HeroFooterLink key={i} details={item}/>
            )
          })}
        </div>
    </div>
   

    </div>
  </div>
  )
}

export default HeroFooter