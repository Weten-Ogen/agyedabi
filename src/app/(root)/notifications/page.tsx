import React from 'react'
import { fakenotice } from '../../../../content/general'
import NotificationCard from '@/components/customs/notficationcard'

export default function Notifications() {
  return (
    <div className='mt-20 md:w-[80%] md:mx-auto p-4'>
      <div className='flex flex-col  gap-4'>
        {fakenotice.map((item:any, i:number) => {
          return (<NotificationCard key={i} image={item.image} message={item.message}/>)
        })}
      </div>
    </div>
  )
}
