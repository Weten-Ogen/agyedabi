"use client"
import React, { useEffect, useState } from 'react'
import AdminImageCard from './adminimagecard'

interface blobFile {
    pathname:string,
    url: string,
    uploadedAt:string,
}

const AdminImageGrid = () => {
    const [images, setImages] = useState<blobFile[] | []>([])
    
    const handleFetch = async() => {   
       const res =  await fetch('/api/image', {
      })
      const blobs = await res.json()
      setImages(prev => [...blobs])
    }

    useEffect(() => {
        handleFetch();
    }, [])
    

  return (
    <div className='w-full'>
        <div className='grid grid-cols-1 w-full  lg:grid-cols-3 items-center gap-4 '>
           {
            images.map((item:blobFile, index:number) => {
                return (
                    <AdminImageCard
                        key={index} 
                        {...item}
                    />
                )
            })
           }
         </div>
    </div>
  )
}

export default AdminImageGrid