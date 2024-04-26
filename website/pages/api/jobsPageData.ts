import { TjobsPageData } from "@/data/types";
import { jobsPageDEData } from "@/locales/de/jobsPageDeData";
import { jobsPageENData } from "@/locales/en/jobsPageData";

const jobsPageData:TjobsPageData=[
jobsPageENData,
jobsPageDEData
]

export async function getJobsPageData(langId:string):Promise<TjobsPageData>{
    let jobsPage:TjobsPageData= await jobsPageData.filter(item => item.lang === langId);
    return jobsPage;
}