//"use client"; // this is a client component
// import LanguageMenu from "../components/select-menu/select-language";
import { useEffect, useState } from "react";

import LanguageMenu from "@/components/language-menu";
import Link from "next/link";
import { Tnavbar } from "@/data/types";
import GetIcon from "@/components/icons/getIcon";

export default function Navbar({ inavbar }: { inavbar: Tnavbar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState<{
    isActive: boolean;
    idx: number | null;
  }>({
    isActive: false,
    idx: null
  });
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as Element;
      if (target && !target.closest(".nav-menu")) {
        setDropdownState({ isActive: false, idx: null });
      }
    };
  }, []);
  return (
  <div className={`px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-0 nav-menu transition-all duration-200 ${dropdownState.isActive?("bg-th-colormode"):("")}`}>
      <div className="relative flex items-center justify-between">
        <Link href="/" className="inline-flex items-center sm:pl-8">
          <GetIcon iconName={inavbar.logo} />
          <span className="ml-2 text-xl font-bold tracking-wide text-th-tertiary">
            {inavbar.companyName}
          </span>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex ">
          {inavbar.ctas.map((cta, idx) => {
            return (
              <li key={idx}>
                {cta.isDropdown ? (
                  <div onMouseEnter={() =>
                    setDropdownState({
                      idx: idx,
                      isActive:true
                    })
                  }>
                    <Link href={cta.href} onClick={()=>setDropdownState({isActive:false, idx:null})}
                    className={`w-full flex items-center justify-between gap-1 font-medium tracking-wide transition-colors duration-200 hover:text-th-secondary ${dropdownState.isActive?("text-th-secondary"):("text-th-textsecondary")}`}
                  >
                    {cta.text}
                    {dropdownState.idx == idx && dropdownState.isActive ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Link>
                  </div>
                ) : (
                  <Link
                    href={`${cta.href}`}
                    target={cta.target}
                    rel={cta.rel}
                    className="font-medium tracking-wide text-th-textsecondary transition-colors duration-200 hover:text-th-secondary"
                  >
                    {cta.text}
                  </Link>
                )}
                  {cta.isDropdown&&<div onMouseLeave={()=>setDropdownState({isActive:false,idx:null})} className={` -inset-x-0 shadow z-[5] bg-th-colormode top-14 w-full lg:absolute transition-all duration-150 ${dropdownState.isActive&&dropdownState.idx==idx?("h-80 border-y-th-border-secondary"):("h-0 overflow-hidden")}`} >
                    <ul className={`max-w-screen-xl mx-auto grid gap-6 p-8 grid-cols-4 transition-all duration-500 ${dropdownState.isActive&&dropdownState.idx==idx?("h-full"):("h-0 overflow-hidden")} `} >
                      {cta.navs.map((dropdownItem, idx) => (
                        <li key={idx} onClick={()=> setDropdownState({ isActive: false, idx: null })} >
                          <Link href={`/products/${dropdownItem.slug}`} className="gap-y-8">
                            <div className="rounded-full bg-th-quinary flex items-center justify-center p-2  lg:w-14 lg:h-14">
                              <GetIcon iconName={dropdownItem.icon} />
                            </div>
                            <h1 className="text-gray-800  hover:text-th-secondary hover:underline font-medium lg:text-lg">
                              {dropdownItem.text}
                            </h1>
                            <h2 className="text-sm text-th-textsecondary mt-1">
                              {dropdownItem.description}
                            </h2>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>}
             
              </li>
            );
          })}
        </ul>
        <ul className="items-center hidden space-x-6 lg:flex">
          <li>
            <LanguageMenu />
          </li>
          <Link target="_blank" rel="noopener noreferrer" href={`${inavbar.contactCta.href}`} className="pr-8">
            <li className="bg-th-primary px-3 py-2 text-base rounded-lg text-white tracking-wide">
              {inavbar.contactCta.text}
            </li>
          </Link>
        </ul>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-th-textsecondary" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-colormode border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/" className="inline-flex items-center">
                      <GetIcon iconName={inavbar.logo} />
                      <span className="ml-2 text-xl font-bold tracking-wide text-tertiary">
                        {inavbar.companyName}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-textsenary focus:bg-textsenary focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-textsecondary" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {inavbar.ctas.map((cta) => (
                      <li key={cta.href}>
                        <Link
                          href={`${cta.href}`}
                          target={cta.target}
                          rel={cta.rel}
                          className="font-medium tracking-wide text-textsecondary transition-colors duration-200 "
                        >
                          {cta.text}
                        </Link>
                      </li>
                    ))}
                      <li >
                      <Link href={`${inavbar.contactCta.href}`} className="bg-primary px-3 w-28 py-2 text-base rounded-lg text-white tracking-wide" >
                        {inavbar.contactCta.text}
                        </Link>
                      </li>
                    <li>
                      <LanguageMenu />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
