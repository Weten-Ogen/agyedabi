import React from 'react'
import { AdminContent } from '../../../../../content/general'
import Typoh2 from '@/components/customs/typoh2'
import Typoh4 from '@/components/customs/typoh4'
import CourseShowCardDiv from '@/components/customs/courseshowcarddiv'
import CourseShowCardMapDiv from '@/components/customs/courseshowcardmapdiv'
import { Card, CardContent } from '@/components/ui/card'
import HeroFooter from '@/components/customs/herofooter'
import BtnLink from '@/components/customs/btnlink'
import JoinCourseBtn from '@/components/admin/joincoursebtn'


export default async function  page({params}:{params : Promise<{id: string}>}) {
    const {id} = await params;
    const data = AdminContent.courseContent.courselist.find(item => item.id === id)
  return (
    <section  className='mt-10 flex flex-col gap-4 p-4 md:w-[80%] md:mx-auto'>
        <Typoh2 className='text-med font-space-grotesk font-bold  uppercase'>
            All courses comes with a registration cost 
        </Typoh2>
        <Typoh4 className="text-smm uppercase font-space-grotesk text-acc-color bg-clip-text  ">
            Payments must all proceed by the two person Verification . Then you update the payment confirmation forms.
        </Typoh4>
        <Card className='bg-white  shadow-lg  my-5'>
            <CardContent>

        <div className='flex flex-col  gap-4'>

            <Typoh2 className=''>
                {data?.name as string}
            </Typoh2>
            <CourseShowCardMapDiv
                items={data?.requirements as string[]} 
                label='requirements'
                labelClass='capitalize text-sml font-poppins'
            />   
            <CourseShowCardDiv
                label='registration fees'
                value={data?.registrationCost as string}
            />
            <CourseShowCardDiv
                label='class size'
                value={data?.lecturesNumber as string}
            />
            <CourseShowCardDiv
                label='expected end Date'
                value={data?.endDate as string}
                />
            <CourseShowCardDiv
                label='course duration'
                value={data?.timespan as string}
                />
            <CourseShowCardDiv
                label='tuition fees'
                value={data?.tuitionCost as string}
                />       
        </div>
            </CardContent>
        </Card>
       <JoinCourseBtn courseId={id}/>
    </section>
  )
}
