'use client'
import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu'
import { DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { AdminContent } from '../../../content/general'
import Link from 'next/link'

const MobileMenu = () => {
  const [isOpen , setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(prev => !prev)

  }

  return (
    <div className=''>
        <DropdownMenu onOpenChange={handleClick} defaultOpen={isOpen} >
          <DropdownMenuTrigger asChild>
                <Menu  className='text-sec-color hover:text-acc-color '/>
          </DropdownMenuTrigger>
          <DropdownMenuContent  className='relative right-8'>
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
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default MobileMenu