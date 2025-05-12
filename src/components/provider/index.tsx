"use client"
import React from 'react'
import NavBar from '../customs/navbar'
import { SessionProvider } from 'next-auth/react'

interface pageprops {
  children : React.ReactNode
}
export default function Provider(props:pageprops) {
  return (
  <div className='relative '>
    <SessionProvider>
    
      <NavBar/>
      <div className=''>

      {
        props.children
      }
      </div>
      </SessionProvider>
    </div>
  )
}
