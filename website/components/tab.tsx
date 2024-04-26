import { Ttabs } from "@/data/types";
import { useState } from "react";
import ProductsOverview from "@/sections/products-overview";
import Link from "next/link";
import { CtaDark, CtaLight } from "./double-cta";

export default function Tab({itabs}:{itabs:Ttabs}){
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const toggleMenu = (index: number) => {
      setActiveIndex(index);
    };
    return(
       <div className="pt-16 lg:pt-20">
        {/* <div className=" flex justify-center my-16 lg:mt-0 overflow-hidden  rounded-md ">
        {itabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => toggleMenu(index)}
            className="p-1 "
          >
            <div
              className={`${
                activeIndex === index ? "bg-white shadow-lg" : ""
              } px-2 py-2 w-80 rounded-md flex flex-row items-center justify-center gap-3`}
            >
              <div
                className={`flex items-center justify-center p-1 w-10 h-10 rounded-lg ${
                  activeIndex === index
                    ? "bg-blue-lmnas-medium text-white"
                    : " text-gray-800"
                } `}
              >
                <GetIcon iconName={tab.icon} />
              </div>
              <div className="inline-block justify-center">
                <p
                  className={` font-semibold tracking-wide text-lg ${
                    activeIndex === index
                      ? "text-blue-lmnas-medium"
                      : "text-gray-800"
                  }`}
                >
                  {tab.tabName}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div> */}
      {activeIndex==0&&<ProductsOverview iproductOverview={itabs[0].tabBody.content}/>}
      <div className="flex items-center justify-center gap-x-3 sm:text-sm mt-14">
        <CtaDark ictaDark={itabs[0].cta1}/>
        <CtaLight ictaLight={itabs[0].cta2}/>
     </div>
     </div>
    )
}