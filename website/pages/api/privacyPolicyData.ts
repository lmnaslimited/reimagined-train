import { TprivacyPolicyData } from "@/data/types";
import { privacyPolicyPageDEData } from "@/locales/de/privacyPolicyDeData";
import { privacyPolicyPageENData } from "@/locales/en/privacyPolicyData";

const privacyPolicyData:TprivacyPolicyData=[
    privacyPolicyPageENData,privacyPolicyPageDEData
]
export async function getPrivacyPolicyData(langId:string):Promise<TprivacyPolicyData>{
    let privacyPolicyPageData:TprivacyPolicyData=await privacyPolicyData.filter(item=>item.lang===langId);
    return privacyPolicyPageData;
  };