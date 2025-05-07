"use client"
import { cn } from '@/lib/utils'
import React from 'react'

interface typoh4props {
    children:string,
    className?:string,

}
const Typoh4 = (props:typoh4props) => {
  return (
    <h4 className={cn('text-sml   font-poppins',props.className)}>
        {props.children}
    </h4>
  )
}

export default Typoh4