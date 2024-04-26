import { CtaDark, CtaLight } from "@/components/double-cta";
import SectionContainer from "@/components/section-container";
import { Thero } from "@/data/types";
import Link from "next/link";

export default function Hero({ ihero }: { ihero: Thero }) {
  return (
    <SectionContainer>
      <section className="flex items-center flex-1 py-4">
        <div className="flex flex-col w-full ">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-th-primary">{ihero.title.text1} </span>
            <span className="text-th-textsecondary">{ihero.title.text2}</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-12 text-center md:text-xl text-th-texttertiary">
            {ihero.subTitle.text1}
          </p>
          <p className="md:text-xl text-center mx-auto max-w-3xl text-th-texttertiary">
            {ihero.subTitle.text2}
          </p>
          <div className="flex flex-col mt-16 space-y-3 md:space-x-3 mx-auto sm:flex-row sm:justify-center sm:space-y-0">
            <CtaDark ictaDark={ihero.cta1} />
            <CtaLight ictaLight={ihero.cta2} />
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}
