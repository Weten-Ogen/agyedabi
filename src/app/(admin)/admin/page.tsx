import React from 'react'
import { AdminContent } from '../../../../content/general'
import AdminCard from '@/components/customs/admincard'

export default function Admin() {
  return (
    <section className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8  p-4'>
            {
              AdminContent.adminlinks.map((item :any, index:number) => {
                return (
                  <AdminCard 
                      className='p-4 cursor-pointer'
                      key={index}
                      {...item}
                  />
                )
              })
            }
          </div>
    </section>
  )
}
