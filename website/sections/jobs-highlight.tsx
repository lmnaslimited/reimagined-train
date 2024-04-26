import GetIcon from "@/components/icons/getIcon";
import SectionContainer from "@/components/section-container";
import { TjobHighlight } from "@/data/types";

export default function JobsHighlight({
  ijobHighlight
}: {
  ijobHighlight: TjobHighlight;
}) {

  return (
    <SectionContainer>
      <div>
        <h1
          id="lifeatlmnas"
          className="max-w-lg mb-6 font-sans text-3xl font-bold text-center leading-none tracking-tight text-textprimarysm:text-4xl md:mx-auto "
        >
          {ijobHighlight.title.text1}{" "}
          <span className=" text-primary">
            {ijobHighlight.title.text2}
          </span>
          <div className="mt-1">
            <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
          </div>
        </h1>
        <p className="mt-4 text-center text-texttertiary xl:mt-6 ">
          {ijobHighlight.subTitle.text1}
          <br></br>
          <span className="font-bold text-primary">
            {ijobHighlight.subTitle.text2}
          </span>
        </p>
      </div>
      <div className="lg:pt-12 pt-4 grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          {ijobHighlight.featuresBenefit.map((featurebenefit, idx) => (
            <div key={idx} className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-quinary">
                  <div className="w-6 h-6 text-primary">
                    <GetIcon iconName={featurebenefit.icon} />
                  </div>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-bold leading-5 text-primary">
                  {featurebenefit.title}
                </h6>
                <p className="text-sm text-textprimary">
                  {featurebenefit.content}
                </p>
                <hr className="w-full my-6 border-textquaternary" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </SectionContainer>
  );
}
