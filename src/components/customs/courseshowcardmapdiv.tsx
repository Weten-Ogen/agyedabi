'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Typoh4 from './typoh4'
import { Badge } from '../ui/badge'

interface courseshowcardmapdivprops {
    className?:string,
    label:string,
    items: string[],
    itemsClass?:string,
    labelClass?:string,
    itemsdivClass?:string
}
const CourseShowCardMapDiv = (props:courseshowcardmapdivprops) => {
  return (
    <div className={cn(' flex flex-col gap-4',props.className)}>
        <Typoh4 className={cn('text-sml capitalize font-poppins ',props.className)}>
            {props.label}
        </Typoh4>
        <div className={cn('flex gap-4 items-center flex-wrap',props.itemsdivClass)}>
            { props.items && props.items.map((item:string,i:number)=> {
                return (
                    <Badge  key={i} 
                    className={cn('p-4 text-sml font-poppins capitalize text-white bg-sec-color',props.itemsClass)}>  {item}
                    </Badge>
                )
            })}
        </div>
    </div>
  )
}

export default CourseShowCardMapDiv;