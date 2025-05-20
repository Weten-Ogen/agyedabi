"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'
import { Quote,TextQuote } from 'lucide-react'
import Typop from './typop'
import Link from 'next/link'
import Typoh4 from './typoh4'

interface herotestimonialcardprops {
    className?:string,
    details:testimonialprops,
}
const HerotestimonialCard = (props:herotestimonialcardprops) => {
  return (
    <div className={cn('p-4 relative ',props.className)}>
              <div   className='max-w-full  '>
              <div className='flex flex-col gap-2'>
              <div>
                  <Quote 
                  size={45}
                  className='rotate-180 text-lag my-3   text-acc-color' />
                  <Typop className='py-1 line-clamp-12 md:line-clamp-3'>
                    {props.details.content}
                  </Typop>
              </div>
              <Link className='text-sml  text-acc-color cursor-pointer' href={props.details.href}>Read full story</Link>

              <div 
                className='h-[2px] bg-slate-200 w-full my-2'
              />
              <div className='my-5'>
                <Typoh4 className='text-left capitalize'>{props.details.name}</Typoh4>
                <Typop className='text-sml '>{props.details.email}</Typop>
              </div>

             
              <div className='max-w-full h-[60vh] my-10 overflow-hidden rounded-lg '>
                  <Image
                    src={props.details.imageUrl}
                    alt={props.details.imageUrl}
                    width={700}
                    height={500}
                    className='w-full h-[60vh] object-contain rounded-lg'
                  />
              </div>
            </div>
          </div>
    </div>
  )
}

export default HerotestimonialCard