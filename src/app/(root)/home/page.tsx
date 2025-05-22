// File: src/app/(root)/home/page.tsx

import { getCourses } from '@/app/action/course'
import { auth } from '@/lib/auth'
import dynamic from 'next/dynamic'
import HomePageImage from '@/components/customs/homepageimage'
import { AdminContent } from '../../../../content/general'
import CourseCarouselCard from '@/components/customs/Coursecarousel'
import UserDetailCard from '@/components/customs/userdetailcard'
import HeroFooter from '@/components/customs/herofooter'
import ClientWrapper from '@/components/clientskeletonwrapper'

export default async function Home() {
  const session = await auth()
  const courses = await getCourses()

  if (!session || !courses) return <ClientWrapper />

  return (
    <section className='w-full max-w-full'>
      <HomePageImage
        user={session}
        imageUrl={AdminContent.homeContent.homeImage}
        className=''
      />
      <CourseCarouselCard
        data={courses}
        className=''
      />
      <UserDetailCard
        userDetail={{
          courses: ['official Course', 'rust development', 'python for anything'],
          createdAt: '12/05/20',
          group: '',
          id: '1',
          name: 'Marcus gideon oware',
          status: 'completed',
          userRole: 'user',
          arrears: '50',
          assignment: 'build a card component that has an animation of anything you like.',
          bio: 'I am full stack developer with 4 years of practical and professional experience.',
          city: 'kumasi',
          contact: '0538578421',
          country: 'ghana',
          debt: '0',
          email: 'marcuoware@gmail.com',
          groupRole: 'lead',
          groupWork: 'Build a full chat application that is used by student',
          image: '',
          profilePic: '',
          tuition: '2600',
          vetted: false,
        }}
      />
    </section>
  )
}
