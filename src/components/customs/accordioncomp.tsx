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
                                <AccordionTrigger className=' capitalize text-smm text-acc-color '>
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className='text-sml max-w-5xl leading-7  '>
                                    
                                    <Typop className=' text-sml  '>
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