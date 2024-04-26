import Footer from "@/sections/footer"
import Navbar from "@/sections/navbar"
import Meta from "./meta"
import {  Tlayout, } from "@/data/types"
import HeaderBanner from "./header-/banner"

interface LayoutProps {
    children: React.ReactNode,
    ilayoutData: Tlayout,
  }
export default function Layout ({ children ,ilayoutData }: LayoutProps) {
    return (
    <div className="layout">
      <Navbar inavbar={ilayoutData.navbar}/>
      <Meta imetaData={ilayoutData.metaData}/>
      <main>
      {children}
      </main>
      <Footer ifooterData={ilayoutData.footerData}/>
      </div>
  )
    }