import Link from "next/link";
import React from "react";
import { Tproduct } from "@/data/types";
import GetIcon from "./icons/getIcon";

export default function ProductCardMain({ iproduct }: { iproduct: Tproduct }) {
  return (
    <div className="shadow-lg  text-center p-10 rounded-lg border lg:row-start-1 bg-gradient-radial from-blue-50  to-white hover:from-blue-100 sm:col-span-4 lg:row-end-6 col-span-2 lg:col-span-3 lg:col-start-1">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="max-w-lg sm:text-center sm:mx-auto">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-40 h-40 rounded-full mb-8  bg-blue-50">
              <GetIcon iconName={iproduct.icon} />
            </div>
          </div>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-blue-lmnas-dark sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <span className="relative">{iproduct.feature.cardTitle}</span>
            </span>{" "}
          </h2>
          <p className="text-base text-gray-700 md:text-sm mb-6">
            {iproduct.feature.subTitle?.text1}
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            {iproduct.feature.subTitle?.text2}
          </p>
          <hr className="my-8 border-gray-300" />
          <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm mx-auto">
            {iproduct.feature.subTitle?.text3}
          </p>

          <div className="flex items-center flex-col space-y-4 my-10 mx-auto md:justify-center md:flex-row md:space-x-8 md:space-y-0">
            <Link href={`${iproduct.feature.cta1?.href}`}>
              <button className="w-32  py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-lmnas-medium rounded-md hover:bg-blue-lmnas-dark focus:bg-blue-lmnas-dark focus:outline-none">
                {iproduct.feature.cta1?.text}
              </button>
            </Link>
            <Link
              href={`${iproduct.feature.cta2?.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-32  py-3 text-sm font-medium tracking-wide text-blue-lmnas-medium capitalize transition-colors duration-300 transform bg-blue-100 rounded-md hover:bg-blue-lmnas-light hover:text-white focus:bg-blue-lmnas-light focus:outline-none">
                {iproduct.feature.cta2?.text}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
