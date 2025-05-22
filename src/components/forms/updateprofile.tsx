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
import { updateUserById } from '@/app/action/user'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface updateprofileprops {
    className?:string,
    details?: {
        name:string
        city?:string
        contact?:string
        email:string
        country?:string
        bio?:string
        address?:string
        
        },
   
    }
    const formSchema = UserUpdateProfileSchema
    
    const UpdateProfile = (props: updateprofileprops) => {
        const router= useRouter()
        const formSheme  = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues:{
                bio: props?.details?.bio || '',
                city: props?.details?.city || '',
                contact: props?.details?.city || '',
                country: props?.details?.city || '',
                email : props?.details?.email || '',
                name: props?.details?.name  || '',
                address:props?.details?.address || '',
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
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='name'
                    label='Name'
                    placeholder='enter your name here.'
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='email'
                    label='Email'
                    placeholder='enter your email here.'
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='contact'
                    label='Contact'
                    placeholder='enter your Whatsapp contact here'
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='bio'
                    label='Bio (tell us a little about yourself)'
                    placeholder='Enter your Bio'
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='country'
                    label='Country'
                    placeholder='Where are you from.'
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='city'
                    label='City'
                    placeholder='the city you live in'
                />
                <CustomUpdateFormField
                    control={formSheme.control}
                    name='address'
                    label='Residence Address'
                    placeholder='name of place of residence or stay'
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

export default UpdateProfile