import { cn } from '@/lib/utils'
import React from 'react'
import { AdminContent } from '../../../content/general'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Skeleton } from '../ui/skeleton'

interface navbarlinksprops {
    className?:string,
}

const NavBarLinks = (props:navbarlinksprops) => {
    const pathname = usePathname();
  return (
    <div className={cn('hidden md:flex items-center gap-4   ',props.className)}>
        {
            AdminContent.navbarlinks.map((item:any, index:number)=> {
                return (
                    <div key={index}>
                        {

                        item ? 
                        <Link 
                        className={`capitalize hover:bg-acc-color  rounded-lg hover:text-pri-color  text-sml hover:-translate-y-0.5 hover:duration-500 hover:ease-out  py-1 px-2 text-center ${pathname === item.href ? 'bg-acc-color text-pri-color': 'text-slate-600'}`} 
                        href={item.href} 
                        key={index}>
                        {item.label}
                        </Link>:
                        <Skeleton/> 
                        
                        }
                    </div>
                )
            })
        }
    </div>  
  )
}

export default NavBarLinks