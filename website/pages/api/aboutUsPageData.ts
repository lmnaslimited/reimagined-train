import { TaboutUsPageData } from "@/data/types";
import { aboutUspageDEData } from "@/locales/de/aboutUsPageDeData";
import { aboutUspageENData } from "@/locales/en/aboutUsPageData";

const aboutUsPage:TaboutUsPageData=[
aboutUspageENData,aboutUspageDEData
]
export async function getAboutUsPageData(langId:string):Promise<TaboutUsPageData>{
    let aboutpage:TaboutUsPageData=await aboutUsPage.filter(item => item.lang === langId);
    return aboutpage;
  }