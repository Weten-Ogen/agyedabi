import React from 'react'
import { fakeuser } from '../../../../content/general'
import ProfileLabelDiv from '@/components/customs/profilelabeldiv';
import Typoh4 from '@/components/customs/typoh4';
import Typop from '@/components/customs/typop';
import BtnLink from '@/components/customs/btnlink';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import HeroFooter from '@/components/customs/herofooter';
import { auth, signIn } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { getUserById } from '@/app/action/user';



export default async function Profile() {
   const session = await auth()
    if(!session) {
      await signIn()
    }
  const user = await getUserById(session?.user.id as string);
  return (
    <section className='
     mt-20 md:mt-12 md:p-0   p-4'>
        <div className='md:flex'>

        <aside className='bg-acc-color h-screen hidden md:block lg:w-full'>
          <div className='uppercase font-bold bg-clip-content text-black  flex flex-cols items-center justify-center  mt-70 italic  backdrop-blur-xl   text-lag'>
                 <span className='animate-pulse transition-colors bg-black text-acc-color p-4 repeat-infinite ease-linear skew-x-10 from-text-black to-text-white m-4 '>
                    agye 
                 </span>
            
            <span className='text [6rem] animate-bounce duration-300 '>.</span>
            <span className='m-4 bg-white p-4 text-acc-color -skew-x-16 animate-pulse'>
                dabi
            </span>
          </div>
        </aside>
          <Card className='w-full p-0'>
              <CardContent className='w-full p-4 flex flex-col gap-4'>
       
          <ProfileLabelDiv
            label='name'
            value={user?.name as string}
            valueClass='text-foreground'
            />
      
          <ProfileLabelDiv
            label='email'
            valueClass='text-foreground lowercase '
            
            value={user?.email as string}
            />
          <ProfileLabelDiv
            valueClass='text-foreground'
            label='country'
            value={user?.country as string}
            />
           <ProfileLabelDiv
            valueClass='text-foreground'
            label='city'
            value={user?.city as string}
            />
         
         
           <ProfileLabelDiv
            label='address'
            valueClass='text-foreground '
            value={user?.address as string}
            />
           
           
           <ProfileLabelDiv
            label='contact'
            valueClass='text-foreground '
            value={user?.contact as string}
            />
          
          <div className='flex items-start flex-col p-4 justify-between'>
            <Typoh4 className='text-left text-smm capitalize font-poppins'>bio</Typoh4>
            <CardDescription className='container  p-4 '>
              {user?.bio}
            </CardDescription>
        
           </div>

        <BtnLink
          href={`/profile/update/${user?.id}`}
          label='update profile'
           className='text-white w-full py-5'
          />

          </CardContent>
      </Card>
        </div>
     
    </section>
  )
}
