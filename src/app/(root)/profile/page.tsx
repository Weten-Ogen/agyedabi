import React from 'react'
import { fakeuser } from '../../../../content/general'
import ProfileLabelDiv from '@/components/customs/profilelabeldiv';
import Typoh4 from '@/components/customs/typoh4';
import Typop from '@/components/customs/typop';
import BtnLink from '@/components/customs/btnlink';


export default function Profile() {
  const user = fakeuser;
  return (
    <section className='md:flex mt-20 md:mt-12 p-4 md:p-0'>
        <aside className='bg-acc-color h-screen hidden md:block lg:w-full'>

        </aside>
        <div className='rounded-lg bg-acc-color/80 text-white md:bg-white md:text-black  shadow-lg w-full flex p-4 flex-col gap-2'>
          <ProfileLabelDiv
            label='name'
            value={user.name}
            valueClass='text-white'
          />
          <ProfileLabelDiv
            label='email'
            valueClass='text-white'

            value={user.email}
          />
          <ProfileLabelDiv
            valueClass='text-white'
            label='country'
            value={user.country as string}
          />
           <ProfileLabelDiv
            valueClass='text-white'
            label='city'
            value={user.city as string}
          />
           <ProfileLabelDiv
            valueClass='text-white'
            label='verified'
            value={user.vetted ?  'yes' : 'no'}
          />
         
           <ProfileLabelDiv
            label='monthly debts'
            valueClass='text-white'
            value={user.arrears as string}
          />
           <ProfileLabelDiv
            label='debts'
            valueClass='text-white text-sml'
            value={user.debt as string}
          />
           <ProfileLabelDiv
            label='group'
            valueClass='text-white text-sml'
            value={user.group as string}
          />
           <ProfileLabelDiv
            label='total tuition'
            valueClass='text-white text-sml'
            value={user.tuition as string}
          />
          <div className='flex items-start flex-col justify-between'>
            <Typoh4 className='text-left text-sml capitalize font-poppins'>bio</Typoh4>
            <Typop className='font-poppins text-sml  bg-sec-color p-4 rounded-lg  text-left text-white '>
              {user.bio}
            </Typop>
          </div>

        <BtnLink
          href={`/profile/update/${user.id}`}
          label='update profile'
          className='text-white  py-5'
        />

        </div>
    </section>
  )
}
