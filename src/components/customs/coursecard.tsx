'use client'
import { cn, formatCurrency } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import BtnLink from './btnlink'
import CourseShowCardDiv from './courseshowcarddiv'

interface coursecardprops {
    className?:string,
    details:courseprops

}
const CourseCard = (props:coursecardprops) => {
  return (
    <div className={cn('w-full p-4',props.className)}  >
        <Card className='shadow-lg '>
            <CardContent className='w-full  flex  text-sml flex-col gap-4'>
                <CardTitle className='text-smm uppercase font-space-grotesk text-center my-4'>
                    {props.details.name}
                </CardTitle>
                <CardDescription className='p-2 text-foreground flex flex-col gap-4'>
                    <CourseShowCardDiv
                        label='enrollment date'
                        value={props.details.startDate}
                        labelClass='text-left'
                        valueClass='text-right'
                        className='flex items-center justify-between w-full text-sml font-poppins text-foreground gap-8'
                    />
                    <CourseShowCardDiv
                        label='enrollment size'
                        value={props.details.classSize}
                        labelClass='text-left'
                        valueClass='text-right'
                        className='flex items-center justify-between w-full text-sml font-poppins text-foreground gap-8'
                    />
                    <CourseShowCardDiv
                        label='registration fee'
                        value={formatCurrency(props.details.registrationCost)}
                        labelClass='text-left'
                        valueClass='text-right'
                        className='flex items-center justify-between w-full text-sml font-poppins text-foreground gap-8'
                    />
                    <CourseShowCardDiv
                        label='number of lectures'
                        value={props.details.lectureNumber}
                        labelClass='text-left'
                        valueClass='text-right'
                        className='flex items-center justify-between w-full text-sml font-poppins text-foreground gap-8'
                    />
                </CardDescription>
                <BtnLink
                    href={`/courses/${props.details.id}`}
                    label='view details'
                    className='text-white'
                   
                />
            </CardContent>
        </Card>
    </div>
  )
}

export default CourseCard