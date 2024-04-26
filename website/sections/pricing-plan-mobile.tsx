import GetIcon from "@/components/icons/getIcon";
import { TpricingMobilePlan, TpricingMobilePlans } from "@/data/types";
import Link from "next/link";
import React, { useState } from "react";



const PricingMobile = ({ipricingMobileData}:{ipricingMobileData:TpricingMobilePlans}) => {
  const [selectedPlan, setSelectedPlan] = useState(ipricingMobileData[2]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handlePlanSelect = (plan: TpricingMobilePlan) => {
    setSelectedPlan(plan);
    setActiveIndex(plan.id === activeIndex ? null : plan.id)
  };
  return (
    <div className="lg:hidden">
      <div className="px-4 grid grid-cols-1 gap-8 mt-6 md:px-24">
        {ipricingMobileData.map((plan) => (
          <>
          <div
            key={plan.id}
            onClick={() => handlePlanSelect(plan)}
            className={`flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl ${
              plan.id === activeIndex
                ? "border-primary"
                : "border-texttertiary"
            }`}
          >
            <div className="flex flex-col space-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ${
                  plan.id === activeIndex
                    ? "text-primary"
                    : "text-texttertiary"
                } sm:h-7 sm:w-7`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>

              <h2
                className={`text-lg font-medium ${
                  plan.id === activeIndex
                    ? "text-primary"
                    : "text-texttertiary"
                } sm:text-lg`}
              >
                {plan.name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <div
                className={`px-2 text-xs ${
                  plan.id === activeIndex
                    ? "text-primary"
                    : "text-texttertiary"
                } bg-bgsecondary rounded-full  sm:px-4 sm:py-1`}
              >
                {plan.users}
              </div>

              <h2
                className={`text-xl font-semibold ${
                  plan.id === activeIndex
                    ? "text-primary"
                    : "text-texttertiary"
                } sm:text-3xl`}
              >
                {plan.price}
                <span className="text-base font-medium"></span>
              </h2>
            </div>
          </div>
         {activeIndex===plan.id&& <div className="p-8 mx-4 mt-2 space-y-4 bg-bgsecondary rounded-xl">
          {selectedPlan.features.map((features, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-textprimary "
            >
              <p className="text-sm sm:text-base">{features.feature}</p>
              <GetIcon iconName={features.icon} />
            </div>
          ))}
          <div className="flex justify-center mt-8">
            <Link href={`${selectedPlan.cta.href}`} >
            <button className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-tertiary">
              {selectedPlan.cta.text}
            </button>
            </Link>
          </div>
        </div>}
        </>
        ))}
      </div>
    </div>
  );
};
export default PricingMobile;
