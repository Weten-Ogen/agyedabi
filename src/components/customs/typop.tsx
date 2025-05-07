"use client"
import { cn } from '@/lib/utils'
import React from 'react'

interface typoprops {
    children:string,
    className?:string,

}
const Typop = (props:typoprops) => {
  return (
    <p className={cn(' text-foreground font-poppins ',props.className)}>
        {props.children}
    </p>
  )
}

export default Typop