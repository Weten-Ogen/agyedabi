import { getUserById } from '@/app/action/user'
import Typoh2 from '@/components/customs/typoh2'
import UpdateProfile from '@/components/forms/updateprofile'
import { auth } from '@/lib/auth'
import React from 'react'

export default async function page() {
  const session =await auth()
  
  const user = await getUserById(session?.user.id as string);
  return (
    <div className='mt-16 p-4'>
      {
        user ?
        <UpdateProfile
            details={
              {
                email:user.email,
                name:user.name as string,
                bio: user.bio as string,
                city: user.city as string,
                contact:user.contact as string,
                country: user.country as string,
                address: user.address as string

              }
            }
        
        />:
        <Typoh2>you need to sign up first</Typoh2>
      }
    </div>
  )
}
