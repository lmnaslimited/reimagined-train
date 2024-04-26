import SectionContainer from "@/components/section-container";
import { TsubscribeSection } from "@/data/types";

export default function NewsletterSubscription ({isubscribeSection}:{isubscribeSection:TsubscribeSection}) {
    return (
        <SectionContainer>
        <section className="items-center mt-12 max-w-screen-xl mx-auto px-4 gap-4 md:flex md:px-8 xl:gap-12">
            <div className="flex-1 space-y-3">
                <h3 className="text-2xl text-textprimary font-bold lg:text-3xl">
                    {isubscribeSection.title}
                </h3>
                <p className="text-textquaternary leading-relaxed">
                  {isubscribeSection.subTitle} 
                </p>
            </div>
            <div className="mt-6 flex-1">
                <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="items-center justify-center sm:flex">
                    <input 
                        type="email"
                        placeholder={isubscribeSection.inputField}
                        className="text-texttertiary w-full p-3 rounded-md border outline-none focus:border-tertiary"
                    />
                    <button
                        className="w-full mt-3 px-5 py-3 rounded-md text-white bg-primary hover:bg-tertiary duration-150 outline-none shadow-md sm:mt-0 sm:ml-3 sm:w-auto"
                    >
                        {isubscribeSection.cta1.text}
                    </button>
                </form>
                <p className="mt-3 text-[15px] text-textquaternary">
                    {isubscribeSection.inputPromo} <a className="text-primary underline" href="javascript:void(0)"> {isubscribeSection.cta2.text} </a>
                </p>
            </div>
        </section>
        </SectionContainer>
    )
}