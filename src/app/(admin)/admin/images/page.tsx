import AdminImageCard from '@/components/customs/adminimagecard'
import AdminImageGrid from '@/components/customs/adminimagegrid'
import React from 'react'

interface BlobFile {
    pathname: string,
    url:string,
    uploadedAt:string,

}

export default async  function page() {
     


  return (
    <section className=''>
            <AdminImageGrid/>
    </section>
  )
}
