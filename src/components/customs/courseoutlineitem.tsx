"use client"

import React from 'react'
import { CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'
interface courseoutlineprops {
    className?:string,
    text:string
}
const CourseOutlineItem = (props:courseoutlineprops) => {
  return (
    <li className={cn('capitalize text-sml  font-poppins',props.className)}>
        {props.text}
    </li>
  )
}

export default CourseOutlineItem