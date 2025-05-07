import React from 'react'
import { fakeuser } from '../../../../content/general'
import ProfileLabelDiv from '@/components/customs/profilelabeldiv';
import Typoh4 from '@/components/customs/typoh4';
import Typop from '@/components/customs/typop';
import BtnLink from '@/components/customs/btnlink';
import { Card, CardContent, CardDescription } from '@/components/ui/card';


export default function Profile() {
  const user = fakeuser;
  return (
    <section className='md:flex mt-20 md:mt-12 md:p-0   p-4'>

        <aside className='bg-acc-color h-screen hidden md:block lg:w-full'>

        </aside>
          <Card className='w-full p-0'>
              <CardContent className='w-full p-4 flex flex-col gap-4'>
        
          <ProfileLabelDiv
            label='name'
            value={user.name}
            valueClass='text-foreground'
            />
          <ProfileLabelDiv
            label='email'
            valueClass='text-foreground'
            
            value={user.email}
            />
          <ProfileLabelDiv
            valueClass='text-foreground'
            label='country'
            value={user.country as string}
            />
           <ProfileLabelDiv
            valueClass='text-foreground'
            label='city'
            value={user.city as string}
            />
           <ProfileLabelDiv
            valueClass='text-foreground'
            label='verified'
            value={user.vetted ?  'yes' : 'no'}
            />
         
           <ProfileLabelDiv
            label='monthly debts'
            valueClass='text-foreground'
            value={user.arrears as string}
            />
           <ProfileLabelDiv
            label='debts'
            valueClass='text-foreground text-sml'
            value={user.debt as string}
            />
           <ProfileLabelDiv
            label='group'
            valueClass='text-foreground '
            value={user.group as string}
            />
           <ProfileLabelDiv
            label='total tuition'
            valueClass='text-foreground text-sml'
            value={user.tuition as string}
            />
          <div className='flex items-start flex-col justify-between'>
            <Typoh4 className='text-left text-sml capitalize font-poppins'>bio</Typoh4>
            <CardDescription className='container  p-4 '>
              {user.bio}
            </CardDescription>
        
           </div>

        <BtnLink
          href={`/profile/update/${user.id}`}
          label='update profile'
           className='text-white w-full py-5'
          />

          </CardContent>
      </Card>
    </section>
  )
}
