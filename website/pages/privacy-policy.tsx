import Layout from "@/components/layout";
import { TprivacyPolicyData } from "@/data/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPrivacyPolicyData } from "./api/privacyPolicyData";



export default function PrivacyPolicy({privacyPolicyPageData}:{privacyPolicyPageData:TprivacyPolicyData}) {
  let router =useRouter();
  return (
    <main className="bg-bgprimary">
      <div className="absolute inset-0 bg-[url(/product-heroBG.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
    <Layout ilayoutData={privacyPolicyPageData[0].layoutData}>
      <main id="content" role="main">
        <div className="md:max-w-screen-sm text-center px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
          <h1 className="text-2xl font-bold md:text-4xl ">
            {privacyPolicyPageData[0].title}
          </h1>
          <p className="text-md text-textquaternary mt-4">
            {privacyPolicyPageData[0].subTitle.text1}
          </p>
        </div>

        <div className="md:max-w-screen-sm lg:max-w-[992px] px-4 sm:px-6 lg:px-8 pb-12 md:pt-6 sm:pb-20 mx-auto">
          <div className="grid gap-4 md:gap-8">
            {privacyPolicyPageData[0].pPContents.map((pPcontent)=>(<div key={pPcontent.content.text1}>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 ">
                {pPcontent.heading}
              </h2>
              <p className="mb-5 ">
               {pPcontent.content.text1}
              </p>
              <p className="mb-5">
                {pPcontent.content.text2}
              </p>
              <p className="mb-5">
                {pPcontent.content.text3}
              </p>
            </div>))}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2 ">
                {privacyPolicyPageData[0].contact.heading}
              </h2>
              <p className="mt-3 mb-5">
                {privacyPolicyPageData[0].contact.subTitle.text1}
              </p>
              <p className="mb-5">
                {privacyPolicyPageData[0].contact.subTitle.text2}{" "}
                <Link className="text-primary" href={`${privacyPolicyPageData[0].contact.cta1.href}`}>
                  {privacyPolicyPageData[0].contact.cta1.text}
                </Link>
              </p>
              <p className="mb-5">
                {privacyPolicyPageData[0].contact.subTitle.text3}{" "}
                <Link className="text-primary" href={`${privacyPolicyPageData[0].contact.cta2.href}`}>
                  {privacyPolicyPageData[0].contact.cta2.text}
                </Link>
              </p>
            </div>
            {/* <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl ">
                Join Us and Get the Update
              </h2>

              <div className="mt-8 lg:mt-0">
                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                  <input
                    id="email"
                    type="text"
                    className="px-14 py-2 text-gray-700 placeholder:text-gray-500 bg-white border-2 border-gray-300 rounded-lg sm:mx-2 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email Address"
                  />

                  <button className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-lmnas-medium rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-lmnas-dark focus:outline-none focus:bg-blue-500">
                    Get Started
                  </button>
                </div>

                <p className="mt-3 text-sm text-gray-500 ">
                  Attention! Offer expires in 30 days. Make sure not to miss
                  this opportunity
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </Layout>
    </div>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  let privacyPolicyPageData: TprivacyPolicyData=await getPrivacyPolicyData(locale);
  return {
    props: {
      privacyPolicyPageData
      },
  };
}