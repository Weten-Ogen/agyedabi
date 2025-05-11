'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import Typop from './typop'

interface herofooterlinksprops {
    className?:string,
    details:herofooterlinkprops
}
const HeroFooterLink = (props:herofooterlinksprops) => {
  return (
    <div className={cn('w-full ',props.className)}>
            <Link className='text-sml  ' href={props.details.href}>
              {props.details.label}
            </Link>
          
      
    </div>
  )
}

export default HeroFooterLink