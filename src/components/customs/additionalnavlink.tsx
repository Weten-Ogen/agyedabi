'use client'
import { cn } from '@/lib/utils'
import { Bell, BellDot } from 'lucide-react'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import MobileMenu from './mobilemenu'
import { Session } from 'next-auth'

interface additionalnavlinksprops {
    className?:string,
   
}

const AdditionalNavlinks = (props:additionalnavlinksprops) => {
    const router = useRouter();
    const pathname = usePathname();


    return (
    <div className={cn('flex items-center max-w-sm gap-4 ',props.className)}>
        <Bell onClick={() => router.push('/notifications')} 
            className={` w-6 h-6 cursor-pointer hover:-translate-y-0.5 hover:text-acc-color hover:ease-out hover:duration-300 ${pathname === '/notifications' ? 'text-acc-color': 'text-foreground'}`}
        />
        <MobileMenu/>
        
    </div>
  )
}

export default AdditionalNavlinks