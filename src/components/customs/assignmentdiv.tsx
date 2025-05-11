"use client"
import React from 'react'
import AssignmentSubmissionForms from '../forms/assignmentsubmissionforms'
import { Card, CardContent } from '../ui/card'
import {  ChevronRight } from 'lucide-react'

interface assigmentdivprops {
    className?:string
    details: assignmentprops
}

const AsssignmentDiv = (props:assigmentdivprops) => {
  return (
    <div className="w-full grid grid-cols-1  gap-4 md:grid-cols-2  md:h-screen overflow-hidden ">
        <Card className='w-full h-[30vh]  '>
          <CardContent className='w-full  flex gap-2 items-start'>
            <div>
                <ChevronRight/>
              
            </div>
              <div className='w-full '>
                  {props.details.question}
              </div>

          </CardContent>
        </Card>
        <AssignmentSubmissionForms
            details={props.details}
            className=''
        />
    </div>
  )
}

export default AsssignmentDiv