import React from 'react'
import { AdminContent, adminPageContent } from '../../../../content/general'
import AdminChart from './adminchart'

export default function Admin() {
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
