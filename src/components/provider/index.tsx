"use client"
import React from 'react'
import NavBar from '../customs/navbar'

interface pageprops {
  children : React.ReactNode
}
export default function Provider(props:pageprops) {
  return (
  <div className='relative '>
      <NavBar/>
      <div className=''>

      {
        props.children
      }
      </div>
    </div>
  )
}
