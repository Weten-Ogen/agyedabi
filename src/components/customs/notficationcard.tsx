"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import Typop from './typop'
import { Skeleton } from '../ui/skeleton'

interface notificationcardprops {
    className?:string,
    message:string,
    image?:string,
}

const NotificationCard = (props:notificationcardprops) => {
  return (
    <div className={cn('max-w-4xl  ',props.className)}>
        <Card className='p-0 max-w-4xl'>
            <CardContent className='flex shadow-lg items-start gap-4 p-4 max-w-4xl'>

                {
                    props?.image ?
                    <div>
                    {
                        props.image &&
                    <Image
                    src={props.image}
                        alt={props.image}
                        width={20}
                        height={20}
                        className=''
                        />
                    }
                </div> : 
                    <Skeleton className='w-20 h-15 bg-acc-color rounded-full p-4'/>
                }
                <Typop>
                    {props.message}
                </Typop>
            </CardContent>
        </Card>
    </div>
  )
}

export default NotificationCard