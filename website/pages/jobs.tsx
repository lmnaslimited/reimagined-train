import Layout from "@/components/layout";
import { TjobsPageData } from "@/data/types";
import { useRouter } from "next/router";
import { getJobsPageData } from "./api/jobsPageData";
import Hero from "@/sections/hero";
import JobsCardSection from "@/sections/jobs-cardSection";
import JobsHighlight from "@/sections/jobs-highlight";
import ContactSection from "@/sections/contact-section";
import Stats from "@/components/stats";

export default function Jobs({
  jobsPageData
}: {
  jobsPageData: TjobsPageData;
}) {
  let router = useRouter();
  return (
    <main className="bg-bgprimary">
      <div className="absolute inset-0 bg-[url(/product-heroBG.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
        <Layout ilayoutData={jobsPageData[0].layoutData}>
          <main className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <Hero ihero={jobsPageData[0].heroSection} />
            <Stats istats={jobsPageData[0].statsSection}/>
          </main>
          <JobsCardSection ijobCardSection={jobsPageData[0].jobsSection} />
          <main className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <JobsHighlight ijobHighlight={jobsPageData[0].whyLMNAs} />
            <ContactSection iContact={jobsPageData[0].contactSection}/>
          </main>
        </Layout>
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  let jobsPageData: TjobsPageData = await getJobsPageData(locale);
  return {
    props: {
      jobsPageData
    }
  };
}
