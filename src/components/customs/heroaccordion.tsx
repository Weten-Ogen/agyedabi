'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import AccordionComp from './accordioncomp'
import BtnLink from './btnlink'
import Typop from './typop'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Image from 'next/image'

interface heroaccordionprops {
    className?:string,
    details : heroaccordprops[],

}

const HeroAccordion = (props : heroaccordionprops) => {
  return (<div className={cn('p-4 md:w-[75%] w-full  py-20 flex justify-center  md:mx-auto ',props.className)}>
          <Card className='w-full p-0'>
          <CardContent className='flex flex-col w-full p-4 '>
            <Accordion className='' collapsible type="single">{props.details.map((item:heroaccordprops, i:number) => {
              return ( 
                <AccordionItem className='' key={i} value={`item.title-${i}`}>
                <AccordionTrigger className='bg-white capitalize text-sml'>
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className='text-sml max-w-5xl leading-7 '>
                    <div className='max-w-full h-[30vh] object-contain overflow-hidden'>
                        {item.imageUrl && 
                         <Image
                            src={item.imageUrl}
                            alt={item.imageUrl}
                            width={800}
                            height={400}
                            className='w-full h-auto object-cover'

                         />

                        }
                    </div>
                    <Typop>
                        {item.content}
                    </Typop>
                    <div className=''>
                        {
                            item.callToAction && 

                            <BtnLink
                                href={item.href}
                                label={item.callToAction}
                                className='text-white capitalize tracking-wide'

                                />
                              }
                    </div>
                </AccordionContent>
                </AccordionItem>
                )})}
          </Accordion> 
          </CardContent>
       </Card>
    </div>
  )
}

export default HeroAccordion