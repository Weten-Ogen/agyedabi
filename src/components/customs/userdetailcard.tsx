"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import Typop from './typop'
import Typoh4 from './typoh4'
import CourseShowCardDiv from './courseshowcarddiv'
import Typoh2 from './typoh2'
import BtnLink from './btnlink'
import { AdminContent } from '../../../content/general'
import { Badge } from '../ui/badge'
import AccordionComp from './accordioncomp'
import { getUserById } from '@/app/action/user'
import { useSession } from 'next-auth/react'
import UnvettedComp from './unvettedcomp'
import UnassignedComp from './unassignedcomp'
import OngoingComp from './ongoingcomp'

interface userdetailcardprops {
    className?:string,
    userDetail: userprops
}

const UserDetailCard = (props:userdetailcardprops) => {
    const [user, setUser] = useState<any>(props.userDetail)
    // const session = useSession()
  
    return (
    <div className='flex  flex-col gap-4 p-4 md:max-w-[75%] mt-20  md:mx-auto '>
        <div className='p-4 flex flex-col gap-2'>
        <Typoh2 className='font-space-grotesk text-smm  uppercase font-bold ' >
            { 
            user?.status.toLowerCase() == 'unvetted' ?  
             AdminContent.homeContent.homeTexts.heading :
              user?.status?.toLowerCase() == 'ongoing' ?
               AdminContent.homeContent.homeTexts.ongoing.heading : 
              user?.status.toLowerCase() == 'completed' ? 
              AdminContent.homeContent.homeTexts.completed.heading :
               AdminContent.homeContent.homeTexts.unassigned.heading 
         }</Typoh2>
        <Typop className='text-sml  bg-clip-text font-space-grotesk text-left  leading-7 md:max-w-3xl'>{AdminContent.homeContent.homeTexts.subheading}
        </Typop>
        </div>
        {!user?.vetted ?     
        <div className='w-full'>
        { user?.status === 'completed' ?
        <OngoingComp
            {...props.userDetail}
        />
        :
        user?.status === 'ongoing' ?
        <OngoingComp
        {...props.userDetail}
        />
        :
        <UnassignedComp/>
        } 
        </div>
        :

        <UnvettedComp/>
    }
    </div>
    )}

export default UserDetailCard