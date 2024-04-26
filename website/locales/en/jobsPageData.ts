import { TjobsPage } from "@/data/types";
import { footerEnData } from "./footerData";
import { navbarEnData } from "./navbarData";

export const jobsPageENData: TjobsPage = {
  lang: "en",
  layoutData: {
    footerData: footerEnData,
    navbar: navbarEnData,
    metaData: {
      title:
        "Thrive Exponentially | Empower Your Career at LMNAs Cloud Solutions",
      description:
        "Join LMNAs Cloud Solutions, where innovation thrives and opportunities abound. Elevate your expertise in a dynamic, collaborative environment, shaping the future of cloud technology.",
      pageUrl: "https://lmnas.com/jobs",
      schemaData: {
        "@context": "http://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://lmnas.com/jobs",
            name: "LMNAs Cloud Solutions",
            alternateName: "LMNAs",
            url: "https://lmnas.com/jobs",
            logo: "https://lmnas.com/lmnaslogo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+919884044470",
              contactType: "sales",
              areaServed: ["IN", "GB", "US", "DE", "CZ"],
              availableLanguage: ["en", "German"]
            },
            sameAs: [
              "https://twitter.com/lmnaslimited",
              "https://www.youtube.com/@lmnascloudsolutions.4549",
              "https://www.linkedin.com/company/lmnaslimited?originalSubdomain=in"
            ],
            publisher: {
              "@type": "Organization",
              "@id": "https://lmnas.com/jobs",
              name: "LMNAs",
              sameAs: [
                "https://twitter.com/lmnaslimited",
                "https://www.youtube.com/@lmnascloudsolutions.4549",
                "https://www.linkedin.com/company/lmnaslimited?originalSubdomain=in"
              ],
              logo: {
                "@type": "ImageObject",
                url: "https://lmnas.com/lmnaslogo.png",
                width: "1000",
                height: "1000"
              }
            }
          }
        ]
      }
    }
  },
  heroSection: {
    title: {
      text1: "Ignite",
      text2: "Your Journey"
    },
    subTitle: {
      text1:
        "Discover limitless opportunities in the dynamic world of LMNAs Cloud Solutions.",
      text2:
        " Join us and shape the future of innovation, one career at a time."
    },
    cta1: {
      text: "View Openings",
      href: "/jobs/#job-openings"
    },
    cta2: {
      text: "Life at LMNAs",
      href: "/jobs/#lifeatlmnas",
      target: "_self",
      rel: "noopener noreferrer"
    }
  },
  statsSection:[
    {
      data: "₹1.15M",
      title: "Invested on Training and Continuing"
    },
    {
      data: "8+",
      title: "Career pathways"
    },
    {
      data: "1000+",
      title: "Hackathons to Choose"
    }
  ],
  jobsSection: {
    title: {
      text1: "Explore",
      text2: "Opportunities"
    },
    subTitle: {
      text1:
        "Become a vital member of our team, contributing to the shaping of tomorrow.",
      text2:
        "Uncover thrilling career opportunities within LMNAs Cloud Solutions"
    },
    cards: [
      {
        jobProfile: "Engineering Graduate Trainee - 2024",
        cta: {
          text: "Apply Now",
          href: "https://nectar.lmnas.com/engineering-graduate-trainee-2024",
          target: "_self",
          rel: "noopener noreferrer"
        },
        tag:'Application Filling Fast',
        category: "Trainee",
        validity: "Location: Tranquebar & Tirunelveli",
        requirements: [
          "B.E/B.Tech 2024 Batch",
          "Excellent written and verbal communication skills.",
          "Superb problem-solving and analytical abilities."
        ]
      },
      {
        jobProfile: "ERP Business Analyst",
        cta: {
          text: "Apply Now",
          href: "https://nectar.lmnas.com/erp-business-analyst",
          target: "_self",
          rel: "noopener noreferrer"
        },
        tag:'',
        category: "Analyst",
        validity: "",
        requirements: [
          "Any ERP certification preferred",
          "A minimum of 2 years experience as an ERP business analyst",
          "In-depth knowledge of the latest advancements in ERP application",
          
        ]
      },
      {
        jobProfile: "Junior Accountant",
        cta: {
          text: "Apply Now",
          href: "https://nectar.lmnas.com/accountant",
          target: "_self",
          rel: "noopener noreferrer"
        },
        tag:'',
        category: "Finance",
        validity: "",
        requirements: [
          "Bachelor's degree in Finance ,Accounting and Commerce",
          "Freshers or minimum 0-2 years experience",
          "Ability to track, categorise, and manage various types of expenses",
          
        ]
      },
      {
        jobProfile: "Marketing Head",
        cta: {
          text: "Apply Now",
          href: "https://nectar.lmnas.com/marketing-strategist",
          target: "_self",
          rel: "noopener noreferrer"
        },
        tag:'',
        category: "Strategist",
        validity: "",
        requirements: [
          "Work experience as a Marketing strategist or Marketing manager",
          "Design thinking and how it is used in marketing",
          "In-depth knowledge of CRM",
          
        ]
      },
    ]
  },
  whyLMNAs: {
    title: {
      text1: "Employee",
      text2: "Wellbeing Hub"
    },
    subTitle: {
      text1:
        "Enjoy a Spectrum of Benefits: Nurturing Careers, Enhancing Lives.",
      text2:
        "LMNAs Cloud Solutions is committed to your holistic growth and happiness."
    },
    featuresBenefit: [
      {
        title:'Eco-Friendly Commutes',
        content:'LMNAs Cloud Solutions promotes sustainable living by offering travel allowances for employees who choose public transport. Join us in reducing our carbon footprint and contributing to a greener tomorrow.',
        icon:'GlobeIcon',
      },
      {
        title:'Collaborative Culture',
        content:'Dive into a workplace where collaboration is key. From open workspaces to cross-functional projects, at LMNAs Cloud Solutions, teamwork defines our vibrant culture.',
        icon:'SocialCollaborationIcon'
      },
      {
        title:'Professional Growth Oasis',
        content:'Nurture your career with LMNAs. Our commitment to your success goes beyond daily tasks, offering continuous learning and development opportunities for your professional growth. Join us and thrive!',
        icon:'QualityIcon'
      }
    ]
  },
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
        href: "https://goo.gl/maps/a4t4ghmEA1as8vLT9"
      },
      {
        icon: "PhoneIcon",
        contact: "+91 98840 44470",
        title: "Phone",
        href: "tel:+91 98840 44470"
      },
      {
        icon: "MailIcon",
        contact: "hello@lmnas.com",
        title: "Email",
        href: "mailto:hello@lmnas.com"
      }
    ]
  }
};
