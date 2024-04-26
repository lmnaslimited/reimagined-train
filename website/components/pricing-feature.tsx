
import { TpricingFeatures } from "@/data/types";
import GetIcon from "./icons/getIcon";

export default function PricingFeature({ipricingFeatures}:{ipricingFeatures:TpricingFeatures}) {
  return (
      <div className="hidden lg:block">
        {ipricingFeatures.map((pricingfeature, index) => (
          <div
            key={index}
            className="grid justify-center py-6 px-6 gap-8 lg:grid-cols-5 lg:max-w-screen-xl mx-auto border-b border-textquaternary"
          >
            <div>
              <h3 className="text-md font-semibold text-textsecondary">
                {pricingfeature.title}
              </h3>
            </div>
            <div>
              <h3 className="text-md text-texttertiary font-normal">
                {pricingfeature.starter.text}
                <GetIcon iconName={pricingfeature.starter.icon}/>
              </h3>
            </div>
            <div>
              <h3 className="text-md text-texttertiary font-normal">
                {pricingfeature.smallbusiness.text}
                <GetIcon iconName={pricingfeature.smallbusiness.icon}/>
              </h3>
            </div>
            <div>
              <h3 className="text-md text-texttertiary font-normal">
                {pricingfeature.mediumbsuiness.text}
                <GetIcon iconName={pricingfeature.mediumbsuiness.icon}/>
              </h3>
            </div>
            <div>
              <h3 className="text-md text-texttertiary font-normal">
                {pricingfeature.enterprise.text}
                <GetIcon iconName={pricingfeature.enterprise.icon}/>
              </h3>
            </div>
          </div>
        ))}
     </div>
  );
}

