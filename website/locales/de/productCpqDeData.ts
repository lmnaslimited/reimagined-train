import { TproductPage } from "@/data/types";
import { footerDEData } from "./footerDataDeData";
import { navbarDEData } from "./navbarDeData";

export const productCpqDePage: TproductPage = {
  slug: "cpq-cloud",
  lang: "de",
  productPageDetail: {
    layoutData: {
      footerData: footerDEData,
      navbar: navbarDEData,
      metaData: {
        title: "LMNAs Cloud-Lösungen | CPQ-Cloud",
        description:
          "Ein LENS CPQ macht es einfach, jede mögliche Konfiguration, Grundkosten, Arbeitskosten, verschiedene standortspezifische Transportkosten, Rabatte und Szenarien anzugeben, um den Angebotserstellungsprozess schnell und einfach zu gestalten.",
        pageUrl: "https://lmnas.com/products/cpq-cloud",
        schemaData: {
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: "LMNAs Cloud-Lösungen | CPQ-Cloud",
          description:
            "Ein LENS CPQ macht es einfach, jede mögliche Konfiguration, Grundkosten, Arbeitskosten, verschiedene standortspezifische Transportkosten, Rabatte und Szenarien anzugeben, um den Angebotserstellungsprozess schnell und einfach zu gestalten.",
          image: "https://lmnas.com/lmnaslogo.png",
          url: "https://lmnas.com/products/cpq-cloud",
          author: {
            "@type": "Person",
            name: "LMNAs"
          },
          publisher: {
            "@type": "Organization",
            name: "LMNAs Cloud-Lösungen"
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
        text2: "Cloud"
      },
      subTitle: {
        text1:
          "Vereinfachen Sie das Angebot mit unserem vielseitigen Tool und stellen Sie fehlerfreie Vorschläge für anpassbare Produkte und Dienstleistungen sicher"
      },
      cta1: {
        text: "Loslegen",
        href: "/preisgestaltung"
      },
      cta2: {
        text: "Kontaktiere uns",
        href: "https://nectar.lmnas.com/kontakt"
      }
    },
    productTabs: [
      {
        tabName: "Überblick",
        icon: "OverviewIcon",
        tabBody: {
          content: {
            title: {
              text1: "Optimierte Prozesse und",
              text2: "Individuelle Lösungen"
            },
            banner: {
              text: "Sonderangebot: Jetzt abonnieren und 40% auf Ihr Benutzerabonnement sparen",
              cta: {
                text: "Loslegen",
                href: "/preisgestaltung"
              }
            },
            features: [
              {
                icon: "ThumbsUpIcon",
                featureName: "Margenschutz"
              },
              {
                icon: "LinkIcon",
                featureName: "Nahtlose Konnektivität"
              },
              {
                icon: "AssetsIcon",
                featureName: "Maßgeschneiderte Konfiguration"
              }
            ],
            usps: [
              {
                icon: "SparklesIcon",
                title: "Verbesserte Vertriebseffizienz",
                content:
                  "Steigern Sie den Umsatz über mehrere Kanäle mit fehlerfreien Bestellungen und blitzschneller Angebotserstellung, maßgeschneidert für kunden- und kanalspezifische Preisgestaltung."
              },
              {
                icon: "SparklesIcon",
                title: "Optimierte Betriebsleistung",
                content:
                  "Maximieren Sie die Effizienz durch integrierte Vertriebsprozesse, beschleunigen Sie die Angebotsstellung, vereinfachen Sie Genehmigungen und verkürzen Sie Verkaufszyklen."
              },
              {
                icon: "SparklesIcon",
                title: "Strategische Geschäftseinblicke",
                content:
                  "Schalten Sie handlungsfähige Erkenntnisse frei, um das Umsatzwachstum voranzutreiben, Leads und Chancen zu nutzen und Preisstrategien zu optimieren, während Margen geschützt werden."
              }
            ],
            title2: {
              text1: " Verkaufseffizienz und Rentabilität",
              text2: "stärken"
            },
            featureDetails: {
              featureCardBig: [],
              featureCardsSmall: [
                {
                  cardTitle: "Margenschutz",
                  usps: {
                    text1: "Umfassende Preiskontrollen",
                    text2: "Intelligente Angebotsvorschläge,",
                    highlightedText1: "Verhinderung von Rogue-Rabatten,"
                  },
                  icon: "MarginFeatureIcon"
                },
                {
                  cardTitle: "Nahtlose Konnektivität",
                  usps: {
                    text1:
                      "Verbesserte Skalierbarkeit und Anpassungsfähigkeit,",
                    highlightedText1: "Effiziente Betriebsintegration."
                  },
                  icon: "",
                  integrationUsps1: "Optimierte Angebotsprozesse,",
                  integrationUsps2: "Leverage von ERP-Daten."
                },
                {
                  cardTitle: "Maßgeschneiderte Konfiguration",
                  usps: {
                    text1: "Einhaltung von Richtlinien,",
                    text2: "Handhabung von Komplexität optimiert",
                    highlightedText1: "Schnelle & fehlerfreie Angebote,"
                  },
                  icon: "AssetsFeatureIcon"
                }
              ]
            }
          }
        },
        cta1: {
          href: "/preisgestaltung",
          text: "Loslegen"
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
        "Wir sind hier, um zu helfen und alle Fragen zu beantworten, die Sie haben könnten. Wir freuen uns auf Ihre Nachricht.",
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
        "Bleiben Sie auf dem Laufenden mit dem Fortschritt des Roadmaps, Ankündigungen und exklusive Rabatte fühlen Sie sich frei, sich mit Ihrer E-Mail anzumelden.",
      inputField: "Geben Sie Ihre E-Mail-Adresse ein",
      inputPromo: "Produktupdates, Ankündigungen und Rabatte. Lesen Sie unsere",
      cta1: { text: "Abonnieren", href: "/" },
      cta2: { text: "Datenschutzrichtlinie", href: "/datenschutzrichtlinie" }
    }
  }
};
