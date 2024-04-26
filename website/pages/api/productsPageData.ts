import { TproductsPageData } from "@/data/types";
import { productCpqDePage } from "@/locales/de/productCpqDeData";
import { productCrmDePage } from "@/locales/de/productCrmDeData";
import { productErpDePage } from "@/locales/de/productErpDeData";
import { productHrmsDePage } from "@/locales/de/productHrmsDeData";
import { productCpqEnPage } from "@/locales/en/productCpqData";
import { productCrmEnPage } from "@/locales/en/productCrmData";
import { productErpEnPage } from "@/locales/en/productErpData";
import { productHrmsEnPage } from "@/locales/en/productHrmsData";


const productsPage:TproductsPageData=[
  productCrmDePage,productCrmEnPage,productErpDePage,productErpEnPage,productHrmsEnPage,productHrmsDePage,productCpqEnPage,productCpqDePage]
export async function getProductsPageData(slug:string,locale:string):Promise<TproductsPageData>{
    let productsPageData:TproductsPageData=await productsPage.filter((item) => item.slug === slug && item.lang===locale);
    return productsPageData;
  }

  export async function getAllProductSlug() {
    const slugs = productsPage.map((product) => (
        {
            params: { slug: product.slug, lang:product.lang },
        }
    ))
    return slugs
}