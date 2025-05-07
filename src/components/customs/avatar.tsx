'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

interface avaatarprops {
    className?:string,
    imageUrl: string,
    label:string,
}

const Avaatar = (props:avaatarprops) => {
  return (
    <div className={cn('',props.className)}>
    <Avatar>    
            <AvatarImage 
              src={props.imageUrl}
              alt={props.label}
              className=''
             />
        </Avatar>

    </div>
  )
}

export default Avaatar