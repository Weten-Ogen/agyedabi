"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Form } from '../ui/form'
import { z } from 'zod'
import{ zodResolver} from '@hookform/resolvers/zod'
import { UserUpdateProfileSchema } from '.'
import CustomUpdateFormField from './customupdateformfield'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

interface updateprofileprops {
    className?:string,
    details?: {
        name:string
            city?:string
            contact?:string
            email:string
            country?:string
            bio?:string
            group?:string
            arrears?:string
    },
   
}

const formSchema = UserUpdateProfileSchema
const UpdateProfile = (props: updateprofileprops) => {
    const formSheme  = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:props.details
    })

    return (
    <div className={cn('md:w-[80%] md:mx-auto    ',props.className)}>
        <Form  {...formSheme}>
                <Card className='p-0'>
                    <CardContent className='bg-acc-color/75 text-white p-4 rounded-lg'>

            <form className='space-y-5 ' >
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='name'
                    label='Name'
                    placeholder=''
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='email'
                    label='Email'
                    placeholder=''
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='contact'
                    label='Contact'
                    placeholder=''
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='bio'
                    label='Bio'
                    placeholder='Enter your Bio'
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='country'
                    label='Country'
                    placeholder='Enter your country.'
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='city'
                    label='City'
                    placeholder='Enter your  city'
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='arrears'
                    label='Monthly Debt'
                    placeholder=''
                />
                <Button className='text-white w-full bg-acc-color/80 p-4  shadow-lg  rounded-lg hover:duration-300 hover:ease-out hover:-translate-y-0.5 hover:bg-acc-color cursor-pointer hover:text-white '>
                    submit
                </Button>
              
            </form>
                    </CardContent>
                </Card>
        </Form>
    </div>
  )
}

export default UpdateProfile