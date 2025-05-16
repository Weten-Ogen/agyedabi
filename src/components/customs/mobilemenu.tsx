'use client'
import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu'
import { DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { AdminContent } from '../../../content/general'
import Link from 'next/link'
import SignOutBtn from './signoutbtn'
import { Avatar, AvatarImage } from '../ui/avatar'
import { useSession } from 'next-auth/react'

const MobileMenu = () => {
  const [isOpen , setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(prev => !prev)

  }
  const session = useSession();

  return (

    <div className=''>
        <DropdownMenu onOpenChange={handleClick} defaultOpen={isOpen} >
          <DropdownMenuTrigger asChild>
                <Menu  className='text-sec-color hover:text-acc-color '/>
          </DropdownMenuTrigger>
          <DropdownMenuContent  className='relative right-8 p-4  md:p-0'>
            <div className='p-4'>
            {
              session.data?.user?.image  &&
              <Avatar>
              <AvatarImage 
              alt={session.data?.user?.name as string}
              src={session.data?.user?.image}/>
            </Avatar>}
            </div>
            
            {
              AdminContent.navbarlinks.map((item:any,i:number) => {
                return (
                  
              <DropdownMenuItem className='text-acc-color text-sml font-poppins' key={i} >

                <DropdownMenuLabel  className='hover:bg-acc-color w-full rounded-lg hover:text-white p-2  font-poppins'>
                  <Link onClick={handleClick} className='w-full text-sml capitalize font-poppins' href={item.href}>
                     {item.label}
                  </Link>

                </DropdownMenuLabel>

              </DropdownMenuItem>
                )
              })
            }
            <SignOutBtn/>
            
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default MobileMenu