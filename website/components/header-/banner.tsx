import Link from "next/link";
import { useState } from "react";
import { Tbanner } from "@/data/types";

export default function HeaderBanner({ibanner}:{ibanner:Tbanner}) {
    const [closeBanner,setCloseBanner]=useState<boolean>(true);
  return (
    <>
    {closeBanner&&<div className="relative transition-all duration-300 isolate flex items-center gap-x-6 overflow-hidden bg-colormode px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-th-pink via-th-green to-th-yellow opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-th-yellow via-th-green to-th-pink opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6">
        <span className="text-th-pink text-lg font-bold">{ibanner.subtitle.text2}</span>
          <strong className="ml-2 font-semibold text-th-textprimary">{ibanner.title.text1}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {ibanner.subtitle.text1}{' '}
        </p>
        <Link
          href={`${ibanner.cta.href}`}
          target={`${ibanner.cta.target}`}
          rel={`${ibanner.cta.rel}`}
          className="flex-none px-3  py-1.5 text-md font-medium tracking-wide text-white transition-colors duration-300 transform bg-th-pink rounded-md hover:bg-th-tertiary focus:bg-th-tertiary focus:outline-none"
        >
          {ibanner.cta.text} <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={(e)=>{e.preventDefault();setCloseBanner(false)}}
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>}
    </>
    )
}
