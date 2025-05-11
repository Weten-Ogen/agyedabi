'use client'
import { cn } from '@/lib/utils'
import React from 'react'

interface heropaymentinfoprops {
    className?:string,
    details?:string,
}
const HeroPaymentInfo = (props:heropaymentinfoprops) => {
  return (
    <div className={cn('',props.className)}>

    </div>
  )
}

export default HeroPaymentInfo