import UpdateProfile from '@/components/forms/updateprofile'
import React from 'react'

export default function page() {
  return (
    <div className='mt-20 p-4'>
        <UpdateProfile
            details={{
                name: "Marcus gideon oware",
                arrears:'50',
                bio:'I am full stack develop with 4 year of practical and professional experience.',
                city:'kumasi',
                contact:'0538578421',
                country:'ghana',
                email:'marcuoware@gmail.com',}
            }
        
        />
    </div>
  )
}
