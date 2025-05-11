import HomePageImage from '@/components/customs/homepageimage'
import React from 'react'
import { AdminContent } from '../../../../content/general'
import CourseCarouselCard from '@/components/customs/Coursecarousel'
import UserDetailCard from '@/components/customs/userdetailcard'
import HeroFooter from '@/components/customs/herofooter'

export default function Home() {
  return (
    <section className='relative w-full max-w-full'>
      <HomePageImage
        imageUrl={AdminContent.homeContent.homeImage}
        className=''
      />
      <CourseCarouselCard
        data={AdminContent.courseContent.courselist}
        className=''
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
