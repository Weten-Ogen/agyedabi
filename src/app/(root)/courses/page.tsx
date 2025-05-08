import Typoh2 from '@/components/customs/typoh2'
import React from 'react'
import { AdminContent } from '../../../../content/general'
import Typop from '@/components/customs/typop'
import CourseCard from '@/components/customs/coursecard'

export default function Courses() {
  return (
    <section className='w-full  mt-10'>
      <div
        className='p-4 flex flex-col  bg-acc-color h-[50vh] text-white py-10 gap-4'
      >
        <Typoh2 className='text-lag font-poppins uppercase  lg:p-4'>
          {AdminContent.courseContent.courseinfo.heading}
        </Typoh2>
        <Typop className='text-smm font-thin font-poppins  uppercase  lg:p-4'>
          {AdminContent.courseContent.courseinfo.subHeading}
        </Typop>

      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3  items-start  mt-8'>
        {AdminContent.courseContent.courselist.map((item:courseprops, i:number)=> {
          return (<CourseCard
              key={i}
              details={item}
          />)
        })}
      </div>
    </section>
  )
}
