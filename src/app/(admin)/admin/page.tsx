import React from 'react'
import { AdminContent, adminPageContent } from '../../../../content/general'
import AdminChart from './adminchart'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Admin() {
  const session = await auth()
  if(session?.user.role?.toLowerCase() !== "admin") {
    redirect('/home')
  }
  return (
    <section className='mt-20'>
      <div className='flex gap-8 '>
        {
          adminPageContent.stat.map((item:any, i:number)=> {
            return (
              <AdminChart
                key={i}
                {...item}
              />
            )
          })
        }
      </div>
      
    </section>
  )
}
