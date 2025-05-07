'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Typoh4 from './typoh4'
import Typop from './typop'
import { Proportions } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'
interface courseshowcarddivprops {
    className?:string,
    label:string,
    value:string,
    labelClass?:string,
    valueClass?:string,
}
const CourseShowCardDiv = (props:courseshowcarddivprops) => {
  return (
    <div className={cn('font-poppins  flex items-center gap-2',props.className)}>
        {
            props.label ? 
            <Typoh4 className={cn("font-poppins  text-left capitalize",props.labelClass)}>{props.label}</Typoh4>:<Skeleton/>
        }
        {
            props.value ?
            <Typop className={cn(' text-right  font-poppins   capitalize',props.valueClass)}>{props.value}</Typop>:
            <Skeleton/>

        }
    </div>
  )
}

export default CourseShowCardDiv