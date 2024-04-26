import { Tproduct } from "@/data/types";
import Link from "next/link";
import GetIcon from "./icons/getIcon";
export default function ProductCardTop({ iProduct }: { iProduct: Tproduct }) {
  return (
    <div className=" mt-12 text-center sm:px-0">
       <Link href={`/products/${iProduct.slug}`}>
      <div
        className={`flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 sm:w-28 sm:h-28`}
      >
        <GetIcon iconName={iProduct.icon}/>
      </div>
      <h6 className={`mb-2 text-md font-bold leading-5 tracking-wider uppercase`}>
        {iProduct.feature.cardTitle}
      </h6>
      <div className="flex items-center justify-center my-4">
        <ul className="mb-4 -ml-1 space-y-2 hidden md:block">
          {iProduct.feature.usps?.map((usp) => (
            <li key={usp} className="flex items-start justify-center">
              <h1 className="text-sm text-center font-normal">{usp}</h1>
            </li>
          ))}
        </ul>
      </div>
      </Link>
      <div className="flex items-center justify-between px-3 py-4 border-t-2 border-gray-200 mt-10 mx-5 md:mx-10 ">
             <Link
              className="flex gap-2 items-center "
              href={`${iProduct.feature.cta1?.href}`}
            >
              {iProduct.feature.cta1?.text}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </Link>
            <Link
              className="flex gap-2 items-center "
              href={`${iProduct.feature.cta2?.href}`}
            >
              {iProduct.feature.cta2?.text}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </Link>
      </div>
    </div>
  );
}

