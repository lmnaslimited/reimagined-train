import { TproductPage } from "@/data/types";
import { footerDEData } from "./footerDataDeData";
import { navbarDEData } from "./navbarDeData";

export const productCrmDePage: TproductPage = {
  slug: "crm-cloud",
  lang: "de",
  productPageDetail: {
    layoutData: {
      footerData: footerDEData,
      navbar: navbarDEData,
      metaData: {
        title: "LMNAs Cloud Solutions | CRM-Cloud",
        description:
          "Aufbau stärkerer Kundenbeziehungen, bleiben Sie verbunden, arbeiten Sie effizient zusammen und treiben Sie den Geschäftserfolg voran.",
        pageUrl: "https://lmnas.com/de/products/crm-cloud",
        schemaData: {
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: "LMNAs Cloud Solutions | CRM-Cloud",
          description:
            "Aufbau stärkerer Kundenbeziehungen, bleiben Sie verbunden, arbeiten Sie effizient zusammen und treiben Sie den Geschäftserfolg voran.",
          image: "https://lmnas.com/lmnaslogo.png",
          url: "https://lmnas.com/de/products/crm-cloud",
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
            "@id": "https://lmnas.com/de/products/crm-cloud"
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
          "Aufbau stärkerer Kundenbeziehungen, bleiben Sie verbunden, arbeiten Sie effizient zusammen und treiben Sie den Geschäftserfolg voran."
      },
      cta1: {
        text: "Jetzt loslegen",
        href: "/pricing"
      },
      cta2: {
        text: "Kontaktieren uns",
        href: "https://nectar.lmnas.com/contact"
      }
    },
    productTabs: [
      {
        tabName: "Übersicht",
        icon: "OverviewIcon",
        tabBody: {
          content: {
            title: {
              text1: "Verwandeln Sie jede Kundeninteraktion in",
              text2: "profitable Chancen"
            },
            banner: {
              text: "Zeitlich begrenztes Angebot: Abonnieren Sie jetzt und sparen Sie 40% auf Ihr Benutzerabonnement.",
              cta: {
                text: "Jetzt loslegen",
                href: "/pricing"
              }
            },
            features: [
              {
                icon: "FunnelIcon",
                featureName: "Vertriebstrichter"
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
                featureName: "Omni-Channel-Integration"
              },
              {
                icon: "SocialCollaborationIcon",
                featureName: "Soziale Zusammenarbeit"
              }
            ],
            usps: [
              {
                icon: "SparklesIcon",
                title: "KI-gesteuerte Erkenntnisse",
                content:
                  "Nutzen Sie die Kraft der künstlichen Intelligenz für prädiktive Analysen und handlungsorientierte Kundeninformationen."
              },
              {
                icon: "SparklesIcon",
                title: "Nahtloses Omni-Channel-Erlebnis",
                content:
                  "Bieten Sie konsistente Kundenerlebnisse über mehrere Kanäle hinweg, um Engagement und Kundenbindung zu fördern."
              },
              {
                icon: "SparklesIcon",
                title: "Erweiterte Automatisierung",
                content:
                  "Automatisieren Sie Routineaufgaben, optimieren Sie Workflows und steigern Sie die Effizienz, damit Ihre Teams sich auf strategische Initiativen konzentrieren können."
              }
            ],
            title2: {
              text1: "Stärkung Ihres",
              text2: "Kundenbeziehungsmanagements"
            },
            featureDetails: {
              featureCardBig: [
                {
                  cardTitle: "Service",
                  usps: {
                    text1: "Helpdesk,",
                    highlightedText1: "Wissensdatenbank, Garantie,",
                    highlightedText2: "Wartung,",
                    text2: "Automatisierung,",
                    text3: "Service-Level-Vereinbarung."
                  },
                  icon: "ServiceFeatureIcon",
                  cta1: {
                    text: "Jetzt loslegen",
                    href: "/pricing"
                  },
                  cta2: {
                    text: "Jetzt ausprobieren",
                    href: "https://demolens.lmnas.com/"
                  },
                  ctaPosition: "lg:flex-row"
                }
              ],
              featureCardsSmall: [
                {
                  cardTitle: "Vertriebstrichter",
                  usps: {
                    text1: "Lead,",
                    text2: "Chance,",
                    text3: "Auftragsmanagement.",
                    highlightedText1: "Interessent,",
                    highlightedText2: "Angebot,"
                  },
                  icon: "SalesFunnelFeatureIcon"
                },
                {
                  cardTitle: "Marketing",
                  usps: {
                    text1: "Kampagnen,",
                    text2: "Social Marketing,",
                    text3: "Newsletter und E-Mail.",
                    highlightedText1: "SMS,",
                    highlightedText2: "Lead-Tracking"
                  },
                  icon: "MarketingFeatureIcon"
                },
                {
                  cardTitle: "Omni-Channel-Integration",
                  usps: {
                    text1: "E-Mail-Integration,",
                    highlightedText1: "Telefonie-Integration."
                  },
                  icon: "",
                  integrationUsps1: "SMS-Integration.",
                  integrationUsps2: "Lead-Integration."
                },
                {
                  cardTitle: "Soziale Zusammenarbeit",
                  usps: {
                    text1: "Kontakte,",
                    text2: "Termine und Veranstaltungen,",
                    highlightedText1: "Aktivitäten und Aufgaben,",
                    highlightedText2:
                      "Zuweisen, Taggen, Liken, Teilen, Kommentieren."
                  },
                  icon: "SocialCollaborationFeatureIcon"
                }
              ]
            }
          }
        },
        cta1: {
          href: "/pricing",
          text: "Jetzt loslegen"
        },
        cta2: {
          href: "https://demolens.lmnas.com/",
          text: "Jetzt ausprobieren"
        }
      }
    ],
    contactSection: {
      tag: "Kontakt",
      title: "Lassen Sie uns wissen, wie wir helfen können",
      subTitle:
        "Wir sind hier, um zu helfen und Ihre Fragen zu beantworten. Wir freuen uns darauf, von Ihnen zu hören.",
      contactMenthos: [
        {
          icon: "LocationIcon",
          contact: "#B202, Radiance Royal, Poonthalmalle,CH-56.",
          title: "Unser Büro",
          href: "https://goo.gl/maps/a4t4ghmEA1as8vLT9"
        },
        {
          icon: "PhoneIcon",
          contact: "+91 98840 44470",
          title: "Telefon",
          href: "tel:+91 98840 44470"
        },
        {
          icon: "MailIcon",
          contact: "hello@lmnas.com",
          title: "E-Mail",
          href: "mailto:hello@lmnas.com"
        }
      ]
    },
    subscribeSection: {
      title: "Abonnieren Sie unseren Newsletter",
      subTitle:
        "Bleiben Sie über den Fortschritt der Roadmap, Ankündigungen und exklusive Rabatte auf dem Laufenden. Melden Sie sich gerne mit Ihrer E-Mail-Adresse an.",
      inputField: "Geben Sie Ihre E-Mail-Adresse ein",
      inputPromo: "Produktupdates, Ankündigungen und Rabatte. Lesen Sie unsere",
      cta1: { text: "Abonnieren", href: "/" },
      cta2: { text: "Datenschutzrichtlinie", href: "/privacy-policy" }
    }
  }
};
