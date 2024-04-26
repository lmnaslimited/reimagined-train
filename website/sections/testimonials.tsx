import Link from "next/link";
import SectionContainer from "../components/section-container";
import Image from "next/image";
import { TtestimonialSection } from "@/data/types";
import TestimoinalCard from "@/components/testimonial-card";
import GetIcon from "@/components/icons/getIcon";
import SectionHeader from "@/components/sectionHeader";
export default function Testimonials({itestimonialSection}:{itestimonialSection:TtestimonialSection}) {
  return (
    <SectionContainer>
      <div className="relative flex">
        <div className="flex flex-col justify-center">
        <SectionHeader iTitle={itestimonialSection.title}/>
          <h1 className="mt-4 text-center text-th-texttertiary xl:mt-6 ">
           {itestimonialSection.subtitle.text1}
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 lg:grid-cols-3">
            <TestimoinalCard itestimonial={itestimonialSection.testimonial[0]}/>
            <TestimoinalCard itestimonial={itestimonialSection.testimonial[1]}/>
            <TestimoinalCard itestimonial={itestimonialSection.testimonial[2]}/>
          </div>
          <hr className="my-12 border-0" />
         <SectionHeader iTitle={itestimonialSection.clientTitle}/>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="flex items-center justify-center ">
              <Link href={`${itestimonialSection.clientLogo[0].href}`}>
               <GetIcon iconName={itestimonialSection.clientLogo[0].logo}/>
              </Link>
            </div>
            <div className="flex items-center justify-center ">
              <Link href={`${itestimonialSection.clientLogo[1].href}`}>
              <GetIcon iconName={itestimonialSection.clientLogo[1].logo}/>
              </Link>
            </div>
            <div className="flex items-center justify-center ">
              <Link href={`${itestimonialSection.clientLogo[2].href}`}>
              <GetIcon iconName={itestimonialSection.clientLogo[2].logo}/>
              </Link>
            </div>
            <div className="flex items-center justify-center ">
              <Link href={`${itestimonialSection.clientLogo[3].href}`}>
              <GetIcon iconName={itestimonialSection.clientLogo[3].logo}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
