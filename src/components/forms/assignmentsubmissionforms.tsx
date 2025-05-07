"use client"
import React from 'react';
import { Form } from '../ui/form';
import { UserAssignmentProfileSchema } from '.';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z } from 'zod' 
import CustomAssignmentFormField from './customassignmentformfields';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const formSchema = UserAssignmentProfileSchema;
interface assignmentSubmissionprops {
  className?:string,
  details?:assignmentprops
}

const AssignmentSubmissionForms = (props:assignmentSubmissionprops) => {
  const formScheme = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:props?.details
  })
  return (
    <div className={cn('',props.className)}>
      <Form {...formScheme}>
        <form className={cn('flex flex-col gap-4  bg-acc-color/80 rounded-lg shadow-lg p-4',props.className)}>
          <CustomAssignmentFormField
            control={formScheme.control}
            name="result"
            label='Enter your Result here.'
            placeholder='Type your anser in this place . Do not do copy and paste.'
          />
          <Button className="w-full my-5 hover:bg-acc-color bg-acc-color/80  text-white  shadow-lg p-4 hover:-translate-y-0.5 uppercase hover:duration-300 hover:ease-out">
            submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default AssignmentSubmissionForms