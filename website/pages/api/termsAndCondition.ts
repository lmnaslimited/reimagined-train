import { TtermsAndConditionData } from "@/data/types";
import { termsAndConditionDEData } from "@/locales/de/terms&conditionDeData";
import { termsAndConditionENData } from "@/locales/en/terms&conditionData";

const termsAndConditionData:TtermsAndConditionData=[
    termsAndConditionENData,termsAndConditionDEData
]
export async function getTermsAndConditionsData(langId:string):Promise<TtermsAndConditionData>{
    let termsAndConditionsPageData=await termsAndConditionData.filter(item=>item.lang===langId);
    return termsAndConditionsPageData;
  };