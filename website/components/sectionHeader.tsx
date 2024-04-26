import { Ttitle } from "@/data/types";

export default function SectionHeader({ iTitle }: { iTitle: Ttitle }) {
  return (
    <>
      {iTitle.text3 !== undefined ? (
        <h1 className=" font-sans text-3xl font-bold text-center leading-none tracking-tight text-th-textprimary sm:text-4xl">
          {iTitle.text1} <br></br> {iTitle.text2}{" "}
          <span className="text-th-primary">{iTitle.text3}</span>
          <div className="mt-1">
            <span className="inline-block w-40 h-1 bg-th-primary rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-th-primary rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-th-primary rounded-full"></span>
          </div>
        </h1>
      ) : (
        <h1 className="max-w-xl mb-3 font-sans text-3xl font-bold text-center leading-none tracking-tight text-th-textprimary sm:text-4xl md:mx-auto ">
        {iTitle.text1}{" "}
          <span className=" text-th-primary ">{iTitle.text2}</span>
          <div className="">
            <span className="inline-block w-40 h-1 bg-th-primary rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-th-primary rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-th-primary rounded-full"></span>
          </div>
        </h1>
      )}
    </>
  );
}
