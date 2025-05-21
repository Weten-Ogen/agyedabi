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
import { getCourse } from '@/app/action/course'
import { formatUSD } from '@/lib/utils'


export default async function  page({params}:{params : Promise<{id: string}>}) {
    const {id} = await params;
    const data = await getCourse(id)
  return (
    <section  className='mt-10 flex flex-col gap-4 p-4 md:w-[80%] md:mx-auto'>
        <Typoh2 className='text-med font-space-grotesk font-bold  uppercase'>
            All courses comes with a registration cost 
        </Typoh2>
        <Typoh4 className="text-smm uppercase font-space-grotesk text-acc-color bg-clip-text   ">
            Payments must all proceed by the two person Verification . Then you update the payment confirmation forms.
        </Typoh4>
        <Card className='bg-white  shadow-lg  my-5'>
            <CardContent>

        <div className='flex flex-col  gap-4'>

            <Typoh2 className='text-smm font-bold uppercase font-space-grotesk text-center'>
                {data?.name as string}
            </Typoh2>
            <CourseShowCardDiv
                label='registration fees'
                value={formatUSD(data?.registrationCost as string)}
            />
            <CourseShowCardDiv
                label='class size'
                value={data?.lectureNumber as string}
            />
            <CourseShowCardDiv
                label='Begins on'
                value={data?.startDate as string}
                />
            <CourseShowCardDiv
                label='expected end Date'
                value={data?.endDate as string}
                />
            <CourseShowCardDiv
                label='duration'
                value={data?.timespan as string}
            />
            <CourseShowCardDiv
                label='tuition fees'
                value={formatUSD(data?.tuitionCost as string)}
            />       
            <CourseShowCardDiv
                value={data?.requirements as string} 
                label='requirements'
            />   
            </div>
                </CardContent>
            </Card>
       <JoinCourseBtn courseId={id}/>
    </section>
  )
}
