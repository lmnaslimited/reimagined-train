import GetIcon from "@/components/icons/getIcon";
import ThemeSwitcher from "@/components/themeSwitcher";
import { Tfooter } from "@/data/types";
import Link from "next/link";
export default function Footer({ ifooterData }: { ifooterData: Tfooter }) {
  return (
    <div className="bg-[#111827]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-6 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <GetIcon iconName={ifooterData.column1.logo} />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-300">
                {ifooterData.column1.companyNAme}
              </span>
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-slate-400">
                {ifooterData.column1.description}
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium tracking-wide text-gray-300 mb-4">
              {ifooterData.column2.title}
            </p>
            <ul className="mt-2 space-y-4">
              {ifooterData.column2.ctas.map((cta) => (
                <li key={cta.href}>
                  <Link
                    href={`${cta.href}`}
                    className="text-slate-400 transition-colors duration-300 hover:text-gray-300"
                  >
                    {cta.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium tracking-wide text-gray-300 mb-4">
              {ifooterData.column3.title}
            </p>
            <ul className="mt-2 space-y-4">
              {ifooterData.column3.ctas.map((cta) => (
                <li key={cta.href}>
                  <Link
                    href={`${cta.href}`}
                    target={cta.target}
                    rel={cta.rel}
                    className="text-slate-400 transition-colors duration-300 hover:text-gray-300"
                  >
                    {cta.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-300 hover:text-gray-300">
              {ifooterData.column4.title}
            </p>
            <div className="flex">
              <p className="mr-1 text-slate-400">
                {ifooterData.column4.subTitle.text1}
              </p>
              <Link
                href={`tel:${ifooterData.column4.phoneno}`}
                className="transition-colors duration-300 text-slate-400 hover:text-gray-300"
              >
                {ifooterData.column4.phoneno}
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-slate-400">
                {ifooterData.column4.subTitle.text2}
              </p>
              <Link
                href={`mailto:${ifooterData.column4.mailid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-slate-400 hover:text-gray-300"
              >
                {ifooterData.column4.mailid}
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-slate-400">
                {ifooterData.column4.subTitle.text3}
              </p>
              <p className="transition-colors duration-300 text-slate-400">
                {ifooterData.column4.address.text1}
                <br></br>
                {ifooterData.column4.address.text2}
                <br></br>
                {ifooterData.column4.address.text3}
              </p>
            </div>
            <div>
              <Link
                href={`${ifooterData.column4.contactCta.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1 transition-colors duration-300 text-slate-400 hover:text-gray-300"
              >
                {ifooterData.column4.contactCta.text}
              </Link>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-300">
              {ifooterData.column5.title}
            </span>
            <div className="flex items-center mt-1 space-x-3">
              {ifooterData.column5.socialCta.map((social) => (
                <Link
                  href={`${social.href}`}
                  key={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors duration-300 "
                >
                  <GetIcon iconName={social.icon} />
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-400">
              {ifooterData.column5.subTitle}
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between py-4 lg:flex-row">
          <ThemeSwitcher />
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-slate-500 lg:flex-row">
          <p className="text-sm text-slate-400">
            {ifooterData.bottom.copyright}
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            {ifooterData.bottom.ctas.map((cta) => (
              <li key={cta.href}>
                <Link
                  href={`${cta.href}`}
                  target={cta.target}
                  rel={cta.rel}
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  {cta.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
   
    </div>
  );
}
