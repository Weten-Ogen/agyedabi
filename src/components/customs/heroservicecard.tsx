"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'

interface heroserviceprops {
    className?:string,
    details:servicesprops,
}

const HeroServiceCard = (props:heroserviceprops) => {
  return (
    <div className={cn('w-full rounded-sml ',props.className)}>
      <Card className='shadow-xl w-full h-[40vh] rounded-sml'>
        <CardContent className=' flex flex-col gap-6 h-full rounded-sml '>
            <div className='bg-acc-color p-4 rounded-lg max-w-14 text-white inline-block '>
              {props.details.icon}
            </div>
            <CardTitle className='text-smm uppercase tracking-wide font-bold '>{props.details.label}</CardTitle>
            <CardDescription className='text-sml'>{props.details.content}</CardDescription>
        </CardContent>
      </Card>

    </div>
  )
}

export default HeroServiceCard