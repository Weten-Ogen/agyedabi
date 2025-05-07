"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import Typop from './typop'
import Typoh4 from './typoh4'
import CourseShowCardDiv from './courseshowcarddiv'
import Typoh2 from './typoh2'
import BtnLink from './btnlink'
import { AdminContent } from '../../../content/general'
import { Badge } from '../ui/badge'

interface userdetailcardprops {
    className?:string,
    userDetail: userprops
}

const UserDetailCard = (props:userdetailcardprops) => {
  return (
    <div className='flex  flex-col gap-4 p-4 md:max-w-[75%] mt-20  md:mx-auto '>
        <div className='p-4 flex flex-col gap-2'>
        <Typoh2 className='font-poppins text-sml  uppercase font-bold ' >{AdminContent.homeContent.homeTexts.heading}</Typoh2>
        <Typop className='text-sml text-foreground font-poppins text-left  leading-7 '>{AdminContent.homeContent.homeTexts.subheading}
        </Typop>
        </div>
        
        {
        props.userDetail.vetted ?     
        <div className='w-full'>
        { props.userDetail.status === 'completed' ?
        <Card className='shadow-lg  '>
            <CardContent className='flex flex-col gap-4 p-4'>
                <CardTitle className='uppercase text-sml'>
                      {AdminContent.homeContent.homeTexts.completed.title}
                </CardTitle>
                <CardDescription className=' font-poppins'>
                    <div className='md:flex md:flex-col gap-2'>
                    <Typoh4 className="capitalize font-poppins  text-sml">courses : </Typoh4>
                    <div>

                    {
                        props.userDetail.courses &&    
                        <div className='flex gap-4 items-center'>
                            {props.userDetail.courses.map((item:string,i:number) => {
                                return (
                                    <Badge key={i} className="capitalize p-2 font-poppins ">{item}</Badge>
                                )
                                
                            })}
                        </div>
                    }
                    </div>
                    <CourseShowCardDiv
                        label='debt'
                        value={props.userDetail.debt as string}
                        labelClass=''
                        
                        className='flex gap-4 items-center  font-poppins'
                        />
                    <CourseShowCardDiv
                        label='tuition debt'
                        value={props.userDetail.tuition as string}
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
        </Card>:
        props.userDetail.status === 'ongoing' ?
        <Card className='shadow-lg '>
            <CardContent>
                <CardTitle className='uppercase text-sml font-poppins'>
                      {AdminContent.homeContent.homeTexts.ongoing.title}
                </CardTitle>
                <CardDescription className='flex flex-col gap-4 space-y-5'>
                        <CourseShowCardDiv
                            label='debt'
                            value={props.userDetail.debt as string}
                            valueClass=''
                            className='py-5'
                        />
                        <div className='flex flex-col gap-2'>
                        <Typoh4 className='text-sml capitalize font-poppins'>courses </Typoh4>
                        {
                            props.userDetail.courses &&    
                            <div className='flex flex-wrap gap-4 items-center'>
                                {props.userDetail.courses.map((item:string,i:number) => {
                                    return (
                                        <Badge key={i} className=" text-sml p-2 capitalize">{item}</Badge>
                                    )
                                    
                                })}
                            </div>
                        }
                        </div>
                        <CourseShowCardDiv
                            label='assignment :'
                            value={props.userDetail.assignment as string}   
                            labelClass='capitalize text-sml font-poppins'
                            valueClass='text-sml font-poppins'                     
                        />
                        <CourseShowCardDiv
                            label='group'
                            value={props.userDetail.group as string}
                            valueClass=' font-poppins text-sml'
                        />
                        <CourseShowCardDiv
                            label='group assignment'
                            value={props.userDetail.groupWork as string}
                        />
                        <CourseShowCardDiv
                            label='Vetted'
                            value={props.userDetail.vetted ? 'yes' : 'no' }
                            valueClass={`${props.userDetail.vetted ? 'bg-green-500 ' : 'bg-red-500 '} py-1 px-3 rounded-lg`}
                        />
                        <CourseShowCardDiv
                             value={props.userDetail.tuition as string}
                             label='tuition cost'
                        />
                        

                </CardDescription>
                    <BtnLink 
                        href='/courses'
                        label='go to course'
                        className='mt-5'
                    />
            </CardContent>
        </Card>: 
        <Card className='w-full  bg-black shadow-xl '>
            <CardContent className='w-full flex flex-col gap-4'>
                <CardTitle className='uppercase font-poppins text-sml '>
                       {AdminContent.homeContent.homeTexts.unassigned.title}
                </CardTitle>
                <CardDescription className='flex flex-col gap-4   '>
                  <div className='flex flex-col  gap-4 py-5'>
                  <Typop className='text-sml font-poppins tracking-wide  leading-6 text-justify  p-4 '>
                    {AdminContent.homeContent.homeTexts.unassigned.text1}
                  </Typop>
                  <BtnLink 
                    href='/profile/update/1'
                    label='update profile'

                  />
                  </div>
                  <div className='flex flex-col py-5 gap-4'>
                  <Typop className='font-poppins text-sml tracking-wide leading-6 text-justify  p-4 '>
                  {AdminContent.homeContent.homeTexts.unassigned.text2}
                  </Typop>                 
                
                    <BtnLink
                        href='/profile/confirm'
                        label='confirm payment'
                        />
                   </div>
                   <div className='flex flex-col gap-4 py-5'>

                    <Typop  className='text-sml font-poppins tracking-wide  leading-7 text-justify  p-4'>
                       {AdminContent.homeContent.homeTexts.unassigned.text3}
                    </Typop>
                    <BtnLink
                        href='/courses'
                        label='register for a course'
                    />
                   </div>
                </CardDescription>
               
            </CardContent>
        </Card>
        }
    </div> :
    <div className='w-full'>
        <Card className='shadow-lg '>
            <CardContent>
                <CardTitle className='text-sml uppercase font-poppins  '>
                    {AdminContent.homeContent.homeTexts.unvetted.title}
                </CardTitle>
                <CardDescription className='flex flex-col gap-4 '>
                        <Typop className='text-foreground  font-poppins text-sml text-justify leading-6 tracking-wide py-5'>
                            {AdminContent.homeContent.homeTexts.unvetted.text}
                        </Typop>
                        <BtnLink 
                            href='/update/profile/edit'
                            label='update profile'
                        />
                        
                </CardDescription>

            </CardContent>
        </Card>
    </div>
    } 
</div>
  )
}

export default UserDetailCard