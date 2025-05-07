"use client"
import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface adminimagecardprops {
    pathname: string,
    url: string,
    className?: string,
    uploadedAt:string,

}


const AdminImageCard = (props: adminimagecardprops) => {
  return (
    <div className={cn('',props.className)}>
        <Card>
            <CardContent className=''>
                <Image 
                    className=''
                    src={props.url}
                    alt={props.pathname}
                    width={500}
                    height={500}
                />
                <div className='flex flex-col p-4 gap-4 text-wrap'>
                <p className='capitalize '>pathName</p>
                <p className='text-wrap'>{props.url}</p>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default AdminImageCard