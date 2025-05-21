import React from 'react'
import { AdminContent } from '../../../../../content/general';
import Image from 'next/image';
import Typoh4 from '@/components/customs/typoh4';
import Typop from '@/components/customs/typop';


export default async function page({params}:{params : Promise<{id: string}>}) {
    const{ id} = await params;
    const testimonials = [
        {
        id:"1",
    content:'Joining Agyedabi was a turning point in my career. The support, mentorship, and resources I received gave me the clarity and confidence I needed to aim higher. Just weeks after joining, I landed an interview with Turing  a global remote company that pays no less than $500. I never imagined I could attract such an opportunity so quickly. I’m incredibly grateful to the Agyedabi community for believing in me and helping me take this leap. This is just the beginning.',
    email:"sarahobenewaoben@gmail.com",
    href:`testimonials/${1}`,
    imageUrl:'https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%2010.20.19%20AM-HGv9SSx9CG4lazoot7XQNRmFTuyr4B.jpeg',
    name:'Sarah Obeng'
        },
    {
        id:"2",
    content:"Before joining Agyedabi, I had the passion but lacked the direction and structure to turn my interest in tech into a career. That all changed the moment I stepped into this bootcamp. Agyedabi didn’t just teach me how to code ,they helped me believe in my potential.The mentorship is real, the projects are practical, and what really stands out is how they support us beyond the classroom. Through Agyedabi, I’ve landed freelance gigs that are helping me build my portfolio and earn while I learn.And the flexible payment plan? That made it possible for me to even start this journey without financial pressure holding me back. Agyedabi is more than a bootcamp . it's a community that’s changing lives, including mine.",
    email:"esther373addo@gmail.com",
    href:`testimonials/${2}`,
    imageUrl:'https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%2010.20.20%20AM%20%281%29-Wowu3HOGwFAzsFmNVkuEWSMbb7JNl9.jpeg',
    name:'Esther Ohenewaa Abena Addo'
    },
    {
    id:'3',
    content:"My journey with Agyedabi has been nothing short of transformative. I used to wonder if tech was really for me  now I know it is. From day one, the bootcamp provided not just skills, but confidence, structure, and access.One of the most impactful things for me was how they connected us to real freelance opportunities. I never imagined I’d be building things for actual clients so early in my learning journey.And the flexible payment option took away a huge burden. I didn’t have to choose between chasing my dreams and affording them. Agyedabi made this education accessible, and in doing so, they’ve opened doors I never thought possible.If you’re looking for more than just a bootcamp . if you want a lifeline into tech , this is the place.",
    email:"mintanaAlexi202@gmail.com",
    href:`testimonials/${3}`,
    imageUrl:'https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%2010.20.20%20AM-PpPesxCVVjuNfqxjcpAYpHUHQZRXyh.jpeg',
    name:'Alexander Mintah'
    }
    ]
    const testimonial = testimonials.find(item => item.id === id)
  return (
    <div className='mt-20 p-8'>
        <div className='flex flex-col gap-4 md:w-[80%] md:mx-auto'>
            <div className='flex flex-col  '>
                <Typoh4 className='text-sml font-poppins '>{testimonial?.name as string}</Typoh4>
                <Typop className='text-sml font-space-grotesk '>{testimonial?.email as string}</Typop>
            </div>
            <div className='text-sml font-poppins max-w-4xl text-justify'>
                <Typop>{testimonial?.content as string}</Typop>
            </div>
            <div className='max-w-full h-auto'>
                {/* <Image
                    className='object-fit w-full h-auto'
                    alt={testimonial?.name as string}
                    src={testimonial?.imageUrl as string}

                /> */}

            </div>
        </div>
    </div>
  )
}
