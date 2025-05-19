import { cn } from '@/lib/utils'
import { CheckCheck } from 'lucide-react'
import React from 'react'

interface heroprocedurelistprops {
    className?:string,
    details?:string

}

const HeroProcedureListItem = (props:heroprocedurelistprops) => {
  return (
<div className={cn('flex gap-4 font-poppins items-center',props.className)}>
        <div className='text-acc-color '>
            <CheckCheck 
            size={50}
            className='shadow-xl text-acc-color text-lag bg-white rounded-full  p-2'/>
        </div>
        {
            props.details &&
        <div className=' text-sml bg-clip-content md:text-smm capitalize  text-black racking-wide'>
            {props.details}
        </div>
        }
    </div>  )
}

export default HeroProcedureListItem