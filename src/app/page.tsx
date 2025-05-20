import Hero from "@/components/hero/hero";
import { AdminContent } from "../../content/general";
import AboutUs from "@/components/customs/aboutus";
import HerobillingCard from "@/components/customs/herobillingcard";
import HeroAccordion from "@/components/customs/heroaccordion";
import HeroTestimonials from "@/components/customs/herotestimonials";
import HeroServices from "@/components/customs/heroservices";
import { Cog, LayoutDashboard, Monitor, ShoppingBag } from "lucide-react";
import HeroFooter from "@/components/customs/herofooter";
import { auth } from "@/lib/auth";
import HeroProcedure from "@/components/customs/heroproceedure";

export default async function Cover() {
   const session = await auth()   
  return (
     <section className="">
        <div className="w-full">
            <Hero
            user={session}
             heading={AdminContent.heroContent.heroHeading}
             subHeading={AdminContent.heroContent.heroSubHeading}
             heroImage={AdminContent.heroContent.heroImage}
             paragraph={AdminContent.heroContent.heroParagraph}
             className=""
            />
            <HeroProcedure/>
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
                  details={AdminContent.HeroTestimonials}
            />
                        {/* our job pool */}
            {/* accordion  sections */}
            {/* list sections */}
            <HeroAccordion
                  details={AdminContent.HeroAccordion}
            />
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
