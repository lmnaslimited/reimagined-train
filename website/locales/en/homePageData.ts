import { ThomePage } from "@/data/types";
import { footerEnData } from "./footerData";
import { navbarEnData } from "./navbarData";

export const homepageENData: ThomePage = {
  lang:'en',
  layoutData:{
    footerData:footerEnData,
    navbar:navbarEnData,
  metaData:{
      title:'LMNAs Cloud Solutions | Cloud ERP for End-to-End Business Transformation.',
      description:"LENS is a cloud-based ERP solution designed to transform businesses in the manufacturing, retail, distribution, and education industries. With LENS, you can integrate, automate, analyze, and grow non-linearly to succeed in today's competitive landscape. This powerful software will optimize your business processes and drive growth, making it a must-have tool for any organization looking to stay ahead of the curve. Start using LENS today and take your business to new heights!",
      pageUrl:'https://lmnas.com/',
      schemaData:{
        "@context": "http://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://lmnas.com/",
                "name": "LMNAs Cloud Solutions",
      "alternateName": "LMNAs",
      "url": "https://lmnas.com/",
      "logo": "https://lmnas.com/lmnaslogo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919884044470",
        "contactType": "sales",
        "areaServed": ["IN","GB","US","DE","CZ"],
        "availableLanguage": ["en","German"]
      },
                "sameAs": [
                    "https://twitter.com/lmnaslimited",
        "https://www.youtube.com/@lmnascloudsolutions.4549",
        "https://www.linkedin.com/company/lmnaslimited?originalSubdomain=in"
                ],
                "publisher": {
                    "@type": "Organization",
                    "@id": "https://lmnas.com/",
                    "name": "LMNAs",
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
            }
        ]
    }
      },},
    banner:{
      title:{
        text1:'CloudConfluence 2024'
      },
      subtitle:{
        text1:'Unveiling the Future of LMNAs Cloud Excellence',
        text2:'We are Hiring!',
      },
      cta:{
        text:'Apply Now',
        href:'/jobs/#job-openings',
        target:'_blank',
        rel:'noopener noreferrer'
      }
    },
    heroSection: {
      title: {
        text1: "Grow",
        text2: "Non-Linear",
      },
      subTitle: {
        text1: "Maximize Business Growth with LMNAs Cloud ERP",
        text2: "Unlock the Power of Non-Linear Expansion through the LENS.",
      },
      cta1: {
        text: "Get Started",
        href: "/pricing",
      },
      cta2: {
        text: "Contact Us",
        href: "https://nectar.lmnas.com/contact",
        target:'_blank',
        rel:'noopener noreferrer'
      },
    },
    productSection: [
      {
        product: "LENS",
        slug: "lens",
        feature: {
          cardTitle: "LENS",
          subTitle: {
            text1: "LMNAs ExperieNce Suite",
            text2: "By LMNAs",
            text3:
              "Empowering Your Business with the LENS of Cloud ERP Integrate, Automate, Analyze, Succeed.",
          },
          cta1: {
            text: "Get Strated",
            href: "/pricing",
          },
          cta2: {
            text: "Try Now",
            href: "https://demolens.lmnas.com/",
          },
        },
        icon: "LensLogo",
      },
      {
        product: "CRM Cloud",
        slug: "crm-cloud",
        feature: {
          cardTitle: "CRM Cloud",
          cta1: {
            text: "Get Strated",
            href: "/pricing",
          },
          cta2: {
            text: "Try Now",
            href: "https://demolens.lmnas.com/",
          },
          usps: [
            "Personalized Customer Engagement",
            "Scalable and Flexible",
            "Omnichannel Customer Insight",
            "Transparent, Social, Collaborative",
          ],
        },
        icon: "CrmCloudLogo",
      },
      {
        product: "Analytical Cloud",
        slug: "erp&finance-cloud",
        feature: {
          cardTitle: "Analytical Cloud",
          cta1: {
            text: "Get Strated",
            href: "/pricing",
          },
          cta2: {
            text: "Try Now",
            href: "https://demolens.lmnas.com/",
          },
        },
        icon: "AnalyticalCloudLogo",
      },
      {
        product: "HRMS Cloud",
        slug: "hrms-cloud",
        feature: {
          cardTitle: "HRMS Cloud",
          cta1: {
            text: "Get Strated",
            href: "/pricing",
          },
          cta2: {
            text: "Try Now",
            href: "https://demolens.lmnas.com/",
          },
        },
        icon: "HrmsCloudLogo",
      },
      {
        product: "ERP & Finance Cloud",
        slug: "erp&finance-cloud",
        feature: {
          cardTitle: "ERP & Finance Cloud",
          cta1: {
            text: "Get Started",
            href: "/pricing",
          },
          cta2: {
            text: "Try Now",
            href: "https://demolens.lmnas.com/",
          },
          usps: ["Multi Currency", "Multi Lingual", "Realtime Insights","Automated invoicing and payments"],
        },
        icon: "ErpCloudLogo",
      },
      {
        product: "CPQ Cloud",
        slug: "cpq-cloud",
        feature: {
          cardTitle: "CPQ Cloud",
          cta1: {
            text: "Get Started",
            href: "/pricing",
          },
          cta2: {
            text: "Try Now",
            href: "https://demolens.lmnas.com/",
          },
        },
        icon: "CPQLogo",
      },
    ],
    industrySection: {
      title: { text1: "Industry-Specific Cloud ERP", text2: "LENS" },
      subTitle: {
        text1: "Transform Your Business with LENS",
        text2:
          "The Cloud ERP Solution for Manufacturing, Retail, Distribution, and Education Industries.",
      },
      industry: [
        {
          title: "Manufacturing",
          cta1: {
            text: "Get Strated",
            href: "/pricing",
          },
          cta2: {
            text: "Try Now",
            href: "https://demolens.lmnas.com/",
          },
          icon: 'ManufacturingLogo',
        },
        {
          title: "Retail & Distribution",
          cta1: {
            text: "Get Strated",
            href: "/pricing",
          },
          cta2: {
            text: "Try Now",
            href: "https://demolens.lmnas.com/",
          },
          icon: 'RetailDistributionLogo',
        },
        {
          title: "Education",
          cta1: {
            text: "Get Strated",
            href: "/pricing",
          },
          cta2: {
            text: "Try Now",
            href: "https://demolens.lmnas.com/",
          },
          icon: 'EducationLogo',
        },
      ],
    },
    integrateAppsSection: {
      title: { text1: "Connect Your Business", text2: "with", text3: "Top Apps" },
      subTitle: {
        text1: "Streamline Your Business With",
        text2: "LENS Integration",
      },
      paypal: 'PaypalLogo',
      dropbox: 'DropboxLogo',
      razorpay: 'RazorpayLogo',
      slack: 'SlackLogo',
      google: 'GoogleLogo',
      stripe: 'StripeLogo',
      shopify: 'ShopifyLogo',
      exotel: 'ExotelLogo',
      woocommerce: 'WoocommerceLogo',
      plaid: 'PlaidLogo',
      aws: 'AwsLogo',
    },
    testimonialSection: {
      title:{
      text1: "Customer",
      text2: "Success Stories",},
      subtitle:{text1: "How LENS Cloud ERP Transformed Their Business",},
      testimonial: [
        {
          clientName: "Jayamalini Venkatesan",
          designation: "CEO, Mindfresh",
          content:
            " “ Earlier, we were handling all our business requirements with excel. Transformation to LENS has enabled us to use the real power of CRM and moving out of our comfort zone. CRM for education and media institute is unique. We could not get the right expertise from the other vendors to tailor fit our needs. But things changed when we were introduced to LMNAs. Their intention was not to sell LENS but to tell us how LENS can improve our business.” ",
          rating: 'FourStarRating',
          imagehref: "/female-avatar.svg",
        },
        {
          clientName: "Daniel Polasek",
          designation: "Chief Sales, SGB Czech Trafo",
          content:
            "“ Our existing offer management system is good. But enhancing with few new functionalities is way too expensive since the existing technology is old. LENS is flexible. Team LMNAs are quick and precise. We rolled out LENS offer tool to other languages with just few translations. ”",
          rating: 'FourStarRating',
          imagehref: "/avatar-male.svg",
        },
        {
          clientName: "Swamy Chellappan",
          designation: "CEO, BluemapleIT",
          content:
            " “ There are many products in the market for HRMS. We chose LMNAs because of their social values. Their values like minimum 50% women, establishing an office at a remote city and empowering local workforce with a job at their own city impressed us. Nevertheless their knowledge on the technology side can never be under estimated ”",
          rating: 'FourStarRating',
          imagehref: "/avatar-male.svg",
        },
      ],
      clientTitle:{
        text1:'Our Happy',
        text2:'Clients'
      },
      clientLogo: [
        {
          logo: 'SGBIndiaLogo',
          href: "https://www.sgb-smit.com/",
        },
        {
          logo: 'BluemapleITLogo',
          href: "https://bluemapleit.com/",
        },
        {
          logo: 'MindfreshLogo',
          href: "https://www.mindfresh.in/",
        },
        {
          logo: 'SGBCzexhTrafoLogo',
          href: "https://www.sgb-smit.com/sgb-smit-group/locations/czech-republic-slavonin-sgb-czech-trafo",
        },
      ],
    },
    startTrialSection: {
      title:{
      text1: "Try LENS for Free:",
      text2: "Tailored Cloud ERP Trials Without the Hassle ",},
      subTitle:{
        text1:"Experience LENS Customizable Cloud ERP Solution Without Commitment or Credit Cards",},
      cta: {
        text: "Start a free trial",
        href: "/pricing",
      },
    },
  };
