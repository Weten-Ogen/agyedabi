"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface admincardprops {
    className?:string,
    label : string,
    description?: string,
    link: string,

}

const AdminCard = (props: admincardprops) => {
  return (
    <Link href={props.link} className={cn('',props.className)}>
        <Card>
            <CardContent>
                <CardTitle>
                    {props.label}
                </CardTitle>
                <CardDescription>
                    {props.description&& props.description}
                </CardDescription>
            </CardContent>
        </Card>
    </Link>
  )
}

export default AdminCard