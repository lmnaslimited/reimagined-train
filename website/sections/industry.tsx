import Link from "next/link";
import SectionContainer from "../components/section-container";
import { TindustrySection } from "@/data/types";
import IndustryCard from "@/components/industry-card";
import SectionHeader from "@/components/sectionHeader";

export default function Industry({iindustrySection}:{iindustrySection:TindustrySection}) {
  return (
    <SectionContainer>
      <section className="bg-th-bg-secondary border-y border-th-border-primary shadow">
      <div id="industry" className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
       <SectionHeader iTitle={iindustrySection.title}/>
        <p className="mt-4 text-center text-th-texttertiary xl:mt-6 ">
        {iindustrySection.subTitle.text1}
        </p>
        <p className="mt-2 text-center text-th-texttertiary xl:mt-3 ">
          {iindustrySection.subTitle.text2}
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 xl:gap-12 lg:grid-cols-3">
          <IndustryCard iindustry={iindustrySection.industry[0]}/>
          <IndustryCard iindustry={iindustrySection.industry[1]}/> 
          <IndustryCard iindustry={iindustrySection.industry[2]}/>
        </div>
      </div>
      </section>
      </SectionContainer>
  );
}
