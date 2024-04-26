import { TpricingPage } from "@/data/types";
import { footerEnData } from "./footerData";
import { navbarEnData } from "./navbarData";
export const pricingPageENData: TpricingPage = {
  lang:'en',
  layoutData:{
    footerData:footerEnData,
    navbar:navbarEnData, 
  metaData:{
      title:'LENS Pricing | Discover Our Cloud ERP Solution Pricing Plans',
      description:'Discover LENS pricing plans and get started with LENS Starter for just $14/month. Scale your business and pay less per user with more features. Streamline your processes, drive growth, and optimize your business with LENS. Visit our pricing page today!',
      pageUrl:'https://lmnas.com/pricing',
      schemaData:{
        "@context": "http://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://lmnas.com/pricing",
                "name": "LENS Pricing",
                "description": "Discover LENS pricing plans and get started with LENS Starter for just $14/month. Scale your business and pay less per user with more features. Streamline your processes, drive growth, and optimize your business with LENS. Visit our pricing page today!",
                "author": {
                    "@type": "Organization",
                    "@id": "https://lmnas.com/pricing",
                    "name": "LMNAs",
                    "url": "https://lmnas.com",
                     "sameAs": [
                        "https://twitter.com/lmnaslimited",
            "https://www.youtube.com/@lmnascloudsolutions.4549",
            "https://www.linkedin.com/company/lmnaslimited?originalSubdomain=in"
                    ]
                },
                "publisher": {
                    "@type": "Organization",
                    "@id": "https://lmnas.com/pricing",
                    "name": "LMNAs",
                    "url": "https://lmnas.com",
                    "sameAs": [
                            "https://twitter.com/lmnaslimited",
            "https://www.youtube.com/@lmnascloudsolutions.4549",
            "https://www.linkedin.com/company/lmnaslimited?originalSubdomain=in"
                        ],
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://lmnas.com/lmnaslogo.png",
                        "width": "1000",
                        "height": "1000"
                    }
                }
            },
            {
                "@type": "WebSite",
                "@id": "www.lmnas.com",
                "name": "LMNAs",
                "url": "www.lmnas.com"
            }
        ]
    }
    },},
    pricinghero: {
      title:{ text1: "Pricing",
      text2: "Plan",},
      subTitle:{text1: "Pick a plan based on your",
      text2: "need",},
      image:'PricingImage',
    },
    pricingPlanPrice: [
      {
        title: "LENS Starter",
        subtitle: "Per Site, per Month",
        price: "$ 97",
        cta: {
          text: "Start Trial",
          href: "https://nectar.lmnas.com/free-trail-registraion/new",
          style:'shadow-sm text-primary'
        },
      },
      {
        title: "LENS Small Business",
        subtitle: "Per Site, per Month",
        price: "$ 261",
        cta: {
          text: "Start Trial",
          href: "https://nectar.lmnas.com/free-trail-registraion/new",
          style:'shadow-sm text-primary'
        },
      },
      {
        title: "LENS Medium Business",
        subtitle: "Per Site, per Month",
        price: "$ 279",
        cta: {
          text: "Start Trial",
          href: "https://nectar.lmnas.com/free-trail-registraion/new",
          style:'shadow-lg text-white bg-primary'
        },
      },
      {
        title: "LENS Enterprise",
        subtitle: "Per Site, per Month",
        price: "Contact Us",
        cta: {
          text: "Contact Us",
          href: "https://nectar.lmnas.com/contact?subject=Enterprise%20Plan%20Enquiry",
          style:'shadow-sm text-primary'
        },
      },
    ],
    pricingPlanFeature: [
      {
        title: "Users",
        starter: {
          text: "5 Users", icon:''
        },
        smallbusiness: { text: "15 Users", icon:'' },
        mediumbsuiness: { text: "20 Users", icon:'' },
        enterprise: { text: "upto 50 Users", icon:'' },
      },
      {
        title: "All Features",
        starter: {
          icon: 'FalseIcon',
        },
        smallbusiness: { icon: 'TrueIcon' },
        mediumbsuiness: { icon: 'TrueIcon' },
        enterprise: { icon: 'TrueIcon' },
      },
  
      {
        title: "Product Warranty",
        starter: {
          text: "14 days", icon:''
        },
        smallbusiness: { text: "21 days", icon:'' },
        mediumbsuiness: { text: "42 days", icon:''},
        enterprise: { text: "56 days", icon:'' },
      },
      {
        title: "Functional Support",
        starter: {
          icon: 'TrueIcon',
        },
        smallbusiness: { icon: 'TrueIcon' },
        mediumbsuiness: { icon: 'TrueIcon' },
        enterprise: { icon: 'TrueIcon' },
      },
      {
        title: "Additional Users",
        starter: {
          text: "$ 19.5/month", icon:''
        },
        smallbusiness: { text: "$ 17.5/month", icon:'' },
        mediumbsuiness: { text: "$ 14/month", icon:'' },
        enterprise: { text: "Contact Us", icon:'' },
      },
      {
        title: "Unlimited Users",
        starter: {
          icon: 'FalseIcon',
        },
        smallbusiness: { icon: 'FalseIcon' },
        mediumbsuiness: { icon: 'FalseIcon' },
        enterprise: { icon: 'TrueIcon' },
      },
      {
        title: "Regional DB",
        starter: {
          icon: 'FalseIcon',
        },
        smallbusiness: { icon: 'FalseIcon' },
        mediumbsuiness: { icon: 'TrueIcon' },
        enterprise: { icon: 'TrueIcon' },
      },
      {
        title: "Maintanance Support",
        starter: {
          text: "8 x 5", icon:''
        },
        smallbusiness: { text: "8 x 6", icon:'' },
        mediumbsuiness: { text: "12 x 7", icon:''},
        enterprise: { text: "24 x 7", icon:''},
      },
    ],
    pricingMobile:[
      
        {
          id: 1,
          name: "LENS Starter",
          price: "$ 97/mo",
          users: "5 users",
          features: [
            {
              feature: "All Features",
              icon: "MobileFalseIcon"
            },
            {
              feature: "Product Warranty",
              icon: "14 Days"
            },
            {
              feature: "Functional Support",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Additional Users",
              icon: "$19.5/month"
            },
            {
              feature: "Unlimited Users",
              icon: "MobileFalseIcon"
            },
            {
              feature: "Regional DB",
              icon: "MobileFalseIcon"
            },
            {
              feature: "Maintanance Support",
              icon: "8x5"
            }
          ],
          cta:{
            text:'Start Trial',
            href:'https://nectar.lmnas.com/free-trail-registraion/new',
          }
        },
        {
          id: 2,
          name: "LENS Small Business",
          price: "$ 261/mo",
          users: "15 users",
          features: [
            {
              feature: "All Features",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Product Warranty",
              icon: "21 Days"
            },
            {
              feature: "Functional Support",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Additional Users",
              icon: "$17.5/month"
            },
            {
              feature: "Unlimited Users",
              icon: "MobileFalseIcon"
            },
            {
              feature: "Regional DB",
              icon: "MobileFalseIcon"
            },
            {
              feature: "Maintanance Support",
              icon: "8x6"
            }
          ], cta:{
            text:'Start Trial',
            href:'https://nectar.lmnas.com/free-trail-registraion/new',
          }
        },{
          id: 3,
          name: "LENS Medium Business",
          price: "$ 279/mo",
          users: "20 users",
          features: [
            {
              feature: "All Features",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Product Warranty",
              icon: "42 Days"
            },
            {
              feature: "Functional Support",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Additional Users",
              icon: "$14/month"
            },
            {
              feature: "Unlimited Users",
              icon: "MobileFalseIcon"
            },
            {
              feature: "Regional DB",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Maintanance Support",
              icon: "12x7"
            }
          ], cta:{
            text:'Start Trial',
            href:'https://nectar.lmnas.com/free-trail-registraion/new',
          }
        },{
          id: 4,
          name: "LENS Enterprise",
          price: "Contact Us",
          users: "Upto 50 users",
          features: [
            {
              feature: "All Features",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Product Warranty",
              icon: "56 Days"
            },
            {
              feature: "Functional Support",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Additional Users",
              icon: "Contact Us"
            },
            {
              feature: "Unlimited Users",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Regional DB",
              icon: "MobileTrueIcon"
            },
            {
              feature: "Maintanance Support",
              icon: "24x7"
            }
          ], cta:{
            text:'Contact Us',
            href:'https://nectar.lmnas.com/contact?subject=Enterprise%20Plan%20Enquiry',
          }
        }
    ],
    faqsection: {
      title:{text1:'Frequently Asked',
      text2:'Questions?',},
      faqs:[
      {
        question: "What is the standard Implementation Timeline for LENS?",
        answer:
          "The implementation timeline for LENS can vary depending on the level of customizations required. For a small business without any customizations, LENS can be ready in a very short amount of time. However, if customizations are needed, the implementation time can range from 1 to 4 weeks.",
      },
      {
        question: "Is it possible to host LENS on-premise?",
        answer:
          "LENS is not available in on-premise version for the same security reasons.",
      },
      {
        question: "Does LENS comply with our country's data protection laws?",
        answer:
          "Yes LENS is GDPR, IFRS and other major country specific legal and compliance compliant system.",
      },
      {
        question:
          "Is it possible to have LENS data centers located in our country?",
        answer:
          "Yes you can request for the same. Having a regional DB is available in specific plans. Check out the pricing plan for more details",
      },
      {
        question:
          "How will LMNAs handle the migration from our existing ERP to LENS?",
        answer:
          "LMNAs will handle the migration from your existing ERP to LENS using a set of tools and processes. LENS comes equipped with Business Process Analysis, Implementation templates, and Data Migration Packages, which are designed to make the migration process smooth and efficient without disrupting your business operations. These tools will enable LMNAs to speed up the migration process, ensuring a seamless transition to LENS.",
      },
      {
        question: "How are LENS updates carried out?",
        answer:
          "LENS receives periodic updates in three different forms - monthly patch updates, quarterly enhancement upgrades, and yearly new release upgrades. The LENS support team of LMNAs is responsible for carrying out these updates and conducting the necessary testing within the specified frequency. This ensures that LENS is always up-to-date with the latest features and improvements, providing users with an optimal experience.",
      },
    ],}
  };
 