'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Typoh4 from './typoh4'
import Typop from './typop'
import { Skeleton } from '../ui/skeleton'

interface CourseShowCardDivProps {
  className?: string
  label: string
  value: string
  labelClass?: string
  valueClass?: string
}

const CourseShowCardDiv = (props: CourseShowCardDivProps) => {
  
  return (
    <div className={cn('font-poppins flex justify-between items-center gap-2', props.className)}>
      {props.label ? (
        <Typoh4
          className={cn(
            'font-space-grotesk text-sml md:text-smm text-left capitalize',
            props.labelClass
          )}
        >
          {props.label}
        </Typoh4>
      ) : (
        <Skeleton />
      )}
      {props.value ? (
        <Typop
          className={cn(
            'text-right font-poppins text-sml capitalize',
            props.valueClass
          )}
        >
          {props.value}
        </Typop>
      ) : (
        <Skeleton />
      )}
    </div>
  )
}

export default CourseShowCardDiv
