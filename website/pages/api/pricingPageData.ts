import { TpricingPageData } from "@/data/types";
import { pricingPageDEData } from "@/locales/de/pricingPageDeData";
import { pricingPageENData } from "@/locales/en/pricingPageData";

const pricingPage:TpricingPageData=[
    pricingPageENData,
    pricingPageDEData
]
export async function getPricingPageData(langId:string):Promise<TpricingPageData>{
    let pricingpageData:TpricingPageData=await pricingPage.filter(item => item.lang === langId);
    return pricingpageData;
  }