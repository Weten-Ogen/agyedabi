import Typoh2 from '@/components/customs/typoh2'
import React from 'react'
interface pageprops {
    params: Promise<{
        id: string
    }>
}
export default async function page(params: pageprops) {
  return (
    <div>
        <Typoh2>Edit Courses Pages</Typoh2>
        
    </div>
  )
}
