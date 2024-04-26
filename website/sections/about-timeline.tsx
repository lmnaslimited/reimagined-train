import SectionContainer from "@/components/section-container";
import TimeLineCard from "@/components/timeline-card";
import { TtimeLineSection } from "@/data/types";

export default function AboutTimeline({
  itimeLineSection,
}: {
  itimeLineSection: TtimeLineSection;
}) {
  return (
    <SectionContainer>
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto  md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-textquaternary font-bold opacity-10">
                {itimeLineSection.title.text1}
              </div>
              <h1 className="text-5xl font-bold leading-tight ">
                {itimeLineSection.title.text2}{" "}
                <span className="text-primary">
                  {itimeLineSection.title.text3}
                </span>
                <div className="mt-1">
                  <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
                </div>
              </h1>
            </div>
            <p className="mb-16 text-base text-center text-texttertiary">
              {itimeLineSection.subTitle.text1} <br></br>
              {itimeLineSection.subTitle.text2}
            </p>
          </div>
        </div>
        <div className="w-full mx-auto lg:max-w-3xl">
          <TimeLineCard itimeLine={itimeLineSection.timeLines[0]} />
          <TimeLineCard itimeLine={itimeLineSection.timeLines[1]} />
          <TimeLineCard itimeLine={itimeLineSection.timeLines[2]} />
          <TimeLineCard itimeLine={itimeLineSection.timeLines[3]} />
          <TimeLineCard itimeLine={itimeLineSection.timeLines[4]} />
        </div>
      </div>
    </SectionContainer>
  );
}
