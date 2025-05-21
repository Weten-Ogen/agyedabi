"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import AccordionComp from './accordioncomp'
import { AdminContent } from '../../../content/general'
import { ChevronRight } from 'lucide-react'

const UnassignedComp = () => {
  return (
<div className=' flex flex-col gap-8'>
        <Card>
            <CardContent className='flex flex-col gap-4 md:gap-2'>
                <CardTitle className='text-sml uppercase font-poppins'>
                    land your dream job
                </CardTitle>
                <CardDescription className='flex gap-4 md:gap-2 items-center  '>
                    <ChevronRight size={30} className='bg-acc-color rounded-lg bg-radial  font-poppins p-1 text-white'/> 
                    <span className='font-poppins text-sml capitalize'>
                        A skill that place you in the one percent.

                    </span>
                </CardDescription>
            </CardContent>
        </Card>
        <Card>
            <CardContent className='flex flex-col gap-4 md:gap-2'>
                <CardTitle className='text-sml uppercase font-poppins'>
                    offer practical course
                </CardTitle>
                <CardDescription className='flex gap-4 md:gap-2 items-center  '>
                    <ChevronRight size={30} className='bg-acc-color rounded-lg bg-radial  font-poppins p-1 text-white '/> 
                    <span className='text-sml font-poppins capitalize'>
                        Skills that pays alot.

                    </span>
                </CardDescription>
            </CardContent>
        </Card>
        <Card>
            <CardContent className='flex flex-col gap-4 md:gap-2'>
                <CardTitle className='text-sml uppercase font-poppins'>
                    Remote job's searching
                </CardTitle>
                <CardDescription className='flex gap-4 md:gap-2 items-center  '>
                    <ChevronRight size={30} className='bg-acc-color rounded-lg bg-radial  font-poppins p-1 text-white'/>
                    <span className='text-sml font-poppins capitalize
                    '>
                     work from the comfort of your home.
                    </span>
                </CardDescription>
            </CardContent>
        </Card>
        <Card>
            <CardContent className='flex flex-col gap-4 md:gap-2'>
                <CardTitle className='text-sml uppercase font-poppins'>
                    Boostrapping your Business
                </CardTitle>
                <CardDescription className='flex gap-4 md:gap-2 items-center  '>
                    <ChevronRight size={30} className='bg-acc-color rounded-lg bg-radial  font-poppins p-1 text-white text-sml'/>
                    <span className='font-poppins text-sml capitalize'>
                        work on things that makes you excited.
                    </span>
                </CardDescription>
            </CardContent>
        </Card>
        <Card className='w-full shadow-xl mt-8'>
            <CardContent className='w-full flex flex-col gap-4'>
               <AccordionComp
                details={AdminContent.HeroAccordion}
                />             
            </CardContent>
        </Card>
        </div>
)
}

export default UnassignedComp