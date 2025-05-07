'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Typoh4 from './typoh4'
import { Badge } from '../ui/badge'
import Typop from './typop'

interface profilelabeldivprops {
    className?:string,
    label:string,
    value:string,
    labelClass?:string,
    valueClass?:string,
}

const ProfileLabelDiv = (props:profilelabeldivprops) => {
  return (
    <div className={cn('flex items-center text-foreground gap-4 justify-between',props.className)}>
        <Typoh4  className={cn('font-poppins text-foreground text-sml lg:text-smm capitalize text-left',props.labelClass)}>{props.label}</Typoh4>
        <Typop className={cn("  p-2  capitalize text-right text-foreground ",props.valueClass)}>{props.value}</Typop>
    </div>
  )
}

export default ProfileLabelDiv