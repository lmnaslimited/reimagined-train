import { Tindustry } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import GetIcon from "./icons/getIcon";

export default function IndustryCard({ iindustry }: { iindustry: Tindustry }) {
  return (
    <div
      className={`group relative mx-auto w-full overflow-hidden rounded-[16px] bg-th-bg-tertiary p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r ${
        iindustry.icon == "ManufacturingLogo"
          ? "hover:from-th-secondary hover:via-th-primary hover:to-th-secondary"
          : iindustry.icon == "EducationLogo"
          ? "hover:from-rose-300 hover:via-rose-700 hover:to-rose-300"
          : "hover:from-amber-200 hover:via-amber-700 hover:to-amber-200"
      }`}
    >
      <div className="group-hover:animate-spin-slow invisible  absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white to-transparent group-hover:visible"></div>
      <div className="relative rounded-[15px] bg-th-bg-primary shadow-inner p-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="h-36">
            <GetIcon iconName={iindustry.icon}/>
            </div>
          </div>

          <h1 className="text-xl font-semibold text-th-textprimary">
            {iindustry.title}
          </h1>
          <div className="flex justify-between text-base text-th-textsecondary">
            <Link
              className="flex gap-2 items-center "
              href={`${iindustry.cta1.href}`}
            >
              {iindustry.cta1.text}
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
              className="flex gap-2 items-center"
              href={`${iindustry.cta2.href}`}
            >
              {iindustry.cta2.text}
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
      </div>
    </div>
  );
}
