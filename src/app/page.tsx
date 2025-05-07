import Hero from "@/components/hero/hero";
import Image from "next/image";
import { AdminContent } from "../../content/general";

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
        </div>

     </section>
);
}
