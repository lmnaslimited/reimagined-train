import Hero from "@/sections/hero";
import Layout from "@/components/layout";
import Products from "@/sections/products";
import { ThomePage, ThomePageData, Tproducts } from "@/data/types";
import Industry from "@/sections/industry";
import IntegrationApps from "@/sections/integration-apps";
import Testimonials from "@/sections/testimonials";
import StartTrial from "@/sections/start-trial";
import { useRouter } from "next/router";
import { getHomePageData } from "./api/homePageData";
import HeaderBanner from "@/components/header-/banner";
import ProductsNew from "@/sections/products-new";




export default function Home({ homePageData }: { homePageData: ThomePageData}) {
  let router =useRouter();
  return (
    <main className="bg-th-bg-primary ">
      <div className="absolute inset-0 bg-[url(/product-heroBG.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
      {/* <HeaderBanner ibanner={homePageData[0].banner}/> */}
    <Layout ilayoutData={homePageData[0].layoutData}>
      <main className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <Hero ihero={homePageData[0].heroSection} />
        {/* <Products iProducts={homePageData[0].productSection} /> */}
      </main>
      <ProductsNew/>
      <Industry iindustrySection={homePageData[0].industrySection} />
      <main className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <IntegrationApps iintegrateApps={homePageData[0].integrateAppsSection} />
        <Testimonials itestimonialSection={homePageData[0].testimonialSection} />
        <StartTrial istartTrialSection={homePageData[0].startTrialSection} />
      </main>
    </Layout>
    </div>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  let homePageData:ThomePageData=await getHomePageData(locale);
  return {
    props: {
      homePageData
      },
  };
}