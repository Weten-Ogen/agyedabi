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
    <div className={cn('w-full ',props.className)}>
      <Card className='shadow-xl'>
        <CardContent className=' flex flex-col gap-4 '>
            <div className='bg-acc-color p-4 rounded-lg max-w-14 text-white inline-block '>
              {props.details.icon}
            </div>
            <CardTitle className='text-smm capitalize '>{props.details.label}</CardTitle>
            <CardDescription className='text-sml'>{props.details.content}</CardDescription>
        </CardContent>
      </Card>

    </div>
  )
}

export default HeroServiceCard