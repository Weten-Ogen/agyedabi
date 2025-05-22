"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Form } from '../ui/form'
import { z } from 'zod'
import{ zodResolver} from '@hookform/resolvers/zod'
import { ReportFormSchema } from '.'
import CustomReportFormField from './customreportFormField'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { updateUserById } from '@/app/action/user'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface updateprofileprops {
    className?:string,
    details?: {
        message:string,
        title?:string,
        
        
        },
   
    }
    const formSchema = ReportFormSchema
    
    const ReportForm = (props: updateprofileprops) => {
        const router= useRouter()
        const formSheme  = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues:{
               
                title: props?.details?.title  || '',
                message:props?.details?.message || '',
            }
        })
        
        const updateformhandler = async(values:any) => {
            await updateUserById(values)
            router.push('/home')
            toast('update was successful')
        }
    return (
    <div className={cn('md:w-[80%] md:mx-auto ',props.className)}>
        <Form  {...formSheme}>
                <Card className='p-0'>
                    <CardContent className='bg-acc-color/75 text-white p-4 rounded-lg'>

            <form onSubmit={formSheme.handleSubmit(updateformhandler)} className='space-y-5 ' >
                          
               <CustomReportFormField
                    control={formSheme.control}
                    name='title'
                    label='enter your title'
                    placeholder='title of your message'
                />
                <CustomReportFormField
                    control={formSheme.control}
                    name='message'
                    label='Enter your message'
                    placeholder='enter your message here'
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

export default ReportForm