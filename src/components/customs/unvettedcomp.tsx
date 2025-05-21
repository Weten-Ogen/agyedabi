"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import { AdminContent } from '../../../content/general'
import Typop from './typop'
import BtnLink from './btnlink'
import Typoh4 from './typoh4'
import { Badge } from '../ui/badge'
import { Check, Medal } from 'lucide-react'

const UnvettedComp = () => {
    const badgeitem=  [
        'frontend  development',
        'backend development',
        'system development',
        'fullstack development',
        'mobile development',
        'career pathway',
      
    ]
    return (
    <div className='w-full flex flex-col gap-10'>
         <Card className=''>
            <CardContent className='flex flex-col gap-4 '>
                <CardTitle className=' flex item-center  gap-4  '>
                    <Check 
                            size={50} 
                            className='bg-acc-color w-13 h-8 rounded-full object-fit p-1 text-white'
                    />
                    <span className='font-poppins text-sml uppercase leading-7 '>
                    we partner with global companies to build you a profile equivalent 
                    to a 4 years professionally experience developer. 
                    </span>
                </CardTitle>
               
            </CardContent>
         </Card>
        <div> 
        <Card>
            <CardContent className='flex flex-col gap-4'>
                <CardTitle className='flex gap-4 items-center'>
                    <Medal 
                    size={40}
                    className='bg-acc-color h-12 w-14 p-1 object-fit text-white rounded-full'
                    />
                    <span className="font-poppins uppercase text-sml">
                        We train people to tack Gobal challenges .               
                    </span>
                </CardTitle>
          
            </CardContent>
        </Card>
        </div>
        <Card>
            <CardContent>
                <CardDescription  className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-5'>
                {badgeitem.map(item => {
                    return <Badge className='bg-acc-color  text-white p-2 text-sml font-poppins' key={item}>
                        <span className='capitalize w-full text-sml text-white'>
                        {item}
                        </span>
                        </Badge>
                })}
                </CardDescription>
            </CardContent>
        </Card>
        <Card className='shadow-lg '>
            <CardContent className='flex flex-col gap-4'>
                <CardTitle className='text-sml font-space-grotesk uppercase   '>
                   Danke !!! 
                </CardTitle>
                <CardDescription className='flex flex-col gap-4 '>

                       
                         you have just ended your course with us. We warmly appreciate your dedication and your time . The effort to work with us. 
                         Please we will give you links to sign up on the partner platform and we will guy you every way possible it you get a job.Do not forget to pay us what is owe.
                        
                </CardDescription>
                <BtnLink 
                    href='/update/profile/edit'
                    label='update profile'
                />

            </CardContent>
        </Card>

    </div>

)
}

export default UnvettedComp