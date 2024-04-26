import { TpricingPlanPrice } from "@/data/types";

export default function PricingPlanPrice({
  iPricingPlanPrice,
}: {
  iPricingPlanPrice: TpricingPlanPrice;
}) {
  return (
    <div className="flex flex-col p-2">
      <h2 className="text-lg font-sans font-bold text-tertiary">
        {iPricingPlanPrice.title}
      </h2>
    </div>
  );
}
