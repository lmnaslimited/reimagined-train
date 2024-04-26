import SectionContainer from "@/components/section-container";
import { Tproducts } from "../data/types";
import ProductCardMain from "@/components/productCard-main";
import ProductCardTop from "@/components/productCard-top";
import ProductCardBottom from "@/components/productCard-bottom";



export default function Products({iProducts}:{iProducts:Tproducts}) {
  return (
    <SectionContainer>
      <div id="products" className="grid grid-rows-1 lg:grid-rows-5  grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 lg:grid-flow-col gap-4">
        <ProductCardMain iproduct={iProducts[0]} />
        <div className="shadow-lg bg-gray-50 text-center rounded-lg border lg:row-span-3  col-span-2">
          <ProductCardTop iProduct={iProducts[1]} />
        </div>
        <div className="shadow-lg bg-gray-100 rounded-lg border  row-span-2 col-span-2">
          <ProductCardBottom iProduct={iProducts[2]} />
        </div>
        <div className="shadow-lg bg-gray-100 rounded-lg border row-span-2 col-span-2">
          <ProductCardBottom iProduct={iProducts[3]} />
        </div>
        <div className="shadow-lg bg-gray-50 rounded-lg lg:row-span-3  col-span-2">
          <ProductCardTop iProduct={iProducts[4]} />
        </div>
      </div>
    </SectionContainer>
  );
}