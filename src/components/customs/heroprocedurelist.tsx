import { cn } from '@/lib/utils'
import { CheckCheck } from 'lucide-react'
import React from 'react'
import HeroProcedureListItem from './heroprocedurelistitem'
interface heroprocedurelistprops {
    className?:string,
    details?:string[]
}
const HeroProcedureList = (props:heroprocedurelistprops) => {
  return (
    <div className={cn('',props.details)}>
    <div className='flex flex-col gap-4 md:gap-8 p-4 '>
            {props.details && props.details.map((item:any, i:number) => {
                return(
                    <HeroProcedureListItem key={i} details={item} />
                )
            })}
        </div>
    </div>
  )
}

export default HeroProcedureList