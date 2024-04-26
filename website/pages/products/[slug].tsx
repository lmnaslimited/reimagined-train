import Layout from "@/components/layout";
import { TproductsPageData } from "@/data/types";
import {
  getAllProductSlug,
  getProductsPageData
} from "../api/productsPageData";
import ContactSection from "@/sections/contact-section";
import NewsletterSubscription from "@/sections/newsletter-subscription";
import Tab from "@/components/tab";
import Hero from "@/sections/hero";

export default function Products({
  productsPageData
}: {
  productsPageData: TproductsPageData;
}) {
  return (
    <main className="bg-zinc-50">
      <div className="absolute inset-0 bg-[url(/product-heroBG.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
        <Layout ilayoutData={productsPageData[0].productPageDetail.layoutData}>
          <main className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <Hero
              ihero={productsPageData[0].productPageDetail.productHero}
            />
            <Tab itabs={productsPageData[0].productPageDetail.productTabs} />
            <ContactSection
              iContact={
                productsPageData[0].productPageDetail.contactSection
              }
            />
            {/* <NewsletterSubscription isubscribeSection={productsPageData[0].productPageDetail.subscribeSection}/> */}
          </main>
        </Layout>
      </div>
    </main>
  );
}
interface productprops {
  params: {
    slug: string;
  };
  locale: string;
}
export async function getStaticProps(productslug: productprops) {
  let productsPageData: TproductsPageData = await getProductsPageData(
    productslug.params.slug,
    productslug.locale
  );
  return {
    props: {
      productsPageData
    }
  };
}
export async function getStaticPaths() {
  const slugs = await getAllProductSlug();
  const paths = slugs?.map((slug) => {
    if (slug.params.lang == "en") {
      return `/products/${slug.params.slug}`;
    } else {
      return `/${slug.params.lang}/products/${slug.params.slug}`;
    }
  });
  return {
    paths: paths || [],
    fallback: false
  };
}
