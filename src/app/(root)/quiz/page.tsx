import React from 'react'
import { Quiz } from './quiz'
import { fakeer } from '../../(admin)/admin/quiz'
import { auth } from '@/lib/auth';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

export default async function page() {
  const session = await auth();
  if(session?.user.role?.toLowerCase() === 'admin'){
    
    redirect('/home')
  }
  return (
    <div className='mt-20'>
      <Quiz
        quizData={fakeer}

      />
    </div>
  )
}
