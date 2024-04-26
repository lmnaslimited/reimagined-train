import Link from "next/link";
import GetIcon from "./icons/getIcon";
import { TfeatureCardBig } from "@/data/types";

export default function FeatureCardBig({
  ifeatureCardBig
}: {
  ifeatureCardBig: TfeatureCardBig;
}) {
  return (
    <div className="relative col-span-1 lg:h-96 p-6 overflow-hidden rounded-xl border bg-white border-textquinary shadow-md  lg:border-textquaternary lg:bg-bgprimary   lg:lg:hover:bg-white lg:col-span-2 ">
      <div
        className={`lg:h-[62.5%] flex flex-col-reverse gap-y-5 justify-evenly items-center ${ifeatureCardBig.ctaPosition=="reverse"?("lg:flex-row-reverse"):("lg:flex-row")}`}
      >
        <Link
          href={`${ifeatureCardBig.cta1.href}`}
          className="flex items-center justify-center gap-x-1 py-2 px-4 text-primary border border-textquaternary font-medium  duration-150  focus:outline-none rounded-lg md:inline-flex"
        >
          {ifeatureCardBig.cta1.text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link
        target="_blank"
        rel="noopener noreferrer"
          href={`${ifeatureCardBig.cta2.href}`}
          className="flex items-center justify-center gap-x-1 py-2 px-4 text-primary border  border-textquaternary  font-medium  duration-150  focus:outline-none rounded-lg md:inline-flex"
        >
          {ifeatureCardBig.cta2.text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <div className="w-24 h-24">
          <GetIcon iconName={ifeatureCardBig.icon} />
        </div>
      </div>
      <div className="lg:h-[37.5%] m-4">
        <h1 className="mb-3 text-center font-sans font-semibold text-2xl text-textprimary">
          {ifeatureCardBig.cardTitle}
        </h1>
        <h4 className="text-center text-sm tracking-wide leading-6 text-textsecondary">
          {ifeatureCardBig.usps.text1}{" "}
          <span className="font-medium">
            {ifeatureCardBig.usps.highlightedText1}
          </span>{" "}
          {ifeatureCardBig.usps.text2}{" "}
          <span className="font-medium">
            {ifeatureCardBig.usps.highlightedText2}
          </span>{" "}
          {ifeatureCardBig.usps.text3}
        </h4>
      </div>
    </div>
  );
}
