import { TintegrateApp } from "@/data/types";
import SectionContainer from "../components/section-container";
import GetIcon from "@/components/icons/getIcon";
import SectionHeader from "@/components/sectionHeader";
export default function IntegrationApps({
  iintegrateApps,
}: {
  iintegrateApps: TintegrateApp;
}) {
  return (
    <SectionContainer>
     <SectionHeader iTitle={iintegrateApps.title}/>
      <p className="mt-4 text-center text-gray-500 xl:mt-6 ">
        {iintegrateApps.subTitle.text1}{" "}
        <span className="font-bold text-th-primary">
          {iintegrateApps.subTitle.text2}
        </span>
      </p>

      <div className="lg:pt-12 grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
        <div className="inline-block items-center justify-center mx-auto mb-4">
          <GetIcon iconName={iintegrateApps.paypal}/>
        </div>
        <div className="inline-block items-center justify-center mx-auto mb-4">
        <GetIcon iconName={iintegrateApps.dropbox}/>
        </div>
        <div className="inline-block items-center justify-center mx-auto mb-4">
        <GetIcon iconName={iintegrateApps.razorpay}/>
        </div>
        <div className="inline-block items-center justify-center mx-auto mb-4">
        <GetIcon iconName={iintegrateApps.slack}/>
        </div>
        <div className="inline-block items-center justify-center mx-auto mb-4">
        <GetIcon iconName={iintegrateApps.google}/>
        </div>
        <div className="inline-block items-center justify-center mx-auto mb-4">
        <GetIcon iconName={iintegrateApps.stripe}/>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:px-8 ">
        <div className="inline-block items-center justify-center mx-auto">
        <GetIcon iconName={iintegrateApps.shopify}/>
        </div>
        <div className="inline-block items-center justify-center mx-auto ">
        <GetIcon iconName={iintegrateApps.exotel}/>
        </div>
        <div className="inline-block items-center justify-center mx-auto">
        <GetIcon iconName={iintegrateApps.woocommerce}/>
        </div>
        <div className="flex sm:col-span-3 lg:col-span-2 justify-between">
          <div className="inline-block items-center justify-center mx-auto">
          <GetIcon iconName={iintegrateApps.plaid}/>
          </div>
          <div className="inline-block items-center justify-center mx-auto hidden sm:block">
          <GetIcon iconName={iintegrateApps.aws}/>
          </div>
        </div>
        <div className="inline-block col-span-2 items-center justify-center mx-auto sm:hidden">
        <GetIcon iconName={iintegrateApps.aws}/>
        </div>
      </div>
    </SectionContainer>
  );
}
