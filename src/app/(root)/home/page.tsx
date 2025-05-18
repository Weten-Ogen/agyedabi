import HomePageImage from '@/components/customs/homepageimage'
import React from 'react'
import { AdminContent } from '../../../../content/general'
import CourseCarouselCard from '@/components/customs/Coursecarousel'
import UserDetailCard from '@/components/customs/userdetailcard'
import HeroFooter from '@/components/customs/herofooter'
import { auth, signIn } from '@/lib/auth'


export default async function Home() {
  const session = await auth()
  // if(!session) {
  //   await signIn()
    
  // }

  return (
    <section className='relative -z-10 w-full max-w-full'>
      <HomePageImage
        imageUrl={AdminContent.homeContent.homeImage}
        className=''
      />
      <CourseCarouselCard
        data={AdminContent.courseContent.courselist}
        className='md:-top-12'
       />
      <UserDetailCard
        userDetail={
          {
            courses: ['official Course','rust development','python for anything'],
            createdAt: '12/05/20',
            group: '',
            id : '1',
            name: "Marcus gideon oware",
            status:'unassigned',
            userRole:'user',
            arrears:'50',
            assignment:'build a card component that has an animation of anything you like.',
            bio:'I am full stack develop with 4 year of practical and professional experience.',
            city:'kumasi',
            contact:'0538578421',
            country:'ghana',
            debt:'0',
            email:'marcuoware@gmail.com',
            groupRole:'lead',
            groupWork:'Build a full chat application that is used by student ',
            image:'',
            profilePic:'',
            tuition:'2600',
            vetted:true,


          }
        }
      />
      <HeroFooter/>    
    </section>
  )
}
