import { TproductPage } from "@/data/types";
import { footerDEData } from "./footerDataDeData";
import { navbarDEData } from "./navbarDeData";

export const productErpDePage: TproductPage = {
  slug: "erp&finance-cloud",
  lang: "de",
  productPageDetail: {
    layoutData: {
      footerData: footerDEData,
      navbar: navbarDEData,
      metaData: {
        title: "LMNAs Cloud Solutions | ERP & Finance Cloud",
        description:
        "Leistungsstarke Lösungen für effiziente Betriebsabläufe und Finanzmanagement. Optimieren Sie Ihre Abläufe, treiben Sie das Wachstum voran und erreichen Sie finanziellen Erfolg.",
        pageUrl: "https://lmnas.com/de/products/erp&finance-cloud",
        schemaData: {
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: "LMNAs Cloud Solutions | ERP & Finance Cloud",
          description:
          "Leistungsstarke Lösungen für effiziente Betriebsabläufe und Finanzmanagement. Optimieren Sie Ihre Abläufe, treiben Sie das Wachstum voran und erreichen Sie finanziellen Erfolg.",
          image: "https://lmnas.com/lmnaslogo.png",
          url: "https://lmnas.com/de/products/erp&finance-cloud",
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
            "@id": "https://lmnas.com/de/products/erp&finance-cloud"
          }
        }
      }
    },
    productHero: {
      title: {
        text1: "ERP & Finanzen",
        text2: "Cloud"
      },
      subTitle: {
        text1:
          "Leistungsstarke Lösungen für effiziente Betriebsabläufe und Finanzmanagement. Optimieren Sie Ihre Abläufe, treiben Sie das Wachstum voran und erreichen Sie finanziellen Erfolg."
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
              text1: "All-in-One Business Management",
              text2: "stärken"
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
                icon: "LinkIcon",
                featureName: "Integrationen"
              },
              {
                icon: "AccountingIcon",
                featureName: "Buchhaltung"
              },
              {
                icon: "TruckIcon",
                featureName: "Lieferkette"
              },
              {
                icon: "ProjectsIcon",
                featureName: "Projekte"
              },
              {
                icon: "QualityIcon",
                featureName: "Qualität"
              },
              {
                icon: "StocksIcon",
                featureName: "Bestände"
              },
              {
                icon: "AssetsIcon",
                featureName: "Anlagen"
              }
            ],
            usps: [
              {
                icon: "SparklesIcon",
                title: "Zukunftsweisende Technologie",
                content:
                  "LENS ERP nutzt modernste Technologie, um Prozesse zu automatisieren, die Effizienz zu steigern und die Entscheidungsfindung zu optimieren, um einen Geschäftswandel zu ermöglichen."
              },
              {
                icon: "SparklesIcon",
                title: "Automatisierte Workflows",
                content:
                  "Automatisierte Dateneingabe und Finanzabgleiche ermöglichen es LENS ERP, Routineaufgaben zu automatisieren und die Produktivität der Mitarbeiter zu steigern."
              },
              {
                icon: "SparklesIcon",
                title: "Echtzeit-Einblicke",
                content:
                  "Sofortiger Zugriff auf genaue Finanzdaten, Echtzeit-Dashboards und Analysen ermöglichen es Unternehmen, schnelle und fundierte Entscheidungen zu treffen."
              }
            ],
            title2: {
              text1: "LENS ERP & Finanz Cloud:",
              text2: "Energie für Ihre Geschäftsabläufe"
            },
            featureDetails: {
              featureCardBig: [
                {
                  cardTitle: "Lieferkette",
                  usps: {
                    text1:
                      "Kunden- und Lieferantenportal, automatische Bestandsauffüllung,",
                    highlightedText1:
                      "Automatisierte Rechnungsstellung und Zahlungen,",
                    highlightedText2:
                      "Artikelvarianten, Garantie-Serialnummern und Chargenverwaltung,",
                    text2:
                      "Mehrere Währungen und Sprachen, Promotionsverwaltung, Prognose und Planung,",
                    text3: "Omni-Channel-Vertrieb und -Einkauf."
                  },
                  icon: "SupplyChainFeatureIcon",
                  cta1: {
                    text: "Jetzt loslegen",
                    href: "/pricing"
                  },
                  cta2: {
                    text: "Jetzt ausprobieren",
                    href: "https://demolens.lmnas.com/"
                  },
                  ctaPosition: "lg:flex-row"
                },
                {
                  cardTitle: "Bestände",
                  usps: {
                    text1: "Automatische Bestandsauffüllung, Artikelvarianten,",
                    highlightedText1: "Serial- und Chargenverwaltung,",
                    highlightedText2: "Bestandsbuchhaltung und -kontrolle,",
                    text2:
                      "Integriertes Qualitätsmanagement, Analyse der Bestandsalterung,",
                    text3:
                      "Permanentes Bestandsmanagement, Verwaltung der Lagerstruktur, mehrere Mengeneinheiten."
                  },
                  icon: "StocksFeatureIcon",
                  cta1: {
                    text: "Jetzt loslegen",
                    href: "/pricing"
                  },
                  cta2: {
                    text: "Jetzt ausprobieren",
                    href: "https://demolens.lmnas.com/"
                  },
                  ctaPosition: "reverse"
                }
              ],
              featureCardsSmall: [
                {
                  cardTitle: "Qualität",
                  usps: {
                    text1: "Qualitätsziele,",
                    text2: "Qualitätsprüfungen bei Einkauf und Verkauf,",
                    text3: "Messung und kontinuierliche Verbesserung",
                    highlightedText1: "Qualitätsverfahren,",
                    highlightedText2: "Überprüfung und Maßnahmen"
                  },
                  icon: "QualityFeatureIcon"
                },
                {
                  cardTitle: "Projekte",
                  usps: {
                    text1: "Budgets und Kontrolle,",
                    text2:
                      "Zeiterfassung und Abrechnung, Zugang zum Kundenportal,",
                    text3: "Echtzeit-Tracking",
                    highlightedText1: "Rentabilitätsanalyse,",
                    highlightedText2: "Agile & Kanban Hybrid"
                  },
                  icon: "ProjectsFeatureIcon"
                },
                {
                  cardTitle: "Integration",
                  usps: {
                    text1: "Omni-Channel-Vertrieb und -Einkauf,",
                    highlightedText1: "Webhook-Integrationen."
                  },
                  icon: "",
                  integrationUsps1: "Integration mit offener API.",
                  integrationUsps2: "Integration Ihrer bevorzugten Apps."
                },
                {
                  cardTitle: "Buchhaltung",
                  usps: {
                    text1: "Kontenrahmen,",
                    text2: "Abonnementverwaltung, ",
                    text3: "IFRS-konforme Berichte, Preisfindungsmodul",
                    highlightedText1: "Finanzkontrolle,",
                    highlightedText2: "Mehrere Währungen"
                  },
                  icon: "AccountingFeatureIcon"
                },
                {
                  cardTitle: "Anlagen",
                  usps: {
                    text1: "Anlagen-Abschreibungsbuch,",
                    text2: "Anlagenwartung, Anlagenreparatur,",
                    text3: "Anlagenverfolgen.",
                    highlightedText1: "Installationsbasis,",
                    highlightedText2: "Anlagen-Support-Management"
                  },
                  icon: "AssetsFeatureIcon"
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
        "Bleiben Sie auf dem Laufenden über den Fortschritt der Roadmap, Ankündigungen und exklusive Rabatte. Melden Sie sich gerne mit Ihrer E-Mail-Adresse an.",
      inputField: "Geben Sie Ihre E-Mail-Adresse ein",
      inputPromo: "Produktupdates, Ankündigungen und Rabatte. Lesen Sie unsere",
      cta1: { text: "Abonnieren", href: "/" },
      cta2: { text: "Datenschutzrichtlinie", href: "/privacy-policy" }
    }
  }
};
