"use client"
import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

const SignOutBtn = () => {
    return (
    <div>
      <Button className='bg-acc-color text-sml m-2 font-poppins capitalize text-white' onClick={() => {signOut({redirectTo:"/"})}}>log out</Button>
    </div>
  )
}

export default SignOutBtn