import { TaboutUsPage } from "@/data/types";
import { footerEnData } from "./footerData";
import { navbarEnData } from "./navbarData";


export const aboutUspageENData:TaboutUsPage={
  lang:'en',
   layoutData:{
   footerData:footerEnData,
   navbar:navbarEnData,
     metaData:{
      title:'What is LENS | About LMNAs',
      description:'LENS stands for LMNAs ExperieNce Suite. LMNAs helps in driving end-to-end business transformation through innovative and customized digital solutions to small and medium enterprises',
      pageUrl:'https://lmnas.com/aboutus',
      schemaData:{
        "@context": "http://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://lmnas.com/aboutus",
                "name": "About LMNAs",
                "description": "Learn about LMNAs Cloud Solutions and our innovative digital solutions for small and medium enterprises. Our LMNAs ExperieNce Suite (LENS) drives end-to-end business transformation, helping businesses to integrate, automate, analyze, and grow non-linearly. Discover how LMNAs can help your organization stay ahead of the curve.",
                "author": {
                    "@type": "Organization",
                    "@id": "https://lmnas.com/aboutus",
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
                    "@id": "https://lmnas.com/aboutus",
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
    aboutUsHero:{
      title:{
        text1:'About Us',
        text2:'Welcome to',
        text3:'LMNAs'
      },
      subTitle:{
        text1:'Your go-to solution for digital business transformation! We specialize in providing adaptable and accessible solutions that help growing organizations optimize their operations and achieve their goals.',
        text2:'Our team is dedicated to driving end-to-end business transformation through innovative and customized digital solutions. With years of experience and a deep understanding of the industry, we pride ourselves on delivering high-quality services that meet the unique needs of our clients.',
        text3:'At LMNAs, we believe in staying ahead of the curve and leveraging the latest technologies to help businesses succeed in a constantly evolving marketplace. We work closely with our clients to understand their needs, and our team of experts is committed to delivering personalized solutions that exceed expectations.',
        text4:"Whether you're looking to streamline your operations, enhance your customer experience, or improve your bottom line, LMNAs has the tools, expertise, and experience to help you achieve your goals.Contact us today to learn more about how we can help your business grow and thrive in the digital age.",
      },
      companyValues:[
        {title:'Diversity First',
      subtitle:'LMNAs is committed in creating an inclusive environment, that values and respect individuals from various backgrounds.',
    icon:'WomenFirstIcon',
    iconColor:'text-pink-600',
    ringColor:'border-pink-600'},
    
    {
      title:'Local Talent First',
      subtitle:'We wanted to grow organically. At LMNAs, we prioritize local talent where our office is located.',
      icon:'LocalTalentFirstIcon',
      iconColor:'text-sky-600',
      ringColor:'border-sky-600',
    },
    {
      title:' Environment First',
      subtitle:'We have taken a bold step to shift our offices to remote cities By moving our offices to remote cities, we are not only reducing our carbon footprint but also providing our employees with a healthier work environment.',
      icon:'EnvironmentFirstIcon',
      iconColor:'text-green-600',
      ringColor:'border-green-600',
    }
      ],
    },
    timeLineSection:{
      title:{
        text1:'TIMELINE',
        text2:'Company',
        text3:'Timeline'
      },
      subTitle:{
        text1:'We are Resilient, Consistent and a Company With Strong Ethics.',
        text2:'We are Unstoppable. We have Passed Three Successful Years and Still Counting.'
      },
      timeLines:[
        {
          title: "Company Found",
          content:
            "Former Four SAP Consultants with an Idea to offer edge consulting to the Business People who cannot offord to SAP. LMNAs was Just Incarnated ",
          monthYear: "APR 2021",
          icon: 'ArrowDown',
        },
        {
          title: "LENS Brand Introduced",
          content:
            " We believe in Open Source. An year round research on the best frameworks and tools curated our own ExperieNce Product Suite,the LENS. LENS for Fasion and FMCG Retail rolled out to clients ",
          monthYear: "JUN 2021",
          icon: 'ArrowDown',
        },
        {
          title: "LENS For Manufacturing",
          content:
            "We expanded our footprint from Domestic to Global Clients. LENS for Manufacturing",
          monthYear: "AUG 2021",
          icon: 'ArrowDown',
        },
        {
          title: "LENS For Education",
          content: "Proud to launch a customized CRM for education domain.",
          monthYear: "OCT 2022",
          icon: 'ArrowDown',
        },
        {
          title: "Second Office at Tranquebar",
          content:
            "Next new office opened at our historic city of Tranquebar@Tharangambadi.",
          monthYear: "MAR 2023",
          icon: 'ArrowDown',
        },
      ]
    },
    aboutWhatWeOffer:{
      title:{
        text1:'What We',
        text2:'Offer',
      },
      companyServices:[
        {
          service:'Consultation & Business Process Mining',
          content:'LMNAs offers expert consultation and business process mining services to help businesses optimize operations, identify inefficiencies, and drive growth.',
          icon:'ConsultationIcon',
          iconColor:'text-sky-500',
          ringColor:'border-sky-500',
        },
        {
          service:'Implementation & Customization',
          content:'At LMNAs, we empower businesses to run their operations their way by leveraging the full potential of LENS. Our team of experts is dedicated to providing customized LENS solutions that cater to the unique needs of our clients. Contact us today to learn more.',
          icon:'ImplementationIcon',
          iconColor:'text-green-500',
          ringColor:'border-green-500',
        },
        {
          service:'Maintanance & Support',
          content:'  At LMNAs, we offer 24/7 support to ensure that our clients can stay focused on their business without worrying about disruptions. Our team of functional experts is also available to implement new changes quickly and efficiently. Contact us to experience worry-free support for your business.',
          icon:'MaintananceIcon',
          iconColor:'text-amber-500',
          ringColor:'border-amber-500',
        }
      ]
    },
    aboutUsLocation:{
      title:{
        text1:'Our',
        text2:'Locations',
      },
      locations:[
        {
          area:'Chennai',
          address:'#B202 Radiance Royal, Poonthalmalle, CH-56',
          image:'ChennaiImage',
          cta:{
            text: "Contact Us",
        href: "https://nectar.lmnas.com/contact",
          }
        },
        {
          area:'Tranquebar',
          address:'#3 Kamarajar Salai, Tharangambadi -609313',
          image:'TQBImage',
          cta:{
            text: "Contact Us",
            href: "https://nectar.lmnas.com/contact",
          }
        }
      ]
    }
  }
