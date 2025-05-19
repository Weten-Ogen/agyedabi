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

interface mobilemenuprops {
  className?: string
}

const MobileMenu = (props: mobilemenuprops) => {
  const [isOpen, setIsOpen] = useState(false)

  const { data: session } = useSession()
  const image = session?.user?.image || null
  
  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className='w-full'>
      <DropdownMenu onOpenChange={handleClick} defaultOpen={isOpen}>
        <DropdownMenuTrigger asChild>
          <Menu className='text-sec-color hover:text-acc-color' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='relative right-8 p-2 w-full flex items-start gap-4 md:p-0'>
          <div className='p-1'>
            {image && (
              <Avatar>
                <AvatarImage
                className='h-8 w-8 rounded-full bg-acc-color' 
                alt='User Avatar' 
                src={image} />
              </Avatar>
            )}
          </div>
          <div className='p-2'>
            <div className='flex flex-col gap-2 p-4'>
              {AdminContent.navbarlinks.map((item: any, i: number) => (
                <DropdownMenuItem className='text-acc-color text-sml p-0 font-poppins' key={i}>
                  <DropdownMenuLabel className='hover:bg-acc-color w-full rounded-lg hover:text-white p-2 font-poppins'>
                    <Link onClick={handleClick} className='w-full text-sml capitalize font-poppins' href={item.href}>
                      {item.label}
                    </Link>
                  </DropdownMenuLabel>
                </DropdownMenuItem>
              ))}
            </div>
            <SignOutBtn />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MobileMenu
