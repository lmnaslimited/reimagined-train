import { TproductPage } from "@/data/types";
import { footerEnData } from "./footerData";
import { navbarEnData } from "./navbarData";

export const productHrmsEnPage: TproductPage = {
  slug: "hrms-cloud",
  lang: "en",

  productPageDetail: {
    layoutData: {
      footerData: footerEnData,
      navbar: navbarEnData,
      metaData: {
        title: "LMNAs Cloud Solutions | HRMS Cloud",
        description:
          "Empower Your Workforce, and Drive Organizational Success with LENS HRMS Cloud.",
        pageUrl: "https://lmnas.com/products/hrms-cloud",
        schemaData: {
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: "LMNAs Cloud Solutions | HRMS Cloud",
          description:
            "Empower Your Workforce, and Drive Organizational Success with LENS HRMS Cloud.",
          image: "https://lmnas.com/lmnaslogo.png",
          url: "https://lmnas.com/products/hrms-cloud",
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
        text1: "HRMS",
        text2: "Cloud"
      },
      subTitle: {
        text1:
          "Empower Your Workforce, and Drive Organizational Success with LENS HRMS Cloud."
      },
      cta1: {
        text: "Get Started",
        href: "/pricing"
      },
      cta2: {
        text: "Contact Us",
        href: "https://nectar.lmnas.com/contact"
      }
    },
    productTabs: [
      {
        tabName: "Overview",
        icon: "OverviewIcon",
        tabBody: {
          content: {
            title: {
              text1: "Streamline Your Workforce from",
              text2: "Hire to Retire"
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
                icon: "HumanPlus",
                featureName: "Recruitment and Onboarding"
              },
              {
                icon: "ClockIcon",
                featureName: "Shift and Timesheet"
              },
              {
                icon: "TruckIcon",
                featureName: "Travel and Expense"
              },
              {
                icon: "BookIcon",
                featureName: "LMS"
              },
              {
                icon: "ThumbsUpIcon",
                featureName: "Performance"
              },
              {
                icon: "DollarIcon",
                featureName: "Payroll"
              },
              {
                icon: "LinkIcon",
                featureName: "Integration"
              }
            ],
            usps: [
              {
                icon: "SparklesIcon",
                title: "Intelligent Workforce Management",
                content:
                  "Leverage AI-driven tools for optimized resource allocation, talent acquisition, and performance management."
              },
              {
                icon: "SparklesIcon",
                title: "Engagement & Empowerment",
                content:
                  " Foster a culture of growth and collaboration with personalized employee experiences and self-service capabilities."
              },
              {
                icon: "SparklesIcon",
                title: "Strategic HR Decision-Making",
                content:
                  "Gain deep insights into HR data, enabling data-driven decision-making for organizational effectiveness and success"
              }
            ],
            title2: {
              text1: "Transforming Human Resource Management in the",
              text2: "Digital Era"
            },
            featureDetails: {
              featureCardBig: [
                {
                  cardTitle: "Payroll",
                  usps: {
                    text1: "Income tax slabs,",
                    highlightedText1: "Inocome tax declarations and Deduction,",
                    highlightedText2: "Employee incentives and bonus,",
                    text2: "Payroll entry and Salary slips,",
                    text3: "Employee loan management."
                  },
                  icon: "PayrollFeatureDollarIcon",
                  cta1: {
                    text: "Get Started",
                    href: "/pricing"
                  },
                  cta2: {
                    text: "Try Now",
                    href: "https://demolens.lmnas.com/"
                  },
                  ctaPosition: "lg:flex-row"
                },
                {
                  cardTitle: "Recruitment and onboarding",
                  usps: {
                    text1: "Recruitment Marketing,",
                    highlightedText1: "Job portal, Staffing plan,",
                    highlightedText2: "Offer, Onboarding,",
                    text2: "Interview and schedules,",
                    text3: "Employee promotion."
                  },
                  icon: "RecruitmentandOnboardingFeatureIcon",
                  cta1: {
                    text: "Get Started",
                    href: "/pricing"
                  },
                  cta2: {
                    text: "Try Now",
                    href: "https://demolens.lmnas.com/"
                  },
                  ctaPosition: "reverse"
                }
              ],
              featureCardsSmall: [
                {
                  cardTitle: "Shift and Timesheet",
                  usps: {
                    text1: "Holiday calendar,",
                    text2: "Timesheet,",
                    text3: "Leave policy, Leave encatchment.",
                    highlightedText1: "Shift roaster,",
                    highlightedText2: "Attendance,"
                  },
                  icon: "ShiftandTimesheetFeatureIcon"
                },
                {
                  cardTitle: "Travel and Expense",
                  usps: {
                    text1: "Employee advance, Additional salary,",
                    text2: "Fleet management",
                    highlightedText1: "Travel and accomodation,",
                    highlightedText2:
                      "Expense claims, Approvals and Settlements."
                  },
                  icon: "TravelandExpenseFeatureIcon"
                },
                {
                  cardTitle: "Integration",
                  usps: {
                    text1: "External payroll integration.",
                    highlightedText1: "External banks and payment integrations"
                  },
                  icon: "",
                  integrationUsps1: "Attendance and Timesheet integration.",
                  integrationUsps2: "External accounting integrations."
                },
                {
                  cardTitle: "LMS",
                  usps: {
                    text1: "LMS portal,",
                    text2: "Quiz and evaluation,",
                    highlightedText1: "Public enrollments,",
                    highlightedText2: "Grading and Certification."
                  },
                  icon: "LmsFeatureIcon"
                },
                {
                  cardTitle: "Performance",
                  usps: {
                    text1: "Energy point rule,",
                    text2: "Performance linked promotion.",
                    highlightedText1: "Goals and objectives,",
                    highlightedText2: "Appraisal key resource area,"
                  },
                  icon: "PerformanceFeatureIcon"
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
      }
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
