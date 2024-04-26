import { TjobsPage } from "@/data/types";
import { footerDEData } from "./footerDataDeData";
import { navbarDEData } from "./navbarDeData";

export const jobsPageDEData: TjobsPage = {
  lang: "de",
  layoutData: {
    footerData: footerDEData,
    navbar: navbarDEData,
    metaData: {
      title:
        "Exponentielles Gedeihen | Stärken Sie Ihre Karriere bei LMNAs Cloud Solutions",
      description:
        "Treten Sie LMNAs Cloud Solutions bei, wo Innovation gedeiht und Möglichkeiten überfließen. Erweitern Sie Ihre Expertise in einer dynamischen, kooperativen Umgebung und gestalten Sie die Zukunft der Cloud-Technologie.",
      pageUrl: "https://lmnas.com/de/jobs",
      schemaData: {
        "@context": "http://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://lmnas.com/de/jobs",
            name: "LMNAs Cloud Solutions",
            alternateName: "LMNAs",
            url: "https://lmnas.com/de/jobs",
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
              "@id": "https://lmnas.com/de/jobs",
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
      text1: "Entfache",
      text2: "deine Reise"
    },
    subTitle: {
      text1:
        "Entdecke grenzenlose Möglichkeiten in der dynamischen Welt von LMNAs Cloud Solutions.",
      text2:
        "Schließe dich uns an und gestalte die Zukunft der Innovation, Karriere für Karriere."
    },
    cta1: {
      text: "Offene Stellen anzeigen",
      href: "/jobs/#jobOpenings"
    },
    cta2: {
      text: "Das Leben bei LMNAs",
      href: "/jobs/#lifeatLMNAs",
      target: "_self",
      rel: "noopener noreferrer"
    }
  },
  statsSection:[
    {
      data: "1,15 Mio. ₹",
      title: "In Weiterbildung und Fortbildung investiert"
    },
    {
      data: "8+",
      title: "Karrierewege"
    },
    {
      data: "1000+",
      title: "Hackathons zur Auswahl"
    }
],
  jobsSection: {
    title: {
      text1: "Erkunde",
      text2: "Möglichkeiten"
    },
    subTitle: {
      text1:
        "Werde ein wichtiger Teil unseres Teams und trage zur Gestaltung der Zukunft bei.",
      text2: "Entdecke spannende Karrierechancen bei LMNAs Cloud Solutions."
    },
    cards: [
      {
        jobProfile: "Trainee für ERP-Entwicklung und Support",
        cta: {
          text: "Jetzt bewerben",
          href: "https://nectar.lmnas.com/trainee-erp-development-and-support",
          target: "_self",
          rel: "noopener noreferrer"
        },
        tag:'Bewerbung läuft schnell voll',
        category: "Trainee",
        validity: "Standort: Tranquebar Office",
        requirements: [
          "B.E/B.Tech 2024 Batch",
          "Ausgezeichnete schriftliche und mündliche Kommunikationsfähigkeiten.",
          "Hervorragende Problemlösungs- und analytische Fähigkeiten."
        ]
      },
      {
        jobProfile: "ERP Business Analyst",
        cta: {
          text: "Jetzt bewerben",
          href: "https://nectar.lmnas.com/erp-business-analyst",
          target: "_self",
          rel: "noopener noreferrer"
        },
        tag:'',
        category: "Analyst",
        validity: "",
        requirements: [
          "Bevorzugt jede ERP-Zertifizierung",
          "Mindestens 2 Jahre Erfahrung als ERP-Business-Analyst",
          "Umfassende Kenntnisse über die neuesten Entwicklungen in der ERP-Anwendung"
        ]
      },
      {
        jobProfile: "Junior Buchhalter",
        cta: {
          text: "Jetzt bewerben",
          href: "https://nectar.lmnas.com/accountant",
          target: "_self",
          rel: "noopener noreferrer"
        },
        tag:'',
        category: "Finanzen",
        validity: "",
        requirements: [
          "Bachelor-Abschluss in Finanzen, Rechnungswesen und Handel",
          "Berufseinsteiger oder mindestens 0-2 Jahre Erfahrung",
          "Fähigkeit, verschiedene Arten von Ausgaben zu verfolgen, zu kategorisieren und zu verwalten"
        ]
      },
      {
        jobProfile: "Marketing Head",
        cta: {
          text: "Jetzt bewerben",
          href: "https://nectar.lmnas.com/marketing-strategist",
          target: "_self",
          rel: "noopener noreferrer"
        },
        tag:'',
        category: "Stratege",
        validity: "",
        requirements: [
          "Berufserfahrung als Marketingstratege oder Marketingmanager",
          "Design Thinking und dessen Anwendung im Marketing",
          "Umfassende Kenntnisse im CRM"
        ]
      }
    ]
  },
  whyLMNAs: {
    title: {
      text1: "Employee",
      text2: "Wellbeing Hub"
    },
    subTitle: {
      text1:
        "Genieße ein Spektrum von Vorteilen: Karrieren fördern, Leben verbessern.",
      text2:
        "LMNAs Cloud Solutions engagiert sich für dein ganzheitliches Wachstum und Glück."
    },
    featuresBenefit: [
      {
        title: "Umweltfreundliche Fahrten",
        content:
          "LMNAs Cloud Solutions fördert nachhaltiges Leben, indem wir Reisezulagen für Mitarbeiter anbieten, die öffentliche Verkehrsmittel nutzen. Schließe dich uns an, um unseren CO2-Fußabdruck zu reduzieren und zu einer grüneren Zukunft beizutragen.",
        icon: "GlobeIcon"
      },
      {
        title: "Kollaborative Kultur",
        content:
          "Tauche ein in eine Arbeitsumgebung, in der Zusammenarbeit im Mittelpunkt steht. Von offenen Arbeitsbereichen bis hin zu interdisziplinären Projekten – bei LMNAs Cloud Solutions prägt Teamarbeit unsere lebendige Kultur.",
        icon: "SocialCollaborationIcon"
      },
      {
        title: "Oase des beruflichen Wachstums",
        content:
          "Fördere deine Karriere mit LMNAs. Unser Engagement für deinen Erfolg geht über die täglichen Aufgaben hinaus und bietet kontinuierliche Lern- und Entwicklungsangebote für dein berufliches Wachstum. Schließe dich uns an und blühe auf!",
        icon: "QualityIcon"
      }
    ]
  },
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
  }
};
