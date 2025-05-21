"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import CourseShowCardDiv from './courseshowcarddiv'
import { Skeleton } from '../ui/skeleton'
import Image from 'next/image'
import BtnLink from './btnlink'
import { cn, formatCurrency } from '@/lib/utils'

interface courseshowcardprops {
        id:string,
        name:string,
        registrationCost:string,
        tuitionCost:string,
        timespan:string,
        lectureNumber:string,
        startDate:string,
        endDate:string,
        classSize:string,
        image?:string,
        requirements:string,
        className?:string
}
const CourseShowCard = (props:courseshowcardprops) => {
  return (
    <div className={cn('z-10 p-0 bg-transparent rounded-lg',props.className)}>
        <div className='p-0 bg-transparent rounded-lg'>
        {
            
            props.id ?
            <Card className='p-0 shadow-lg rounded-lg'>
            <CardContent className='p-4 rounded-lg '>
                <div className='flex flex-col items-center gap-4 '>
                    
                <CardTitle className='font-space-grotesk text-sml font-bold uppercase    pb-2'>
                    {props.name || <Skeleton className='w-10 rounded-lg bg-slate-400'/>}
                </CardTitle>
                </div>
                <CardDescription className='flex flex-col text-foreground   space-y-2 gap-4 p-2 '>
                    <CourseShowCardDiv
                        label='registration fees'
                        value={formatCurrency(props.registrationCost)}
                           className='justify-between'

                    />
                    <CourseShowCardDiv
                        label='class size'
                        value={props.classSize}
                        className='justify-between'
                    />
                   
                    <CourseShowCardDiv
                        label="duration"
                        value={props.timespan}
                        className='justify-between'
                        
                    />
                </CardDescription>
                <BtnLink
                    href={`/courses/${props.id}`}
                    label='view course'
                    className='w-full cursor-pointer text-white'
                />
            </CardContent>
        </Card>: <Skeleton className='w-500 h-500 bg-slate-400'/>
       }
        </div>
    </div>
  )
}

export default CourseShowCard