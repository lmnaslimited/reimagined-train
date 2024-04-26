import { TproductPage } from "@/data/types";
import { footerDEData } from "./footerDataDeData";
import { navbarDEData } from "./navbarDeData";

export const productHrmsDePage: TproductPage = {
  slug: "hrms-cloud",
  lang: "de",
  productPageDetail: {
    layoutData: {
      footerData: footerDEData,
      navbar: navbarDEData,
      metaData: {
        title: "LMNAs Cloud Solutions | HRMS Cloud",
        description:
          "At LMNAs cloud solution, we take your privacy seriously. Our privacy policy outlines how we collect, use, and protect your personal information when you use our services. We are committed to maintaining the confidentiality and security of your data, and we only use it for the purposes outlined in our policy. By using LMNAs cloud solution, you agree to our privacy policy, so please take the time to read it carefully.",
        pageUrl: "https://lmnas.com/de/products/hrms-cloud",
        schemaData: {
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: "LMNAs Cloud Solutions | HRMS Cloud",
          description:
            "At LMNAs Cloud Solutions, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our website or services. We also explain your rights and options regarding your information. Please read this policy carefully and contact us if you have any questions or concerns.",
          image: "https://lmnas.com/lmnaslogo.png",
          url: "https://lmnas.com/de/products/hrms-cloud",
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
            "@id": "https://lmnas.com/de/hrms-cloud"
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
        text1: "Stärken Sie Ihre Belegschaft und treiben Sie den organisatorischen Erfolg mit LENS HRMS Cloud voran."
      },
      cta1: {
        text: "Jetzt loslegen",
        href: "/pricing"
      },
      cta2: {
        text: "Kontaktieren Sie uns",
        href: "https://nectar.lmnas.com/contact"
      },
    },
    productTabs: [
      {
        tabName: "Übersicht",
        icon: "OverviewIcon",
        tabBody: {
          content: {
            title: {
              text1: "Optimieren Sie Ihre Belegschaft vom",
              text2: "Einstieg bis zum Ruhestand"
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
                icon: "HumanPlus",
                featureName: "Recruiting und Onboarding"
              },
              {
                icon: "ClockIcon",
                featureName: "Schicht- und Zeiterfassung"
              },
              {
                icon: "TruckIcon",
                featureName: "Reisen und Ausgaben"
              },
              {
                icon: "BookIcon",
                featureName: "LMS"
              },
              {
                icon: "ThumbsUpIcon",
                featureName: "Leistung"
              },
              {
                icon: "EuroIcon",
                featureName: "Lohnabrechnung"
              },
              {
                icon: "LinkIcon",
                featureName: "Integration"
              },
            ],
            usps: [
              {
                icon: "SparklesIcon",
                title: "Intelligentes Workforce Management",
                content: "Nutzen Sie KI-gesteuerte Tools für optimierte Ressourcenzuweisung, Talentgewinnung und Leistungsmanagement."
              },
              {
                icon: "SparklesIcon",
                title: "Engagement und Befähigung",
                content: "Fördern Sie eine Kultur des Wachstums und der Zusammenarbeit mit personalisierten Mitarbeitererlebnissen und Self-Service-Funktionen."
              },
              {
                icon: "SparklesIcon",
                title: "Strategische HR-Entscheidungsfindung",
                content: "Erhalten Sie tiefe Einblicke in HR-Daten, um datengesteuerte Entscheidungen für die organisatorische Effektivität und den Erfolg zu treffen."
              }
            ],
            title2: {
              text1: "Transformation des Personalmanagements in der",
              text2: "digitalen Ära"
            },
            featureDetails: {
              featureCardBig: [
                {
                  cardTitle: "Lohnabrechnung",
                  usps: {
                    text1: "Einkommensteuertarife,",
                    highlightedText1: "Einkommensteuererklärungen und -abzüge,",
                    highlightedText2: "Mitarbeiteranreize und Bonuszahlungen,",
                    text2: "Lohnbuchung und Gehaltsabrechnung,",
                    text3: "Mitarbeiterkreditverwaltung."
                  },
                  icon: "PayrollFeatureEuroIcon",
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
                  cardTitle: "Recruiting und Onboarding",
                  usps: {
                    text1: "Recruiting-Marketing,",
                    highlightedText1: "Stellenportal, Personalplanung,",
                    highlightedText2: "Angebot, Onboarding,",
                    text2: "Interviews und Zeitpläne,",
                    text3: "Mitarbeiterbeförderung."
                  },
                  icon: "RecruitmentandOnboardingFeatureIcon",
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
                  cardTitle: "Schicht- und Zeiterfassung",
                  usps: {
                    text1: "Feiertagskalender,",
                    text2: "Zeiterfassung,",
                    text3: "Urlaubsregelung, Urlaubsabrechnung.",
                    highlightedText1: "Schichtplan,",
                    highlightedText2: "Anwesenheit"
                  },
                  icon: "ShiftandTimesheetFeatureIcon",
                },
                {
                  cardTitle: "Reisen und Ausgaben",
                  usps: {
                    text1: "Mitarbeiter-Vorschuss, Zusatzeinkommen,",
                    text2: "Fuhrparkmanagement",
                    highlightedText1: "Reise und Unterkunft,",
                    highlightedText2: "Ausgabenabrechnung, Genehmigungen und Abrechnungen."
                  },
                  icon: "TravelandExpenseFeatureIcon",
                },
                {
                  cardTitle: "Integration",
                  usps: {
                    text1: "Externe Lohnabrechnungsintegration.",
                    highlightedText1: "Externe Banken- und Zahlungsintegrationen.",
                  },
                  icon: "",
                  integrationUsps1: "Anwesenheits- und Zeiterfassungsintegration.",
                  integrationUsps2: "Externe Buchhaltungsintegrationen.",
                },
                {
                  cardTitle: "LMS",
                  usps: {
                    text1: "LMS-Portal,",
                    text2: "Quiz und Bewertung,",
                    highlightedText1: "Öffentliche Anmeldungen,",
                    highlightedText2: "Bewertung und Zertifizierung."
                  },
                  icon: "LmsFeatureIcon",
                },
                {
                  cardTitle: "Leistung",
                  usps: {
                    text1: "Energiepunkteregel,",
                    text2: "Leistungsabhängige Beförderung.",
                    highlightedText1: "Ziele und Zielsetzungen,",
                    highlightedText2: "Bewertungsschlüsselbereich"
                  },
                  icon: "PerformanceFeatureIcon",
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
      },
    ],
    contactSection: {
      tag: "Kontakt",
      title: "Lassen Sie uns wissen, wie wir helfen können",
      subTitle: "Wir sind hier, um zu helfen und Ihre Fragen zu beantworten. Wir freuen uns darauf, von Ihnen zu hören.",
      contactMenthos: [
        {
          icon: "LocationIcon",
          contact: "#B202, Radiance Royal, Poonthalmalle,CH-56.",
          title: "Unser Büro",
          href: "https://goo.gl/maps/a4t4ghmEA1as8vLT9",
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
      subTitle: "Bleiben Sie über den Fortschritt der Roadmap, Ankündigungen und exklusive Rabatte auf dem Laufenden. Melden Sie sich gerne mit Ihrer E-Mail-Adresse an.",
      inputField: "Geben Sie Ihre E-Mail-Adresse ein",
      inputPromo: "Produktupdates, Ankündigungen und Rabatte. Lesen Sie unsere",
      cta1: { text: "Abonnieren", href: "/" },
      cta2: { text: "Datenschutzrichtlinie", href: "/privacy-policy" }
    }
  }
};
