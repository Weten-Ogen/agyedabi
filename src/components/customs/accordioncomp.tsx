import { cn } from '@/lib/utils'
import { Prosto_One } from 'next/font/google'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem ,AccordionTrigger ,} from '../ui/accordion'
import Typop from './typop'
import Image from 'next/image'
import BtnLink from './btnlink'

interface acccordioncomprops {
    className?:string,
    details:heroaccordprops[]|[]
}

const AccordionComp = (props:acccordioncomprops) => {
  return (
    <div className={cn('',props.className)}>
        <Accordion className='flex flex-col gap-4' type='single'  collapsible>
                {
                    props.details.map((item:any, i:number) => {
                        return (
                                <AccordionItem className='' key={i} value={`item.title-${i}`}>
                                <AccordionTrigger className='bg-white capitalize text-sml'>
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className='text-sml max-w-5xl leading-7 '>
                                    <div className='max-w-full h-[40vh] object-contain overflow-hidden'>
                                        {item.imageUrl && 
                                         <Image
                                            src={item.imageUrl}
                                            alt={item.imageUrl}
                                            width={800}
                                            height={800}
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
                        )
                    })
                }
                    </Accordion>
    </div>
  )
}

export default AccordionComp