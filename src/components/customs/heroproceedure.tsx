"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import HeroList from './herolist'
import HeroProcedureList from './heroprocedurelist'
import Typoh2 from './typoh2'

interface heroprocedureprops {
    className?:string,

} 
const HeroProcedure = (props:heroprocedureprops) => {
  return (
    <div className={cn('md:p-8   bg-gradient-to-b  ',props.className)}>
            <Typoh2 className='text-center text-wrap text-med font-bold text-acc-color  md:text-lag  uppercase py-2 md:p-0 '>Follow this procedures</Typoh2>
        <div className='md:flex md:items-center md:max-w-[80%] md:mx-auto  md:justify-center '>
            <HeroProcedureList
            details={[
                'Sign up to join the community',
                "update your profile page",
                "join a course",
                "wait to get vetted",
                "make payments after you pass the vetting",
                "complete the course",
                "we help you achieve your career growth goals"
            ]}
            />
        </div>
    </div>
  )
}

export default HeroProcedure