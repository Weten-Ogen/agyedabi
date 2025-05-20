import React from 'react'
import { AdminContent } from '../../../../../content/general'
import Image from 'next/image'

interface pageprops{
    params: Promise<{
        slug:string
    }>
}

export default async function page(params:pageprops) {
    const slug = params

    console.log(slug)
  return (
    <div>
        <div className=''>
           
        </div>
        <div>

        </div>
    </div>
  )
}
