'use client'
import { cn } from '@/lib/utils'
import React from 'react'

interface herorequirementsprops {
    className?:string,
    details?:string,
}
const HeroRequirements = (props:herorequirementsprops) => {
  return (
    <div className={cn('',props.className)}>

    </div>
  )
}

export default HeroRequirements