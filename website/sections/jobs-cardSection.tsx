import JobCard from "@/components/job-card";
import SectionContainer from "@/components/section-container";
import { TjobSection } from "@/data/types";

export default function JobsCardSection({
  ijobCardSection
}: {
  ijobCardSection: TjobSection;
}) {
  return (
    <SectionContainer>
      <section className="bg-bgsecondary border-y shadow">
        <div
          id="job-openings"
          className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
        >
          <h1 className="max-w-xl mb-3 font-sans text-3xl font-bold text-center leading-none tracking-tight text-textprimary sm:text-4xl md:mx-auto ">
            {ijobCardSection.title.text1}{" "}
            <span className=" text-primary ">
              {ijobCardSection.title.text2}
            </span>
            <div className="">
              <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
            </div>
          </h1>

          <p className="mt-4 text-center text-texttertiary xl:mt-6 ">
            {ijobCardSection.subTitle.text1}
            <br></br>
            <span className="font-bold text-primary">
              {ijobCardSection.subTitle.text2}
            </span>
          </p>

          <div className="flex flex-wrap justify-center -mx-3 lg:pt-12 pt-6">
            {ijobCardSection.cards.map((cardData, idx) => (
              <JobCard key={idx} ijobCard={cardData} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}
