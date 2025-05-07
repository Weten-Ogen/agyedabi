import { cn } from '@/lib/utils'
import React from 'react'


interface cardbgprops {
    className?:string,
    children: React.ReactElement

}

const CardBg = (props:cardbgprops) => {
  return (
    <div className={cn('',props.className)}>
        {props.children}
    </div>
  )
}

export default CardBg