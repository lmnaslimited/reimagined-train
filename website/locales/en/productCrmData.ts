import { TproductPage } from "@/data/types";
import { footerEnData } from "./footerData";
import { navbarEnData } from "./navbarData";

export const productCrmEnPage: TproductPage = {
  slug: "crm-cloud",
  lang: "en",
  productPageDetail: {
    layoutData: {
      footerData: footerEnData,
      navbar: navbarEnData,
      metaData: {
        title: "LMNAs Cloud Solutions | CRM-Cloud",
        description:
          "Build Stronger Customer Relationships, stay Connected, Collaborate Efficiently, and Drive Business Success",
        pageUrl: "https://lmnas.com/products/crm-cloud",
        schemaData: {
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: "LMNAs Cloud Solutions | CRM-Cloud",
          description:
            "Build Stronger Customer Relationships, stay Connected, Collaborate Efficiently, and Drive Business Success",
          image: "https://lmnas.com/lmnaslogo.png",
          url: "https://lmnas.com/products/crm-cloud",
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
        text1: "CRM",
        text2: "Cloud"
      },
      subTitle: {
        text1:
          "Build Stronger Customer Relationships, stay Connected, Collaborate Efficiently, and Drive Business Success"
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
              text1: "Convert Every Customer Interaction into",
              text2: "Profitable Opportunities"
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
                icon: "FunnelIcon",
                featureName: "Sales Funnel"
              },
              {
                icon: "MarketingIcon",
                featureName: "Marketing"
              },
              {
                icon: "MicrophoneIcon",
                featureName: "Service"
              },
              {
                icon: "LinkIcon",
                featureName: "Omni Channel Integration"
              },
              {
                icon: "SocialCollaborationIcon",
                featureName: "Social Collaboration"
              }
            ],
            usps: [
              {
                icon: "SparklesIcon",
                title: "AI-powered Insights",
                content:
                  "Harness the power of artificial intelligence for predictive analytics and actionable customer insights."
              },
              {
                icon: "SparklesIcon",
                title: "Seamless Omni-channel Experience",
                content:
                  "Deliver consistent customer experiences across multiple channels, fostering engagement and loyalty."
              },
              {
                icon: "SparklesIcon",
                title: "Advanced Automation",
                content:
                  "Automate routine tasks, streamline workflows, and optimize efficiency, empowering your teams to focus on strategic initiatives."
              }
            ],
            title2: {
              text1: "Empowering Your",
              text2: "Customer Relationship Management"
            },
            featureDetails: {
              featureCardBig: [
                {
                  cardTitle: "Service",
                  usps: {
                    text1: "Helpdesk,",
                    highlightedText1: "Knowledge base, Warranty,",
                    highlightedText2: "Maintanance,",
                    text2: "Automation,",
                    text3: "Service level agreement."
                  },
                  icon: "ServiceFeatureIcon",
                  cta1: {
                    text: "Get Started",
                    href: "/pricing"
                  },
                  cta2: {
                    text: "Try Now",
                    href: "https://demolens.lmnas.com/"
                  },
                  ctaPosition: "lg:flex-row"
                }
              ],
              featureCardsSmall: [
                {
                  cardTitle: "Sales Funnel",
                  usps: {
                    text1: "Lead,",
                    text2: "Oppurtunity,",
                    text3: "Order management.",
                    highlightedText1: " Prospect,",
                    highlightedText2: "Quotation,"
                  },
                  icon: "SalesFunnelFeatureIcon"
                },
                {
                  cardTitle: "Marketing",
                  usps: {
                    text1: "Campaigns,",
                    text2: "Social Marketing,",
                    text3: "Newsletters and Email.",
                    highlightedText1: "SMS,",
                    highlightedText2: " Lead tracking,"
                  },
                  icon: "MarketingFeatureIcon"
                },
                {
                  cardTitle: "Omni Channel Integration",
                  usps: {
                    text1: "Email Integration,",
                    highlightedText1: "Telephony integration."
                  },
                  icon: "",
                  integrationUsps1: "SMS integration.",
                  integrationUsps2: "Lead integration."
                },
                {
                  cardTitle: "Social collabration",
                  usps: {
                    text1: "Contacts,",
                    text2: "Appointments and Events,",
                    highlightedText1: "Activities and Task,",
                    highlightedText2: " Assign, Tag, Like, Share, Comment."
                  },
                  icon: "SocialCollaborationFeatureIcon"
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
