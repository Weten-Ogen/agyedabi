"use client"
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import React from 'react'

interface adminchartprops {
    className?:string,
    figure:string,
    label:string,
}
const  AdminChart = (props:adminchartprops) => {
    const router = useRouter()
    const handlenav = () =>{
        router.push(`/admin/${props.label}`)
    }
  return (
    <div onClick={handlenav} className='p-8'>
        <Card className='cursor-pointer'>
            <CardContent className='flex flex-col items-center gap-4 '>
                <div>
                    <div className='bg-acc-color bg-gradient-to-bl from-acc-color to-gray-200 relative rounded-full h-50 w-50 '>
                        <div className=' bg-white absolute inset-10 rounded-full h-30 w-30 p-4 text-center flex items-center animate-none justify-center shadow-xl text-med'>
                                {props.figure}
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 '>

                <CardTitle className='text-sml capitalize font-poppins'>
                        {props.label}
                </CardTitle>
                <CardDescription>
                        {props.figure}
                </CardDescription>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default  AdminChart