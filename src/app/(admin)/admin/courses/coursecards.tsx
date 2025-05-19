"use client"
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

interface coursecardprops {
    className?:string,
    label:string,
    herf:string,

}
const CourseCard = (props:coursecardprops) => {
  return (
    <div className=''>
        <Card>
            <CardContent>
                <CardTitle>
                    <CardDescription>
                        
                    </CardDescription>
                </CardTitle>
            </CardContent>
        </Card>
    </div>
  )}