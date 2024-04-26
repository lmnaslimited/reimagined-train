import Accordion from "@/components/accordian";
import Layout from "@/components/layout";
import {
  TpricingPage, TpricingPageData,
} from "@/data/types";
import PricingFeature from "@/components/pricing-feature";
import PricingHero from "@/sections/pricing-hero";
import PricingPlans from "@/sections/pricing-pc";
import { useRouter } from "next/router";
import { getPricingPageData } from "./api/pricingPageData";
import PricingMobile from "@/sections/pricing-plan-mobile";


export default function Pricing({pricingPageData}:{pricingPageData:TpricingPageData}) {
  let router =useRouter();
  return (
    <main className="bg-bgprimary">
      <div className="absolute inset-0 bg-[url(/product-heroBG.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
    <Layout ilayoutData={pricingPageData[0].layoutData}>
      <PricingHero ipricingHero={pricingPageData[0].pricinghero} />
      <PricingPlans iPricingPlansPrices={pricingPageData[0].pricingPlanPrice} />
      <PricingFeature ipricingFeatures={pricingPageData[0].pricingPlanFeature} />
      <PricingMobile ipricingMobileData={pricingPageData[0].pricingMobile} />
      <Accordion ifaqs={pricingPageData[0].faqsection} />
    </Layout>
    </div>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  let pricingPageData: TpricingPageData = await getPricingPageData(locale);
  return {
    props: {
      pricingPageData
      },
  };
}