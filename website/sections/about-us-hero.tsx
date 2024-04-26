import GetIcon from "@/components/icons/getIcon";
import SectionContainer from "@/components/section-container";
import { TaboutUsHero } from "@/data/types";

export default function AboutUsHero({iaboutUsHero}:{iaboutUsHero:TaboutUsHero}) {
  return (
  <SectionContainer>
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="relative">
              <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-textprimary font-bold  opacity-5 md:block hidden">
               {iaboutUsHero.title.text1}
              </h1>
              <h1 className="pl-2 text-3xl font-bold border-l-8 border-primary md:text-5xl ">
                {iaboutUsHero.title.text2} <span className="text-primary">{iaboutUsHero.title.text3}</span>
              </h1>
            </div>
            <p className="mt-6 mb-5 text-base leading-7 text-texttertiary ">
              {iaboutUsHero.subTitle.text1}
            </p>
            <p className="mb-5 text-base leading-7 text-texttertiary ">
              {iaboutUsHero.subTitle.text2}
            </p>
            <p className="mb-5 text-base leading-7 text-texttertiary">
              {iaboutUsHero.subTitle.text3}
            </p>
            <p className="mb-5 text-base leading-7 text-texttertiary">
             {iaboutUsHero.subTitle.text4}
            </p>
          </div>
          <div className="flex self-center flex-col w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            {iaboutUsHero.companyValues.map((value) =>(<div key={value.iconColor} className="flex mb-4">
              <span className='flex items-center justify-center text-primary flex-shrink-0 w-12 h-12 mr-6 border-2 border-primary rounded-full' >
                <GetIcon iconName={value.icon}/>
              </span>
              <div>
                <h2 className="mb-4 text-xl font-bold leading-tight  md:text-2xl">
                  {value.title}
                </h2>
                <p className="text-base leading-loose text-texttertiary ">
                  {value.subtitle}
                </p>
              </div>
            </div>))}
          </div>
        </div>
        </SectionContainer>
  );
}
