import { TproductPage } from "@/data/types";
import { footerEnData } from "./footerData";
import { navbarEnData } from "./navbarData";

export const productCpqEnPage: TproductPage = {
  slug: "cpq-cloud",
  lang: "en",
  productPageDetail: {
    layoutData: {
      footerData: footerEnData,
      navbar: navbarEnData,
      metaData: {
        title: "LMNAs Cloud Solutions | CPQ-Cloud",
        description:"A LENS CPQ makes it simple to specify every possible configuration, basic cost, labour cost, various location specific transportation cost, discount, and scenario, making the quoting process quick and easy.",
        pageUrl: "https://lmnas.com/products/cpq-cloud",
        schemaData: {
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: "LMNAs Cloud Solutions | CPQ-Cloud",
          description:"A LENS CPQ makes it simple to specify every possible configuration, basic cost, labour cost, various location specific transportation cost, discount, and scenario, making the quoting process quick and easy.",
          image: "https://lmnas.com/lmnaslogo.png",
          url: "https://lmnas.com/products/cpq-cloud",
          author: {
            "@type": "Person",
            name: "LMNAs"
          },
          publisher: {
            "@type": "Organization",
            name: "LMNAs Cloud Solutions"
          },
          datePublished: "2023-05-04",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://lmnas.com/cpq-cloud"
          }
        }
      }
    },
    productHero: {
      title: {
        text1: "CPQ",
        text2:"Cloud"
      },
      subTitle: {
        text1:
          "Simplify quoting with our versatile tool, ensuring error-free proposals for customizable products and services"
      },
      cta1: {
        text: "Get Started",
        href: "/pricing"
      },
      cta2: {
        text: "Contact Us",
        href: "https://nectar.lmnas.com/contact"
      },
    },
    productTabs: [
      {
        tabName: "Overview",
        icon: "OverviewIcon",
        tabBody: {
          content: {
              title: {
                text1: "Streamlined Processes and",
                text2: "Customized Solutions"
              },
              banner: {
                text: "Limited Time Offer: Subscribe Now and Save 40% on your User Subscription",
                cta: {
                  text: "Get Started",
                  href: "/pricing"
                }
              },
              features: [
                {
                    icon: "ThumbsUpIcon",
                    featureName: "Margin Protection"
                  },
                  {
                    icon: "LinkIcon",
                    featureName: "Seamless Connectivity"
                  },
                {
                  icon: "AssetsIcon",
                  featureName: "Tailored Configuration"
                }, 
              ],
              usps: [
                {
                  icon: "SparklesIcon",
                  title: "Enhanced Sales Efficiency",
                  content:
                    "Boost sales across multiple channels with error-free orders and lightning-fast proposal creation, tailored to customer and channel-specific pricing."
                },
                {
                  icon: "SparklesIcon",
                  title: "Optimized Operational Performance",
                  content:
                    "Maximize efficiency with integrated sales processes, accelerating quote generation, simplifying approvals, and reducing sales cycles."
                },
                {
                  icon: "SparklesIcon",
                  title: "Strategic Business Insights",
                  content:
                    "Unlock actionable insights to drive sales growth, capitalize on leads and opportunities, and optimize pricing strategies while safeguarding margins."
                }
              ],
              title2: {
                text1: " Empower",
                text2: "Sales Efficiency and Profitability"
              },
              featureDetails: {
                featureCardBig:[],
                featureCardsSmall:[
                    {
                      cardTitle:"Margin Protection",
                      usps:{
                        text1:"Comprehensive price controls",
                        text2:"Intelligent deal recommendations,",
                        highlightedText1:"Rogue discount prevention,",
                      },
                      icon:"MarginFeatureIcon",
                    },
                    {
                        cardTitle:"Seamless Connectivity",
                        usps:{
                          text1:"Enhanced scalability and adaptability,",
                          highlightedText1:"Efficient operations integration.",
                        },
                        icon:"",
                        integrationUsps1:"Streamlined quote processes,",
                        integrationUsps2:"ERP data leverage.",
                      },
                    {
                      cardTitle:"Tailored Configuration",
                      usps:{
                        text1:"Adherence to policies,",
                        text2:"Streamlined complexity handling",
                        highlightedText1:"Quick & error-free quotes,",
                      },
                      icon:"AssetsFeatureIcon",
                    },
                ]
              }
            
          }
        },
        cta1: {
          href: "/pricing",
          text: "Get Started"
        },
        cta2: {
          href: "https://demolens.lmnas.com/",
          text: "Try Now"
        }
      },
    ],
    contactSection: {
      tag: "Contact",
      title: "Let us know how we can help",
      subTitle:
        "We’re here to help and answer any question you might have, We look forward to hearing from you.",
      contactMenthos: [
        {
          icon: "LocationIcon",
          contact: "#B202, Radiance Royal, Poonthalmalle,CH-56.",
          title: "Our office",
          href:"https://goo.gl/maps/a4t4ghmEA1as8vLT9",

        },
        {
          icon: "PhoneIcon",
          contact: "+91 98840 44470",
          title: "Phone",
          href:"tel:+91 98840 44470"
        },
        {
          icon: "MailIcon",
          contact: "hello@lmnas.com",
          title: "Email",
          href:"mailto:hello@lmnas.com"

        }
      ]
    },
    subscribeSection: {
      title: "Subscribe to our newsletter",
      subTitle:
        "Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.",
      inputField: "Enter your email",
      inputPromo: "Product updates, announcements, and discounts. Read our",
      cta1: { text: "Subscribe", href: "/" },
      cta2: { text: "Privacy Policy", href: "/privacy-policy" }
    }
  }
};
