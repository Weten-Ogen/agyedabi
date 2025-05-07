'use client'
import React, { useState } from 'react'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { UserAssignmentProfileSchema } from '.'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'



const formSchema  = UserAssignmentProfileSchema
interface customassignmentprops {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    placeholder:string,
    label:string,

}

const CustomAssignmentFormField = (props:customassignmentprops) => {
    const [courselist , setCourselist] = useState([
        'official course','rust for dummies','python for everyone'
    ])
  return (
    <FormField
            control={props.control}
            name={props.name}
            render={({field})=> (
                    <FormItem className='flex flex-col gap-4'>
                        <FormLabel className='font-poppins text-sml uppercase'>{props.label}</FormLabel>
                        <FormControl className='flex-grow w-full h-full'>
                            {
                                props.name  === 'result' ? 
                                <Textarea 
                                 cols={5000}
                                className='bg-pri-color flex-grow h-[35vh] md:h-[60vh] text-foreground'
                                placeholder={props.placeholder} />
                                :
                                <Input
                                className='font-poppins text-foreground bg-pri-color '
                                 placeholder={props.placeholder}
                                 {...field}
                                 />
                            }
                        </FormControl>
                    </FormItem>  
                
            )}
        />
  )
}

export default CustomAssignmentFormField