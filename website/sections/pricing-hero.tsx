import GetIcon from "@/components/icons/getIcon";
import { TpricingHero } from "@/data/types";
export default function PricingHero({ipricingHero}:{ipricingHero:TpricingHero}) {
  return (
    <div className="container px-16 py-8 mx-auto lg:max-w-screen-xl">
      <div className="items-center flex sm:flex-row flex-col">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold font-sans tracking-wide text-textprimary lg:text-4xl">
              {ipricingHero.title.text1} <span className="text-primary">{ipricingHero.title.text2}</span>
            </h1>
            <p className="mt-3 tracking-wide text-xl text-texttertiary">
              {ipricingHero.subTitle.text1}{" "}
              <span className="font-medium text-primary">{ipricingHero.subTitle.text2}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <GetIcon iconName={ipricingHero.image}/>
        </div>
      </div>
    </div>
  );
}
