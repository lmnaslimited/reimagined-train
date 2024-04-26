import GetIcon from "@/components/icons/getIcon"
import SectionContainer from "@/components/section-container"
import { TcontactSection } from "@/data/types"
import Link from "next/link"

export default function ContactSection ({iContact}:{iContact:TcontactSection}) {
    return (
    <SectionContainer>
            <div className="max-w-screen-xl mx-auto px-4 text-textsecondary md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-primary font-semibold">
                        {iContact.tag}
                    </h3>
                    <p className="text-textprimary text-3xl font-semibold sm:text-4xl">
                        {iContact.title}
                    </p>
                    <p>
                        {iContact.subTitle}
                    </p>
                </div>
                <div>
                    <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                        {
                            iContact.contactMenthos.map((item, idx) => (
                                <li key={idx}>
                                    <h4 className="text-textprimary text-lg font-medium">{item.title}</h4>
                                    <div className="mt-3 flex items-center gap-x-3">
                                        <div className="flex-none text-textquaternary">
                                            <GetIcon iconName={item.icon}/>
                                        </div>
                                        <Link href={`${item.href}`} target="_blank" rel="noopener noreferrer"><p>{item.contact}</p></Link>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            </SectionContainer>
    )
}