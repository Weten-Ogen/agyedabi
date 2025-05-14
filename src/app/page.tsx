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
                        content:"At Agyedabi, we're on a mission to  equip 26,000 Africans with in-demand skills  by the end of 2027. Our goal is to empower individuals to solve their own technical challenges and create opportunities for themselves.Whether  through freelancing, enterpreneurship  or employment. By making practical, modern education  accessible  and affordable, we aim to fight poverty at it's root and help build a self-reliant, skill generation across the continent.",
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
