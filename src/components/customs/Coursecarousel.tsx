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
    <div className={cn(" relative  w-[80%] mx-auto ",props.className)}>
        <Carousel orientation='horizontal'  className=''>
            <CarouselPrevious     
                className='  gap-10 hidden md:flex absolute cursor-pointer z-20 text-white  bg-acc-color  p-2 text-lag'
            />
            <CarouselContent    className='w-1/3 md:w-2/3 lg:w-3/6'>
                        {props.data.map((item:courseprops,i:number) => {
                            return (<CarouselItem key={i} className='p-4' >
                             <CourseShowCard
                                    {...item}
                                 className=""
                            />

                        </CarouselItem>)
                            })
                    }

               

            </CarouselContent>
                <CarouselNext
                    className='z-20 hidden md:flex gap-10 absolute  cursor-pointer text-white  bg-acc-color  p-2 text-lag'
                />
        </Carousel>
    </div>
  )
}

export default CourseCarouselCard