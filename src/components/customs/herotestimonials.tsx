'use client '
import { cn } from '@/lib/utils'
import React from 'react'
import HerotestimonialCard from './herotestimonialcard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

interface herotestimonialsprops {
    className?:string,
    details:testimonialprops[],
}
const HeroTestimonials = (props:herotestimonialsprops) => {
  return (
    <div className={cn('md:w-[80%] md:mx-auto p-4',props.className)}>
        <Carousel orientation='horizontal' className=''>
          <CarouselContent   className=''>

            {props.details && props.details.map((item:testimonialprops, i:number) => {
              return (
                <CarouselItem key={i}>
                <HerotestimonialCard    
                details={item} 
                />
                </CarouselItem>
              )
            })}
      </CarouselContent>
            
              <CarouselPrevious
               className="z-10 flex gap-10 absolute top-95 md:top-80 cursor-pointer text-white lg:top-78 left-4 lg:left-5 bg-acc-color  p-2 text-lag"
              />
              <CarouselNext
                className="z-10 flex gap-10 md:top-80 absolute top-95 cursor-pointer text-white lg:top-78 left-18 lg:left-15 bg-acc-color   p-2 text-lag"
              />
            
      </Carousel>
    </div>
  )
}

export default HeroTestimonials