import { ReactNode } from "react"
export default function SectionContainer({children,}:{children : React.ReactNode}) {
    return(
        <div className="lmnas-section-container" >
        {children}
        </div>
    )
}