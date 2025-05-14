'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import HeroListItem from './herolistitem'

interface herolistprops{
    className?:string,
    details:string[],
}

const HeroList = (props:herolistprops) => {
  return (
    <div className={cn('',props.details)}>
    <div className='flex flex-col gap-8 '>
            {props.details && props.details.map((item:any, i:number) => {
                return(
                    <HeroListItem key={i} detail={item} />
                )
            })}
        </div>
    </div>
  )
}

export default HeroList