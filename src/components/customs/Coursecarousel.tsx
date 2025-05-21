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



interface Props {
  data: any[]
  className?: string
}

export default function CourseCarouselCard({ data, className }: Props) {
     const plugin = React.useRef(
    AutoPlay({ delay: 3000, stopOnInteraction: true })
  )
  return (
    <div className={cn(`w-full max-w-7xl bg-transparent mx-auto relative -top-12 z-10 cursor-pointer  p-2`,className)}>
      <Carousel
      className="ease-in-out w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
        opts={{
          align: 'start',
        }}
       
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
