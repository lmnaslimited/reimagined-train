import FeatureCardBig from "@/components/featureCard-big";
import FeatureCardSmall from "@/components/featureCard-small";
import { TfeatureDetails } from "@/data/types";

export default function ProductFeatureCards({
  ifeatureDetails
}: {
  ifeatureDetails: TfeatureDetails;
}) {
  return ifeatureDetails.featureCardsSmall.length === 5 ? (
    <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 lg:grid-cols-3 xl:px-0">
      <FeatureCardBig ifeatureCardBig={ifeatureDetails.featureCardBig[0]} />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[0]}
      />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[1]}
      />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[2]}
      />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[3]}
      />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[4]}
      />
      <FeatureCardBig ifeatureCardBig={ifeatureDetails.featureCardBig[1]} />
    </div>
  ) :ifeatureDetails.featureCardsSmall.length === 3 ? (
    <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 lg:grid-cols-3 xl:px-0">
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[0]}
      />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[1]}
      />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[2]}
      />
    </div>
  ):(
    <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 lg:grid-cols-3 xl:px-0">
      <FeatureCardBig ifeatureCardBig={ifeatureDetails.featureCardBig[0]} />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[0]}
      />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[1]}
      />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[2]}
      />
      <FeatureCardSmall
        ifeatureCardSmall={ifeatureDetails.featureCardsSmall[3]}
      />
    </div>
  );
}
