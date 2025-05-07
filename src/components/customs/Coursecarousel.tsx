"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { cn } from '@/lib/utils'
import CourseShowCard from './courseshowcard'
import { Button } from '../ui/button'


interface courseprops {
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
    requirements:string[]
}
interface coursecarouselcardprops {
    className?:string
    data : courseprops []
}
const CourseCarouselCard = (props:coursecarouselcardprops ) => {
  return (
    <div className={cn("md:w-[70%] w-[80%] h-[30vh] md:h-[20vh]  relative -top-8 z-10 mx-auto",props.className)}>
        <Carousel orientation='horizontal'  >
            <CarouselContent   className='w-1/3 md:w-2/3 lg:w-3/4'>
                <CarouselItem className={cn('flex  items-start  gap-8',props.className)}>
                        {props.data.map((item:courseprops,i:number) => {
                            return <CourseShowCard
                                    key={i}
                                    {...item}
                                 
                            />
                        })}

                </CarouselItem>
               

            </CarouselContent>
                <CarouselPrevious  
                    
                />
                <CarouselNext
                />
        </Carousel>
    </div>
  )
}

export default CourseCarouselCard