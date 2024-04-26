
import Link from "next/link";
import SectionContainer from "../components/section-container"
import { TstartTrial } from "@/data/types";
export default function StartTrial({istartTrialSection}:{istartTrialSection:TstartTrial}) {
  return (
    <SectionContainer>
    <div className="overflow-hidden bg-th-bg-secondary lg:flex lg:w-full md:shadow-lg md:rounded-xl">
      {/* <div className="lg:w-4/5">
        <div className="h-64 bg-cover lg:h-full " style={{backgroundImage:"url('/free-trial.svg')"}} ></div>
      </div> */}

      <div className="flex flex-col items-center justify-center px-6 py-12 lg:max-w-5xl mx-auto ">
        <h2 className="text-2xl font-semibold text-center font-sans text-th-textsecondary md:text-4xl">
          {istartTrialSection.title.text1}
        <span className="font-bold text-th-primary">{istartTrialSection.title.text2}</span>
        </h2>

        <p className="my-8 text-lg text-center text-th-texttertiary">
        {istartTrialSection.subTitle.text1}
        </p>
        <Link href={`${istartTrialSection.cta.href}`}>
        <button
          type="submit"
          className="px-14 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-th-primary rounded-md hover:bg-th-tertiary focus:bg-th-tertiary focus:outline-none"
        >
        {istartTrialSection.cta.text}
          <svg
            className="inline-block w-2 ml-1"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </button>
        </Link>
      </div>
    </div>
    </SectionContainer>
  );
}
