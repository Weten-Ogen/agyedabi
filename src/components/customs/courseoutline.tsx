"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import CourseOutlineItem from './courseoutlineitem'

interface courseprops {
    className?:string,
    outlines:any[]
}

const CourseOutline = (props:courseprops) => {
  return (
    <div className={cn('',props.className)}>
        <div className=''>
            {
                props.outlines.map(item => {
                    return(
                        <CourseOutlineItem  
                            key={item.id}
                            text='item.label'
                            className=''
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default CourseOutline