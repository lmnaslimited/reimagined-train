"use client"; // this is a client component
import { useState } from "react";
import SectionContainer from "./section-container";
import { Tfaqs } from "@/data/types";


const Accordion = ({ ifaqs }: {ifaqs:Tfaqs}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <SectionContainer>
    <div id='faq' className="container max-w-4xl px-6 py-10 mx-auto">
      <h1 className="font-sans text-3xl font-bold text-center leading-none tracking-tight text-gray-900 sm:text-4xl">
        {ifaqs.title.text1}{" "}
        <span className="text-primary">{ifaqs.title.text2}</span>
        <div className="mt-1">
          <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
        </div>{" "}
      </h1>
      {ifaqs.faqs.map((faq, index) => (
        <div key={index} className="border-2 border-gray-200 rounded-lg m-4">
          <button
            className="flex gap-3 items-center justify-between w-full p-8"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-base text-left font-semibold text-gray-700 md:text-lg">{faq.question}</span>
            {activeIndex === index ? (
              <span className="text-texttertiary bg-textquinary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 12H6"
                  />
                </svg>
              </span>
            ) : (
              <span className="text-white bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentcolor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            )}
          </button>
          {activeIndex === index && (
            <div className="border-gray-200">
              <p className="p-8 text-md text-gray-500 ">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
    </SectionContainer>
  );
};

export default Accordion;
