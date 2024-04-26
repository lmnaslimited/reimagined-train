import GetIcon from "@/components/icons/getIcon";
import SectionContainer from "@/components/section-container";
import { TaboutWhatWeOffer } from "@/data/types";
import Link from "next/link";

export default function AboutWhatWeOffer({iaboutUsWhatWeOffer}:{iaboutUsWhatWeOffer:TaboutWhatWeOffer}) {
  return (
      <SectionContainer>
        <main className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold text-center leading-none tracking-tight text-textprimary sm:text-4xl md:mx-auto ">
            {iaboutUsWhatWeOffer.title.text1} <span className=" text-primary">{iaboutUsWhatWeOffer.title.text2}</span>
            <div className="mt-1">
              <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
            </div>
          </h1>
          <div className="grid lg:grid-cols-3 gap-5 pt-7">
            {iaboutUsWhatWeOffer.companyServices.map((companyService,idx) =>(<div key={idx} className="w-full p-8 mb-6 rounded-lg border border-textquaternary hover:bg-white">
              <Link href="/pricing">
                <div >
                  <span className={`flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 border-2 text-primary rounded-full border-primary`}>
                    <GetIcon iconName={companyService.icon}/>
                  </span>
                    <h2 className="my-4 text-xl font-bold leading-tight  md:text-xl">
                      {companyService.service}
                    </h2>
                    <p className="text-base leading-loose text-texttertiary ">
                      {companyService.content}
                    </p>
                </div>
              </Link>
            </div>))}
          </div>
        </main>
      </SectionContainer>
  );
}
