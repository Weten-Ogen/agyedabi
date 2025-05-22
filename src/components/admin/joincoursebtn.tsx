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

   const handleClick = async () => {
  if (!session.data?.user.id) {
    toast.error('You must sign in first');
    return;
  }

  try {
    const joined = await joinCourse(session.data.user.id, props.courseId);
    toast.success('Successfully joined the course!');
    router.push('/home');
  } catch (error: any) {
    if (error.message.includes('already enrolled')) {
      toast.error('You are already enrolled in this course.');
    } else {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
    }
  }
};

    return (
    <Button onClick={handleClick} className={cn('bg-acc-color text-white font-space-grotesk cursor-pointer capitalize hover:bg-acc-color hover:text-white ',props.className)}>
        join course
    </Button>
  )
}

export default JoinCourseBtn