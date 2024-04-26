import { Tproduct } from "@/data/types";
import Link from "next/link";
import GetIcon from "./icons/getIcon";
export default function ProductCardBottom({ iProduct }: { iProduct: Tproduct }) {
  return (
    <div className="text-center">
      <Link href={`/products/${iProduct.slug}`}>
      <h6 className={`mb-2 font-bold tracking-wide text-md leading-5 uppercase mt-10`}>
        {iProduct.feature.cardTitle}
      </h6>
      <div className={`flex items-center justify-center w-16 h-16 mx-auto my-5 rounded-full bg-blue-50 sm:w-32 sm:h-32`}>
        <GetIcon iconName={iProduct.icon}/>
      </div>
      </Link>
      <div className="flex items-center justify-between text-base py-4 border-t-2 border-gray-200 mx-5 md:mx-10 ">
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

