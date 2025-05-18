'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import CourseShowCard from './courseshowcard'
import { cn } from '@/lib/utils'
import React from 'react'
import AutoPlay from 'embla-carousel-autoplay'
interface courseprops {
  id: string
  name: string
  registrationCost: string
  tuitionCost: string
  timespan: string
  lecturesNumber: string
  startDate: string
  endDate: string
  classSize: string
  image: string
  requirements: string[]
}

interface Props {
  data: courseprops[]
  className?: string
}

export default function CourseCarouselCard({ data, className }: Props) {
     const plugin = React.useRef(
    AutoPlay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className={cn(`w-full max-w-7xl bg-transparent mx-auto relative -top-12  p-2`,className)}>
      <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.map((item, i) => (
            <CarouselItem
              key={i}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <CourseShowCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    </div>
  )
}
