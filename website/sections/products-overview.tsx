import AsymmetricCard2 from "@/components/featureCard-big";
import GetIcon from "@/components/icons/getIcon";
import { ToverviewTabContent } from "@/data/types";
import Link from "next/link";
import ProductFeatureCards from "./product-feature";

export default function ProductsOverview({
  iproductOverview
}: {
  iproductOverview: ToverviewTabContent;
}) {
  return (
    <section>
      <div className="max-w-xl mb-20 sm:mx-auto">
      <h1 className="max-w-xl mb-3 font-sans text-3xl font-bold text-center leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto ">
        <span className="text-gray-900">{iproductOverview.title.text1}{" "}</span>
        
          <span className=" text-primary ">{iproductOverview.title.text2}</span>
          <div className="">
            <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
          </div>
        </h1>
      </div>
      <div
        className={`grid grid-cols-2 gap-5 gap-y-5  ${
          iproductOverview.features.length == 7
            ? "lg:grid-cols-7 sm:grid-cols-4"
            :iproductOverview.features.length == 5? "lg:grid-cols-5 sm:grid-cols-3":"sm:grid-cols-3"
        } `}
      >
        {iproductOverview.features.map((data, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center w-12 h-12 p-2 text-primary mx-auto mb-4 rounded-full bg-quinary sm:w-12 sm:h-12">
              <GetIcon iconName={data.icon} />
            </div>
            <h2 className="mb-2 text-sm font-bold leading-5 tracking-wider">
              {data.featureName}
            </h2>
          </div>
        ))}
      </div>
      <div className="py-16 lg:py-20">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          {iproductOverview.usps.map((data,index) => (
            <div key={index} className="relative p-px overflow-hidden transition duration-300 transform border border-gray-400 rounded shadow-sm hover:scale-105 group hover:shadow-xl">
              <div className="absolute bottom-0 left-0 w-full h-[1px] duration-300 origin-left transform scale-x-0 bg-primary group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-[1px] h-full duration-300 origin-bottom transform scale-y-0 bg-primary group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-[1px] duration-300 origin-right transform scale-x-0 bg-primary group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-[1px] h-full duration-300 origin-top transform scale-y-0 bg-primary group-hover:scale-y-100" />
              <div className="relative p-5 rounded-sm hover:bg-white">
                <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-quinary lg:mb-0">
                    <div className="text-primary w-6 h-6">
                    <GetIcon iconName={data.icon} />
                    </div>
                  </div>
                  <h2 className="font-semibold leading-5">{data.title}</h2>
                </div>
                <p className="mb-2 text-sm text-gray-900">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-8 py-2 mb-16 text-white bg-primary">
        <div className="flex items-center mx-auto flex-col space-y-6 md:space-y-0 container justify-center md:flex-row md:justify-between py-2">
          <div>
            <span>{iproductOverview.banner.text}</span>
          </div>
          <Link
            href={`${iproductOverview.banner.cta.href}`}
            rel="noopener noreferrer"
            className="items-center gap-2 flex"
          >
            <span className="hover:underline focus-visible:underline">
              {iproductOverview.banner.cta.text}
            </span>
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
        </div>
      </div>
      <h1 className="max-w-xl mb-3 font-sans text-3xl font-bold text-center leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto ">
      <span className="text-gray-900">{iproductOverview.title2.text1}{" "}</span>
        
        <span className=" text-primary ">{iproductOverview.title2.text2}</span>
          <div className="">
            <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
          </div>
        </h1>
      <ProductFeatureCards ifeatureDetails={iproductOverview.featureDetails} />
    </section>
  );
}
