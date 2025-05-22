"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Form } from '../ui/form'
import { z } from 'zod'
import{ zodResolver} from '@hookform/resolvers/zod'
import { PaymentFormSchema } from '.'
import CustomPaymentFormField from './paymentformfield'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { updateUserById } from '@/app/action/user'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface updateprofileprops {
    className?:string,
    details?: {
        amount : string,
        method: string,
       
        }
    }
    const formSchema = PaymentFormSchema
    
    const PaymentForm = (props: updateprofileprops) => {
        const router= useRouter();

        const formSheme  = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues:{
               amount: props.details?.amount || '',
               method: props.details?.method || '',
              
            }
        });
        
        const updateformhandler = async(values:any) => {
            await updateUserById(values)
            router.push('/home')
            toast('update was successful')
        };

    return (
    <div className={cn('md:w-[80%] md:mx-auto ',props.className)}>
        <Form  {...formSheme}>
                <Card className='p-0'>
                    <CardContent className='bg-acc-color/75 text-white p-4 rounded-lg'>

            <form onSubmit={formSheme.handleSubmit(updateformhandler)} className='space-y-5 ' >
                          
               <CustomPaymentFormField
                    control={formSheme.control}
                    name='amount'
                    label='enter amount'
                    placeholder='enter amount'
                />
                
               <CustomPaymentFormField
                    control={formSheme.control}
                    name='method'
                    label='enter method'
                    placeholder='enter method'
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

export default PaymentForm