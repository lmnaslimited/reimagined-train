import PricingCta from "@/components/pricing-cta";
import PricingPlanPrice from "@/components/pricing-plan";
import { TpricingPlansPrices } from "@/data/types";

export default function PricingPlans({
  iPricingPlansPrices,
}: {
  iPricingPlansPrices: TpricingPlansPrices;
}) {
  return (
    <div className="hidden lg:block">
      <div className="grid justify-center px-6 lg:grid-cols-5 lg:max-w-screen-xl mx-auto mb-14">
        <div className="flex flex-col p-2">
          <h2 className="font-bold font-sans text-texttertiary">PLAN</h2>
        </div>
        
        <PricingPlanPrice iPricingPlanPrice={iPricingPlansPrices[0]} />
        <PricingPlanPrice iPricingPlanPrice={iPricingPlansPrices[1]} />
        <PricingPlanPrice iPricingPlanPrice={iPricingPlansPrices[2]} />
        <PricingPlanPrice iPricingPlanPrice={iPricingPlansPrices[3]} />
        </div>
        <div className="grid justify-center px-6 lg:grid-cols-5 lg:max-w-screen-xl mx-auto border-b border-textquaternary">
        <div className="flex flex-col p-2">
          <h2 className="font-bold font-sans text-texttertiary">PRICING</h2>
        </div>
        <PricingCta iPricingPlanPrice={iPricingPlansPrices[0]} />
        <PricingCta iPricingPlanPrice={iPricingPlansPrices[1]} />
        <PricingCta iPricingPlanPrice={iPricingPlansPrices[2]} />
        <PricingCta iPricingPlanPrice={iPricingPlansPrices[3]} />
      </div>
    </div>
  );
}
