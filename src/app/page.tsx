import Hero from "@/components/hero/hero";
import Image from "next/image";
import { AdminContent } from "../../content/general";
import AboutUs from "@/components/customs/aboutus";
import HerobillingCard from "@/components/customs/herobillingcard";
import HeroAccordion from "@/components/customs/heroaccordion";
import HerotestimonialCard from "@/components/customs/herotestimonialcard";
import HeroTestimonials from "@/components/customs/herotestimonials";
import HeroServices from "@/components/customs/heroservices";
import { Cog, LayoutDashboard, Monitor, ShoppingBag } from "lucide-react";
import HeroFooter from "@/components/customs/herofooter";

export default function Cover() {
   
  return (
     <section className="">
        <div className="w-full">
            <Hero
             heading={AdminContent.heroContent.heroHeading}
             subHeading={AdminContent.heroContent.heroSubHeading}
             heroImage={AdminContent.heroContent.heroImage}
             paragraph={AdminContent.heroContent.heroParagraph}
             className=""
            />
            <HeroAccordion
                  details={AdminContent.HeroAccordion}
            />
            {/* how payme
            nt works  */}
            
            <HeroServices
               details={[
                  {
                    
                     content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur officiis corrupti dolore quas, amet doloribus sapiente corporis modi enim.",
                     icon:<ShoppingBag/>,
                     label:"Tutoring"
                  },
                  {
                    
                     content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur officiis corrupti dolore quas, amet doloribus sapiente corporis modi enim.",
                  
                     icon:<Monitor/>,
                     label:"Tutoring"
                  },
                  {
                    
                     content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur officiis corrupti dolore quas, amet doloribus sapiente corporis modi enim.",
                   
                     icon:<LayoutDashboard/>,
                     label:"Tutoring"
                  },
                  {
                    
                     content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur officiis corrupti dolore quas, amet doloribus sapiente corporis modi enim.",
                   
                     icon:<Cog/>,
                     label:"Tutoring"
                  },
                  {
                   
                     content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur officiis corrupti dolore quas, amet doloribus sapiente corporis modi enim.",
                     href:"/",
                     icon:<ShoppingBag/>,
                     label:"Tutoring"
                  },
               ]}
            />
            
            <HerobillingCard/>
            <HeroTestimonials
                  details={[
                     {
                        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit impedit quis ut dignissimos rem deserunt adipisci quod repudiandae voluptas consectetur amet in fugiat beatae, officiis a est nam illum nihil!',
                        email:"marcuw@gmail.com",
                        href:'/profile/2',
                        imageUrl:'/neural.jpg',
                        name:'Ariande Grande'
                     },
                     {
                        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit impedit quis ut dignissimos rem deserunt adipisci quod repudiandae voluptas consectetur amet in fugiat beatae, officiis a est nam illum nihil!',
                        email:"marcuw@gmail.com",
                        href:'/profile/2',
                        imageUrl:'/neural.jpg',
                        name:'Ariande Grande'
                     },
                     {
                        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit impedit quis ut dignissimos rem deserunt adipisci quod repudiandae voluptas consectetur amet in fugiat beatae, officiis a est nam illum nihil!',
                        email:"marcuw@gmail.com",
                        href:'/profile/2',
                        imageUrl:'/neural.jpg',
                        name:'Ariande Grande'
                     },
                     {
                        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit impedit quis ut dignissimos rem deserunt adipisci quod repudiandae voluptas consectetur amet in fugiat beatae, officiis a est nam illum nihil!',
                        email:"marcuw@gmail.com",
                        href:'/profile/2',
                        imageUrl:'/neural.jpg',
                        name:'Ariande Grande'
                     },
                     {
                        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit impedit quis ut dignissimos rem deserunt adipisci quod repudiandae voluptas consectetur amet in fugiat beatae, officiis a est nam illum nihil!',
                        email:"marcuw@gmail.com",
                        href:'/profile/2',
                        imageUrl:'/neural.jpg',
                        name:'Ariande Grande'
                     },
                  ]}
            />
                        {/* our job pool */}
            {/* accordion  sections */}
            {/* list sections */}
            {/* links */}
            {/* contact section */}
            {/* abouts us */}
            <div className="bg-acc-color/80 py-2 ">
                  <AboutUs
                     className=""
                     details={{
                        callToAction:"contact us",
                        content:'we are an online platform that trains people to become experience developers. We used experience because during the process of your study , we match you with real companies and you contribute to build a profile of an experience developer . We also help aid you get a US Job if possible or applicable. if you are not into offshoring . we will aid you in your local area gig applications.',
                        heading:'about us',
                        href:'/about',
                        imageUrl:"/neural.jpg",
                     }}
                  />
            </div>
        </div>
        <HeroFooter/>

     </section>
);
}
