import ProductCardLargeNew from "@/components/product-cardLarge-new";
import ProductCardSmallNew from "@/components/product-cardSmall-new";
import SectionContainer from "@/components/section-container";

export default function ProductsNew() {
  return (
    <SectionContainer>
      <div className="container relative mx-auto px-6 lg:px-16 xl:px-20 !pt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12">
        <ProductCardLargeNew/>
        <ProductCardSmallNew/>
        <ProductCardSmallNew/>
        <ProductCardSmallNew/>
        <ProductCardSmallNew/>
        <ProductCardLargeNew/>
      </div>
    </SectionContainer>
  );
}
