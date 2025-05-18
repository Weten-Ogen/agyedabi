'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import AccordionComp from './accordioncomp'
import BtnLink from './btnlink'
import Typop from './typop'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Image from 'next/image'
import Typoh2 from './typoh2'

interface heroaccordionprops {
    className?:string,
    details : heroaccordprops[],

}

const HeroAccordion = (props : heroaccordionprops) => {
  return (<div className={cn('p-4 md:w-[80%] w-full  my-10 flex flex-col gap-8  justify-center  md:mx-auto ',props.className)}>
          <Typoh2 className='text-smm uppercase text-center font-bold underline underline-offset-4 '>FAQ</Typoh2>
          <Card className='w-full p-0'>
          <CardContent className='flex flex-col w-full  '>
            <Accordion className='' collapsible type="single">
              {props.details.map((item:heroaccordprops, i:number) => {
              return ( 
                <AccordionItem className='' key={i} value={`item.title-${i}`}>
                <AccordionTrigger className='bg-white text-sml'>
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
                    <Typop className='text-sml'>
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