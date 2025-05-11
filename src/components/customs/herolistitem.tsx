'use client'
import { cn } from '@/lib/utils'
import { CheckCheck } from 'lucide-react'
import React from 'react'

interface herolistitemprops {
    className?: string,
    detail?:string
}

const HeroListItem = (props:herolistitemprops) => {
  return (
    <div className={cn('flex gap-4 items-center',props.className)}>
        <div className='text-acc-color'>
            <CheckCheck className='text-acc-color'/>
        </div>
        {
            props.detail &&
        <div className='capitalize text-sml '>
            {props.detail}
        </div>
        }
    </div>
  )
}

export default HeroListItem