"use client"
import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Proportions } from 'lucide-react'
import { Button } from '../ui/button'

interface dialogmenuprops {
    className?:string,
    message:string,
    trigger:React.ReactElement,
    btn1: string,
    btn2: string,

}


const DialogMenu = (props:dialogmenuprops) => {
  return (
    <div className='max-w-lg'>
        <Dialog>
            <DialogTrigger asChild>
                {props.trigger}
            </DialogTrigger>
            <DialogContent className=' max-w-lg overflow-hidden'>
                    <DialogTitle className='font-poppins text-sml uppercase'>
                        This is for testing.
                    </DialogTitle>
                    <DialogDescription className='p-2 text-sml font-poppins'>
                        {props.message}
                    </DialogDescription>
                   <div className='flex  items-center gap-10 font-poppins'>

                    <DialogClose className='bg-white ring-1 py-2 px-6 text-acc-color text-sml capitalize rounded-lg'>
                            submit
                    </DialogClose>
                    <DialogClose className='bg-acc-color ring-1 text-pri-color text-sml capitalize py-2 px-6 rounded-lg'>
                            cancel
                    
                    </DialogClose>
                    </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default DialogMenu