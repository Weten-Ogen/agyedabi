import React from 'react'
import { ReportFormSchema } from '.'
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

const formSchema = ReportFormSchema;

interface customupdateformfieldprops {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label:string,
    placeholder: string,
    
}

const CustomReportFormField = (props:customupdateformfieldprops) => {
    return (<FormField
        control={props.control}
        name={props.name}
        render={({field})=> 
        ( <div className='flex flex-col gap-2'>
                    <FormLabel className='font-poppins text-sml uppercase'>{props.label}</FormLabel>
                    <FormControl>
                        <Input
                        type='text'
                        className='font-poppins text-foreground bg-white '
                        placeholder={props.placeholder}
                        {...field}
                        />
                 </FormControl>
                 </div>)}/>)}
export default CustomReportFormField