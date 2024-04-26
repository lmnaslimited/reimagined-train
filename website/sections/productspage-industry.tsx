import { TproductIndustries } from "@/data/types";
import Link from "next/link";

export default function ProductsPageIndustry({iproductIndustry}:{iproductIndustry:TproductIndustries}){
    return(
        <section className="p-4 lg:p-8 mt-16 ">
	<div className="container mx-auto space-y-12">
		{iproductIndustry.map((industry,idx)=>(<div key={idx} className={`flex flex-col overflow-hidden rounded-md shadow-sm ${industry.position}`}>
			<img src={industry.image} alt="" className="h-80  aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<span className="text-xs uppercase ">{industry.title}</span>
				<h3 className="text-3xl font-bold">{industry.subTitle}</h3>
				<p className="my-6 ">{industry.content}</p>
				<Link href={`${industry.cta.href}`} className="self-start">{industry.cta.text}</Link>
			</div>
		</div>))}
	</div>
</section>
    )
}