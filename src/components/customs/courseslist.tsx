"use client"
import React from 'react'
import { AdminContent } from '../../../content/general'
import CourseShowCard from './courseshowcard'

const CourseList = () => {
  return (
    <div>
        <div className='flex gap-4'>
            {AdminContent.courseContent.courselist.map((item:any, i:number)=> {
                return (
                    <CourseShowCard
                        key={i}
                        {...item} 
                    />
                )
            })}
        </div>
    </div>
  )
}

export default CourseList