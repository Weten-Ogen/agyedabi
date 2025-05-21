import AsssignmentDiv from '@/components/customs/assignmentdiv'
import { auth, signIn } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'


export default async function Assignments() {
   const session = await auth()
    if(!session || session.user.role?.toLowerCase() !== "admin") {
      redirect('/home')
    }
  const assign  = {
    id: "2",
    lectureNumber: "10",
    course : 'official course',
    submissionDate: '12/03/26',
    question: 'find the common substring in the the list of arrs :arr1 = [1,2,4 ] arr2=[3,4,2] arr3=[6,8,9]',
    result: '',
    createdAt:'10/03/26'
  }
  return (
    <div className='mt-12 md:mt-14   p-4'>
        <AsssignmentDiv
          details={assign}
        />
        
    </div>
  )
}
