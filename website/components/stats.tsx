import SectionContainer from "@/components/section-container";
import { Tstats } from "@/data/types";

export default function Stats({istats}:{istats:Tstats}){
    return(
        <SectionContainer>
        <div>
        <h1 className="max-w-xl mb-3 font-sans text-3xl font-bold text-center leading-none tracking-tight text-textprimary sm:text-4xl md:mx-auto">
          What you can{" "}
          <span className=" text-primary ">expect from us</span>
        </h1>
        <ul className="mt-12 flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
          {istats.map((item, idx) => (
            <li key={idx} className="text-center px-12 md:px-16">
              <h4 className="text-4xl text-primary font-semibold">
                {item.data}
              </h4>
              <p className="mt-3 text-textprimary font-medium">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
      </SectionContainer>
    )
}