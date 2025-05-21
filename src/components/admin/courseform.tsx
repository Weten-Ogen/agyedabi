"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Form } from '../ui/form'
import { z } from 'zod'
import{ zodResolver} from '@hookform/resolvers/zod'
import { CourseSchema } from '.'
import CustomCourseFormField from './customcourseFormfield'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { updateUserById } from '@/app/action/user'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { createCourse } from '@/app/action/course'

interface updateprofileprops {
    className?:string,
    details?: {
        
    
    name:string,
    registrationCost:string,
    tuitionCost:string,
    timespan:string,
    lectureNumber:string,
    startDate:string,
    endDate:string,
    classSize:string,
    image?:string,
    requirements:string
},
   
    }
    const formSchema = CourseSchema
    
    const CourseForm = (props: updateprofileprops) => {
        const router= useRouter()
        const formSheme  = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues:{
                    name:props?.details?.name  || "",
                    registrationCost:props?.details?.registrationCost  || "",
                    tuitionCost:props.details?.tuitionCost  || "",
                    timespan:props.details?.timespan  || "",
                    lectureNumber:props.details?.lectureNumber  || "",
                    startDate:props.details?.startDate  || "",
                    endDate:props.details?.endDate  || "",
                    classSize:props.details?.classSize  || "",
                    image:props.details?.image  || "",
                    requirements:props.details?.requirements  || ""
            }
        })
        
        const updateformhandler = async(values:any) => {
            await createCourse(values)
            router.push('/home')
            toast.success('update was successful')
        }
    return (
    <div className={cn('md:w-[80%] md:mx-auto ',props.className)}>
        <Form  {...formSheme}>
                <Card className='p-0'>
                    <CardContent className='bg-acc-color/75 text-white p-4 rounded-lg'>

            <form onSubmit={formSheme.handleSubmit(updateformhandler)} className='space-y-5 ' >
                <CustomCourseFormField
                    control={formSheme.control}
                    name='name'
                    label='Name'
                    placeholder='enter the course name'
                />
                <CustomCourseFormField
                    control={formSheme.control}
                    name='classSize'
                    label='Class Size'
                    placeholder=''
                />
                <CustomCourseFormField
                    control={formSheme.control}
                    name='image'
                    label='Image url'
                    placeholder=''
                />
                <CustomCourseFormField
                    control={formSheme.control}
                    name='lectureNumber'
                    label='Number of lectures'
                    placeholder='Enter your Bio'
                />
                <CustomCourseFormField
                    control={formSheme.control}
                    name='requirements'
                    label='Requirements'
                    placeholder='Enter your requirements.'
                />
                <CustomCourseFormField
                    control={formSheme.control}
                    name='tuitionCost'
                    label='Cost of Tuition'
                    placeholder='Enter your  cost'
                />
                <CustomCourseFormField
                    control={formSheme.control}
                    name='startDate'
                    label='Starting Date'
                    placeholder='Enter your  date'
                />
                <CustomCourseFormField
                    control={formSheme.control}
                    name='endDate'
                    label='Ending Date'
                    placeholder='Enter your  date'
                />                         
                <CustomCourseFormField
                    control={formSheme.control}
                    name='registrationCost'
                    label='Registration Fee'
                    placeholder='Enter your  fee'
                />            

                  <CustomCourseFormField
                    control={formSheme.control}
                    name='timespan'
                    label='Duration'
                    placeholder='Enter your  fee'
                />      
                <Button className='text-white w-full bg-acc-color/80 p-4  shadow-lg  rounded-lg hover:duration-300 hover:ease-out hover:-translate-y-0.5 uppercase hover:bg-acc-color cursor-pointer hover:text-white '>
                    submit
                </Button>
              
            </form>
                    </CardContent>
                </Card>
        </Form>
    </div>
  )
}

export default CourseForm