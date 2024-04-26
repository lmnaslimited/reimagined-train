import { TpricingPlanPrice } from "@/data/types";
import Link from "next/link";

export default function PricingCta({
  iPricingPlanPrice,
}: {
  iPricingPlanPrice: TpricingPlanPrice;
}) {
  return (
    <div className="flex flex-col p-2 justify-between">
      <h2 className="text-3xl text-primary font-bold font-sans">
        {iPricingPlanPrice.price}
      </h2>
      <p className="text-texttertiary mb-8">{iPricingPlanPrice.subtitle}</p>
      <Link href={`${iPricingPlanPrice.cta?.href}`} target="_blank" rel="noopener noreferrer">
      <button
        type="submit"
        className={`inline-flex items-center justify-center mb-8 px-4 h-9 xl:px-6 font-bold text-sm tracking-wide rounded-lg border border-textquaternary ${iPricingPlanPrice.cta?.style}`}
      >
        {iPricingPlanPrice.cta?.text}
        <svg
          className="inline-block w-2 ml-1 "
          fill="currentcolor"
          viewBox="0 0 12 12"
        >
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
        </svg>
      </button>
      </Link>
    </div>
  );
}
