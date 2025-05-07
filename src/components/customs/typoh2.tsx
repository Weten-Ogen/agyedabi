"use client"
import { cn } from '@/lib/utils'
import React from 'react'

interface typoh2props {
    children:string,
    className?:string,

}
const Typoh2 = (props:typoh2props) => {
  return (
    <h2 className={cn('text-smm   font-poppins',props.className)}>
        {props.children}
    </h2>
  )
}

export default Typoh2