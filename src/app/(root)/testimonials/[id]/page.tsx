import React from 'react'
import { AdminContent } from '../../../../../content/general'
import Image from 'next/image'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id } =  params;
  console.log(id)
 
  const user = AdminContent.HeroTestimonials.find(item => item.id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className='mt-14 w-full p-4  flex flex-col gap-8 '>
      <div className='w-[90%] max-w-full object-cover bg-acc-color p-4 mx-auto'>
        <Image 
        className='object-contain w-full h-[50vh]'
        src={user.imageUrl} 
        alt={user.name} 
        priority={true}
        width={500} 
        height={400} />
      </div>
      <div className='max-w-2xl mx-auto  flex flex-col gap-8'>
        <h1 className='text-smm font-bold'>{user.name}</h1>
        <p>{user.content}</p>
      </div>
    </div>
  );
}
