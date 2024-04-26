import { ThomePageData } from "@/data/types";
import { homepageDEData } from "@/locales/de/homePageDeData";
import { homepageENData } from "@/locales/en/homePageData";

const homePageData:ThomePageData=[
homepageDEData,
homepageENData
]

export async function getHomePageData(langId:string):Promise<ThomePageData>{
    let homePage:ThomePageData= await homePageData.filter(item => item.lang === langId);
    return homePage;
}