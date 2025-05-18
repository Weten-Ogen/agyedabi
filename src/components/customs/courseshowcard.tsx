"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import CourseShowCardDiv from './courseshowcarddiv'
import { Skeleton } from '../ui/skeleton'
import Image from 'next/image'
import BtnLink from './btnlink'
import { cn } from '@/lib/utils'

interface courseshowcardprops {
        id:string,
        name:string,
        registrationCost:string,
        tuitionCost:string,
        timespan:string,
        lecturesNumber:string,
        startDate:string,
        endDate:string,
        classSize:string,
        image:string,
        requirements:string[],
        className?:string
}
const CourseShowCard = (props:courseshowcardprops) => {
  return (
    <div className={cn('p-0',props.className)}>
        <div className='p-0'>
        {
            
            props.id ?
            <Card className='p-0 shadow-xl'>
            <CardContent className=' '>
                <div className='flex items-center gap-4'>
                    <div className='p-2'>
                       { 
                        props.image ?
                        <Image 
                            src={props.image}
                            alt={props.image}
                            width={10}
                            height={5}
                            className='rounded-full h-5 w-5'
                        />: 
                        <Skeleton className='w-10 h-10 bg-slate-400 rounded-full'/>                        
                        }
                    </div>
                <CardTitle className='font-poppins text-sml font-bold uppercase   '>
                    {props.name || <Skeleton className='w-10 rounded-lg bg-slate-400'/>}
                </CardTitle>
                </div>
                <CardDescription className='flex flex-col text-foreground  gap-2 p-2 md:p-0 md:gap-0 '>
                    <CourseShowCardDiv
                        label='class size'
                        value={props.classSize}
                        className='justify-between'
                    />
                    <CourseShowCardDiv
                        label='registration fees'
                        value={props.registrationCost}
                           className='justify-between'

                    />
                   
                    <CourseShowCardDiv
                        label="duration"
                        value={props.endDate}
                        className='justify-between'
                        
                    />
                </CardDescription>
                <BtnLink
                    href={`/courses/${props.id}`}
                    label='view course'
                    className='w-full text-white'
                />
            </CardContent>
        </Card>: <Skeleton className='w-500 h-500 bg-slate-400'/>
       }
        </div>
    </div>
  )
}

export default CourseShowCard