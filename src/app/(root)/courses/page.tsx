import Typoh2 from '@/components/customs/typoh2'
import React from 'react'
import { AdminContent } from '../../../../content/general'
import Typop from '@/components/customs/typop'
import CourseCard from '@/components/customs/coursecard'
import HeroFooter from '@/components/customs/herofooter'
import { redirect } from 'next/navigation'
import { auth, signIn } from '@/lib/auth'
import { getCourses } from '@/app/action/course'


export default async function Courses() {
   const session = await auth()
    if(!session) {
     await signIn()
    }
    const courses = await getCourses();
  return (
    <section className='w-full  mt-10'>
      <div
        className='p-4 flex flex-col  bg-acc-color h-[50vh] text-white py-10 gap-4'
      >
        <Typoh2 className=' text-med md:text-lag font-space-grotesk uppercase  lg:p-4'>
          {AdminContent.courseContent.courseinfo.heading}
        </Typoh2>
        <Typop className='text-smm font-thin font-space-grotesk  uppercase  lg:p-4'>
          {AdminContent.courseContent.courseinfo.subHeading}
        </Typop>

      </div>
      {
        courses ?
      <div className='grid grid-cols-1 lg:grid-cols-3  items-start  mt-8'>
        {courses.map((item:any, i:number)=> {
          return (<CourseCard
              key={i}
              details={item}
          />)
        })}
      </div>
      : <Typop>
        There are currently no course available.
      </Typop>
      }
    
    </section>
  )
}
