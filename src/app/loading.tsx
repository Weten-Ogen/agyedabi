"use  client"
import { Loader2 } from 'lucide-react'
import React from 'react'

interface loadingprops{
    className?:string,
}
const Loading = () => {
  return (
    <div className='flex items-center justify-center'>
        <Loader2
            className='animate-spin'
        />
    </div>
  )
}

export default Loading