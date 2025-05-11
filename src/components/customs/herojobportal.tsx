'use client'
import { cn } from '@/lib/utils'
import React from 'react'

interface herojobportalprops {
    className?:string,
    details?:string,
}
const HeroJobPortal = (props:herojobportalprops) => {
  return (
    <div className={cn('',props.className)}>

    </div>
  )
}

export default HeroJobPortal