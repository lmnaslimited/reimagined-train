import { Tcta } from "@/data/types";
import Link from "next/link";
export function CtaDark({ictaDark}:{ictaDark:Tcta}){
    return(
        <Link href={`${ictaDark.href}`}>
          <button className="lmnas-cta-dark">
            {ictaDark.text}
          </button>
        </Link>
    )
}
export function CtaLight({ictaLight}:{ictaLight:Tcta}){
    return(
        <Link href={`${ictaLight.href}`} target={`${ictaLight.target}`} rel={`${ictaLight.rel}`}>
          <button className="lmnas-cta-light">
            {ictaLight.text}
          </button>
        </Link>
    )
}