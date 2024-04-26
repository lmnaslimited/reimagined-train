
import Layout from "@/components/layout";
import { TaboutUsPageData } from "@/data/types";
import { useRouter } from "next/router";
import AboutLocation from "@/sections/about-location";
import AboutTimeline from "@/sections/about-timeline";
import AboutUsHero from "@/sections/about-us-hero";
import AboutWhatWeOffer from "@/sections/about-what-we-offer";
import { getAboutUsPageData } from "./api/aboutUsPageData";


export default function AboutUs({aboutUsPageData}:{aboutUsPageData:TaboutUsPageData}) {
  let router =useRouter();
  return (
    <main className="bg-bgprimary">
      <div className="absolute inset-0 bg-[url(/product-heroBG.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
    <Layout ilayoutData={aboutUsPageData[0].layoutData}>
      <main className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <AboutUsHero iaboutUsHero={aboutUsPageData[0].aboutUsHero} />
        <AboutTimeline itimeLineSection={aboutUsPageData[0].timeLineSection} />
      </main>
      <AboutWhatWeOffer iaboutUsWhatWeOffer={aboutUsPageData[0].aboutWhatWeOffer}/>
      <main className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <AboutLocation iaboutUsLocation={aboutUsPageData[0].aboutUsLocation} />
      </main>
    </Layout>
    </div>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  let aboutUsPageData: TaboutUsPageData = await getAboutUsPageData(locale);
  return {
    props: {
      aboutUsPageData
      },
  };
}
