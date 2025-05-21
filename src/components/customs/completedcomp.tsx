'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import { AdminContent } from '../../../content/general'
import Typoh4 from './typoh4'
import CourseShowCardDiv from './courseshowcarddiv'
import BtnLink from './btnlink'

const CompletedComp = (props:userprops) => {
  return (
  <div>
        <Card className='shadow-lg  '>
            <CardContent className='flex flex-col gap-4 p-4'>
                <CardTitle className='uppercase font-space-grotesk text-smm'>
                      {AdminContent.homeContent.homeTexts.completed.title}
                </CardTitle>
                <CardDescription className=' font-poppins'>
                    <div className='md:flex md:flex-col gap-2'>
                    <Typoh4 className="capitalize font-poppins  text-sml">courses:</Typoh4>
                    <div>
                        <CourseShowCardDiv
                            label='Status'
                            value={props?.status}
                        />
                        {/* <CourseShowCardDiv
                            label='course'
                            value={props.courses as string} 
                            /> */}

                    
                    </div>
                    <CourseShowCardDiv
                        label='debt'
                        value={props.debt as string}
                        labelClass=''
                        
                        className='flex gap-4 items-center  font-poppins'
                        />
                    <CourseShowCardDiv
                        label='tuition debt'
                        value={props.tuition as string}
                        labelClass=''
                        className='flex gap-4 items-center font-poppins'
                        />
                    </div>
                </CardDescription>
                <BtnLink
                    href='/profile/jobs'
                    label='view jobs' 

                />
            </CardContent>
        </Card> </div>)
}

export default CompletedComp