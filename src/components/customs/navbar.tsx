"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { AdminContent } from '../../../content/general'
import NavBarLinks from './navbarlinks'
import AdditionalNavlinks from './additionalnavlink'
import { Router } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/auth'
import { useSession } from 'next-auth/react'
import SignInBtn from './signinbtn'

interface navbarprops {
  className?:string,

}
const NavBar = (props:navbarprops) => {
  const session = useSession();
  const router = useRouter()
  return (
    <div className={cn('flex items-end  px-6 md:px-8 py-2   w-full fixed inset-0 z-30 bg-white border  justify-between h-12 shadow-lg  ',props.className)}>
      <div className='flex items-center gap-10'>
          <h4 onClick={() => router.push('/')} className=' cursor-pointer text-smm uppercase  md:p-0  font-bold font-space-grotesk '>
              {AdminContent.appName}
          </h4>
          <NavBarLinks/>
      </div>


        <div>
          {
            session.data?.user ? 
            <AdditionalNavlinks/>
            :
            <SignInBtn/>
          }
        </div>
    </div>
  )
}

export default NavBar