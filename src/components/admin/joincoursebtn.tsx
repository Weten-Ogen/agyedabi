'use client';
import { cn } from '@/lib/utils';
import React from 'react'
import { Button } from '../ui/button';
import { joinCourse } from '@/app/action/course';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface joinprops {
    className?:string
    courseId:string
}
const JoinCourseBtn = (props:joinprops) => {
    const router = useRouter()
    const session = useSession()
    const handleClick = async() => {
        if(!session.data?.user.id) {
            toast.error('You must sign first')
            return
        }
        await joinCourse(session?.data?.user.id as string,props.courseId);
        toast.success('joined course')
        router.push('/home')
    }
    return (
    <Button onClick={handleClick} className={cn('bg-acc-color text-white font-space-grotesk cursor-pointer capitalize hover:bg-acc-color hover:text-white ',props.className)}>
        join course
    </Button>
  )
}

export default JoinCourseBtn