import { TproductPage } from "@/data/types";
import { footerEnData } from "./footerData";
import { navbarEnData } from "./navbarData";

export const productErpEnPage: TproductPage = {
  slug: "erp&finance-cloud",
  lang: "en",

  productPageDetail: {
    layoutData: {
      footerData: footerEnData,
      navbar: navbarEnData,
      metaData: {
        title: "LMNAs Cloud Solutions | ERP & Finance Cloud",
        description:
          "Powerful Solutions for Efficient Operations and Financial Management. Streamline Your Operations, Drive Growth, and Achieve Financial Success.",
        pageUrl: "https://lmnas.com/products/erp&finance-cloud",
        schemaData: {
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: "LMNAs Cloud Solutions | ERP & Finance Cloud",
          description:
          "Powerful Solutions for Efficient Operations and Financial Management. Streamline Your Operations, Drive Growth, and Achieve Financial Success.",
          image: "https://lmnas.com/lmnaslogo.png",
          url: "https://lmnas.com/products/erp&finance-cloud",
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
            "@id": "https://lmnas.com/privacy-policy"
          }
        }
      }
    },
    productHero: {
      title: {
        text1: "ERP & Finance",
        text2:"Cloud"
      },
      subTitle: {
        text1:
          "Powerful Solutions for Efficient Operations and Financial Management. Streamline Your Operations, Drive Growth, and Achieve Financial Success."
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
                text1: "Empower All-in-One",
                text2: "Business Management"
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
                  icon: "LinkIcon",
                  featureName: "Integrations"
                },
                {
                  icon: "AccountingIcon",
                  featureName: "Accounting"
                },
                {
                  icon: "TruckIcon",
                  featureName: "Supply Chain"
                },
                {
                  icon: "ProjectsIcon",
                  featureName: "Projects"
                },
                {
                  icon: "QualityIcon",
                  featureName: "quality"
                },
                {
                  icon: "StocksIcon",
                  featureName: "Stocks"
                },
                {
                  icon: "AssetsIcon",
                  featureName: "Assets"
                },
              ],
              usps: [
                {
                  icon: "SparklesIcon",
                  title: "Futuristic Technology",
                  content:
                    "LENS ERP leverages cutting-edge tech to automate processes, improve efficiency, and optimize decision-making, paving the way for business transformation."
                },
                {
                  icon: "SparklesIcon",
                  title: "Automated Workflows",
                  content:  "Automated data entry and financial reconciliations, enable LENS ERP to automate routine tasks and enhance employee productivity.",
                },
                {
                  icon: "SparklesIcon",
                  title: "Real-Time Insights",
                  content:
                    "Instant access to accurate financial data, real-time dashboards, and analytics empower businesses to make prompt, informed decisions."
                }
              ],
              title2: {
                text1: "LENS ERP & Finance Cloud:",
                text2: "Powering Your Business Operations"
              },
              featureDetails: {
                featureCardBig:[{
                  cardTitle:"Supply Chain",
                  usps:{
                    text1:"Customer and supplier portal, Stock auto replenishment,",
                    highlightedText1:"Automated invoicing and payments,",
                    highlightedText2:"Item variants, Warranty serials and batch management,",
                    text2:"Multi currency and multi lingual, Promotion management, Forecasting and Planning,",
                    text3:"Omni-channel sales and purchase.",
                  },
                  icon:"SupplyChainFeatureIcon",
                  cta1:{
                    text:"Get Started",
                    href:"/pricing"
                  },
                  cta2:{
                    text:"Try Now",
                    href:"https://demolens.lmnas.com/"
                  },
                  ctaPosition:"lg:flex-row"
                },
              {
                  cardTitle:"Stocks",
                  usps:{
                    text1:"Stock auto replenishment, Item variants,",
                    highlightedText1:"Serial and batch management,",
                    highlightedText2:"Stock accounting and controlling,",
                    text2:"Integrated Quality management, Stock Ageing analysis,",
                    text3:"Perpetual inventory management, Warehouse tree management, Multi UOM.",
                  },
                  icon:"StocksFeatureIcon",
                  cta1:{
                    text:"Get Started",
                    href:"/pricing"
                  },
                  cta2:{
                    text:"Try Now",
                    href:"https://demolens.lmnas.com/"
                  },
                  ctaPosition:"reverse"
                }],
                featureCardsSmall:[
                    {
                      cardTitle:"Quality",
                      usps:{
                        text1:" Quality Goal,",
                        text2:"Purchase and sales quality audits,",
                        text3:"Measure and continuous improvement",
                        highlightedText1:"Quality procedures,",
                        highlightedText2:"Review and action,"
                      },
                      icon:"QualityFeatureIcon",
                    },
                    {
                      cardTitle:"Projects",
                      usps:{
                        text1:"Budgets and controlling,",
                        text2:"Time tracking and billing, Customer portal access,",
                        text3:"Realtime Tracking",
                        highlightedText1:" Profitability analysis,",
                        highlightedText2:" Agile & kanban hybrid,"
                      },
                      icon:"ProjectsFeatureIcon",
                    },
                    {
                      cardTitle:"Integration",
                      usps:{
                        text1:"Omni-channel sales and purchases,",
                        highlightedText1:"Webhook integrations.",
                      },
                      icon:"",
                      integrationUsps1:"Open API integration.",
                      integrationUsps2:"Integrate your favorited apps.",
                    },
                    {
                      cardTitle:"Accounting",
                      usps:{
                        text1:"Chart of accounts,",
                        text2:"Subscription management, ",
                        text3:"IFRS complaint reports, Pricing Engine",
                        highlightedText1:"Finance controlling,",
                        highlightedText2:"Multi Currency,"
                      },
                      icon:"AccountingFeatureIcon",
                    },
                    {
                      cardTitle:"Assets",
                      usps:{
                        text1:"Asset Depreciation ledger,",
                        text2:"Asset maintanance, Asset Repair,",
                        text3:"Asset Tracking.",
                        highlightedText1:"Installed Base,",
                        highlightedText2:" Asset support management,"
                      },
                      icon:"AssetsFeatureIcon",
                    }
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
