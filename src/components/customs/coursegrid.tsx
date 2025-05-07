"use client"
import React from 'react'
import CourseList from './courseslist'
import { cn } from '@/lib/utils'

interface coursegrid {
    className?:string
}

const CourseGrid = (props:coursegrid) => {
  return (
    <div className={cn('',props.className)}>
        <CourseList/>
    </div>
  )
}

export default CourseGrid