"use client"
import React from 'react'
import { UserUpdateProfileSchema } from '.'
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

const formSchema = UserUpdateProfileSchema;
interface customupdateformfieldprops {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label:string,
    placeholder: string,

}

const CustomUpdateFormField = (props:customupdateformfieldprops) => {
  return (
    <FormField
        control={props.control}
        name={props.name}
        render={({field})=> (
                <FormItem className='flex flex-col gap-2'>
                    <FormLabel className='font-poppins text-sml uppercase'>{props.label}</FormLabel>
                    <FormControl>
                        {
                            props.name  === 'bio' ? 
                            <Textarea 
                            className='bg-pri-color text-foreground'
                            placeholder={props.placeholder} 
                            {...field}/>:
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

export default CustomUpdateFormField