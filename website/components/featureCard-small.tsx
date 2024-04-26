import { TfeatureCardSmall } from "@/data/types";
import GetIcon from "./icons/getIcon";

export default function FeatureCardSmall({
  ifeatureCardSmall
}: {
  ifeatureCardSmall: TfeatureCardSmall;
}) {
  return (
    <div className="relative col-span-1 lg:h-96 overflow-hidden rounded-xl border bg-white shadow-md border-textquinary lg:border-textquaternary lg:bg-bgprimary p-4  lg:hover:bg-white ">
      <div className="lg:h-[60%] flex justify-center items-center">
        <div className={`${ifeatureCardSmall.icon == "" ? "" : "w-24 h-24"}`}>
          <GetIcon iconName={ifeatureCardSmall.icon} />
        </div>
        <div>
          <h2 className="mb-4 font-semibold font-mono text-textprimary">
            {ifeatureCardSmall.integrationUsps1}
          </h2>
          <h2 className="font-semibold font-mono text-textprimary">
            {ifeatureCardSmall.integrationUsps2}
          </h2>
        </div>
      </div>
      <div className="lg:h-[40%] m-4">
        <h1 className="mb-3 text-center font-sans font-semibold text-2xl text-textprimary">
          {ifeatureCardSmall.cardTitle}
        </h1>
        <h4 className="text-center text-sm tracking-wide leading-6 text-textsecondary">
          {ifeatureCardSmall.usps.text1}{" "}
          <span className="font-medium">
            {ifeatureCardSmall.usps.highlightedText1}{" "}
          </span>
          {ifeatureCardSmall.usps.text2}{" "}
          <span className="font-medium">
            {ifeatureCardSmall.usps.highlightedText2}{" "}
          </span>
          {ifeatureCardSmall.usps.text3}
        </h4>
      </div>
    </div>
  );
}
