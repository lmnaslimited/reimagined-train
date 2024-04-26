import { TpricingPage } from "@/data/types";
import { footerDEData } from "./footerDataDeData";
import { navbarDEData } from "./navbarDeData";


export const pricingPageDEData: TpricingPage = {
  lang: "de",
  layoutData: {
    footerData: footerDEData,
    navbar: navbarDEData,
    metaData: {
      title:
        "LENS Preisgestaltung | Entdecken Sie unsere Cloud-ERP-Lösung Preispläne",
      description:
        "Entdecken Sie LENS Preispläne und starten Sie mit LENS Starter für nur $14/Monat. Skalieren Sie Ihr Unternehmen und zahlen Sie weniger pro Benutzer mit mehr Funktionen. Optimieren Sie Ihre Prozesse, treiben Sie das Wachstum voran und optimieren Sie Ihr Unternehmen mit LENS. Besuchen Sie noch heute unsere Preisgestaltungsseite!",
      pageUrl: "https://lmnas.com/de/pricing",
      schemaData:{
        "@context": "http://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://lmnas.com/de/pricing",
                "name": "LENS Preisgestaltung",
                "description": "Entdecken Sie LENS Preispläne und starten Sie mit LENS Starter für nur $14/Monat. Skalieren Sie Ihr Unternehmen und zahlen Sie weniger pro Benutzer mit mehr Funktionen. Optimieren Sie Ihre Prozesse, treiben Sie das Wachstum voran und optimieren Sie Ihr Unternehmen mit LENS. Besuchen Sie noch heute unsere Preisgestaltungsseite!",
                "author": {
                    "@type": "Organization",
                    "@id": "https://lmnas.com/de/pricing",
                    "name": "LMNAs",
                    "url": "https://lmnas.com/de",
                     "sameAs": [
                        "https://twitter.com/lmnaslimited",
            "https://www.youtube.com/@lmnascloudsolutions.4549",
            "https://www.linkedin.com/company/lmnaslimited?originalSubdomain=in"
                    ]
                },
                "publisher": {
                    "@type": "Organization",
                    "@id": "https://lmnas.com/de/pricing",
                    "name": "LMNAs",
                    "url": "https://lmnas.com/de",
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
    }
  },
  pricinghero: {
    title: { text1: "Preisgestaltung", text2: "Plan" },
    subTitle: {
      text1: "Wählen Sie einen Plan basierend auf",
      text2: "Ihrem Bedarf"
    },
    image: "PricingImage"
  },
  pricingPlanPrice: [
    {
      title: "LENS Starter",
      subtitle: "Pro Standort, pro Monat",
      price: "€ 97",
      cta: {
        text: "Testversion starten",
        href: "https://nectar.lmnas.com/free-trail-registraion/new",
        style: "shadow-sm text-primary"
      }
    },
    {
      title: "LENS Kleinunternehmen",
      subtitle: "Pro Standort, pro Monat",
      price: "€ 261",
      cta: {
        text: "Testversion starten",
        href: "https://nectar.lmnas.com/free-trail-registraion/new",
        style: "shadow-sm text-primary"
      }
    },
    {
      title: "LENS Mittelständisches Unternehmen",
      subtitle: "Pro Standort, pro Monat",
      price: "€ 279",
      cta: {
        text: "Testversion starten",
        href: "https://nectar.lmnas.com/free-trail-registraion/new",
        style: "shadow-lg text-white bg-primary"
      }
    },
    {
      title: "LENS Enterprise",
      subtitle: "",
      price: "kontaktiere uns",
      cta: {
        text: "Kontaktieren Sie uns",
        href: "https://nectar.lmnas.com/contact?subject=Enterprise%20Plan%20Enquiry",
        style: "shadow-sm text-primary"
      }
    }
  ],
  pricingPlanFeature: [
    {
      title: "Benutzer",
      starter: {
        text: "5 Benutzer",
        icon: ""
      },
      smallbusiness: { text: "15 Benutzer", icon: "" },
      mediumbsuiness: { text: "20 Benutzer", icon: "" },
      enterprise: { text: "bis zu 50 Benutzer", icon: "" }
    },
    {
      title: "Alle Funktionen",
      starter: {
        icon: "FalseIcon"
      },
      smallbusiness: { icon: "TrueIcon" },
      mediumbsuiness: { icon: "TrueIcon" },
      enterprise: { icon: "TrueIcon" }
    },
    {
      title: "Produktgarantie",
      starter: {
        text: "14 Tage",
        icon: ""
      },
      smallbusiness: { text: "21 Tage", icon: "" },
      mediumbsuiness: { text: "42 Tage", icon: "" },
      enterprise: { text: "56 Tage", icon: "" }
    },
    {
      title: "Funktionale Unterstützung",
      starter: {
        icon: "TrueIcon"
      },
      smallbusiness: { icon: "TrueIcon" },
      mediumbsuiness: { icon: "TrueIcon" },
      enterprise: { icon: "TrueIcon" }
    },
    {
      title: "Zusätzliche Benutzer",
      starter: {
        text: "19.5 €/Monat",
        icon: ""
      },
      smallbusiness: { text: "17.5 €/Monat", icon: "" },
      mediumbsuiness: { text: "14 €/Monat", icon: "" },
      enterprise: { text: "Kontaktieren Sie uns", icon: "" }
    },
    {
      title: "Unbegrenzte Benutzer",
      starter: {
        icon: "FalseIcon"
      },
      smallbusiness: { icon: "FalseIcon" },
      mediumbsuiness: { icon: "FalseIcon" },
      enterprise: { icon: "TrueIcon" }
    },
    {
      title: "Regionale Datenbank",
      starter: {
        icon: "FalseIcon"
      },
      smallbusiness: { icon: "FalseIcon" },
      mediumbsuiness: { icon: "TrueIcon" },
      enterprise: { icon: "TrueIcon" }
    },
    {
      title: "Wartungssupport",
      starter: {
        text: "8 x 5",
        icon: ""
      },
      smallbusiness: { text: "8 x 6", icon: "" },
      mediumbsuiness: { text: "12 x 7", icon: "" },
      enterprise: { text: "24 x 7", icon: "" }
    }
  ],
  pricingMobile: [
    {
      id: 1,
      name: "LENS Starter",
      price: "€97/Mo",
      users: "5 Benutzer",
      features: [
        {
          feature: "Alle Funktionen",
          icon: "MobileFalseIcon"
        },
        {
          feature: "Produktgarantie",
          icon: "14 Tage"
        },
        {
          feature: "Funktionale Unterstützung",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Zusätzliche Benutzer",
          icon: "€19.5/Mo"
        },
        {
          feature: "Unbegrenzte Benutzer",
          icon: "MobileFalseIcon"
        },
        {
          feature: "Regionale Datenbank",
          icon: "MobileFalseIcon"
        },
        {
          feature: "Wartungssupport",
          icon: "8x5"
        }
      ],
      cta: {
        text: "Testversion starten",
        href: "https://nectar.lmnas.com/free-trail-registraion/new"
      }
    },
    {
      id: 2,
      name: "LENS Small Business",
      price: "€261/Mo",
      users: "15 Benutzer",
      features: [
        {
          feature: "Alle Funktionen",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Produktgarantie",
          icon: "21 Tage"
        },
        {
          feature: "Funktionale Unterstützung",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Zusätzliche Benutzer",
          icon: "€17.5/Mo"
        },
        {
          feature: "Unbegrenzte Benutzer",
          icon: "MobileFalseIcon"
        },
        {
          feature: "Regionale Datenbank",
          icon: "MobileFalseIcon"
        },
        {
          feature: "Wartungssupport",
          icon: "8x6"
        }
      ],
      cta: {
        text: "Testversion starten",
        href: "https://nectar.lmnas.com/free-trail-registraion/new"
      }
    },
    {
      id: 3,
      name: "LENS Medium Business",
      price: "€279/Mo",
      users: "20 Benutzer",
      features: [
        {
          feature: "Alle Funktionen",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Produktgarantie",
          icon: "42 Tage"
        },
        {
          feature: "Funktionale Unterstützung",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Zusätzliche Benutzer",
          icon: "€14/Mo"
        },
        {
          feature: "Unbegrenzte Benutzer",
          icon: "MobileFalseIcon"
        },
        {
          feature: "Regionale Datenbank",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Wartungssupport",
          icon: "12x7"
        }
      ],
      cta: {
        text: "Testversion starten",
        href: "https://nectar.lmnas.com/free-trail-registraion/new"
      }
    },
    {
      id: 4,
      name: "LENS Enterprise",
      price: "Kontaktiere uns",
      users: "5 Benutzer",
      features: [
        {
          feature: "Alle Funktionen",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Produktgarantie",
          icon: "56 Tage"
        },
        {
          feature: "Funktionale Unterstützung",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Zusätzliche Benutzer",
          icon: "Kontaktiere uns"
        },
        {
          feature: "Unbegrenzte Benutzer",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Regionale Datenbank",
          icon: "MobileTrueIcon"
        },
        {
          feature: "Wartungssupport",
          icon: "24x7"
        }
      ],
      cta: {
        text: "Kontaktiere uns",
        href: "https://nectar.lmnas.com/contact?subject=Enterprise%20Plan%20Enquiry"
      }
    }
  ],
  faqsection: {
    title: { text1: "Häufig gestellte", text2: "Fragen?" },
    faqs: [
      {
        question: "Wie lange dauert die Standardimplementierung von LENS?",
        answer:
          "Die Implementierungsdauer von LENS kann je nach erforderlichem Anpassungsumfang variieren. Für ein kleines Unternehmen ohne Anpassungen kann LENS in kurzer Zeit einsatzbereit sein. Wenn jedoch Anpassungen erforderlich sind, kann die Implementierungszeit zwischen 1 und 4 Wochen liegen."
      },
      {
        question: "Ist es möglich, LENS lokal zu hosten?",
        answer:
          "LENS ist aus Sicherheitsgründen nicht in einer On-Premise-Version verfügbar."
      },
      {
        question: "Erfüllt LENS die Datenschutzgesetze unseres Landes?",
        answer:
          "Ja, LENS entspricht den GDPR-,s IFRS- und anderen länderspezifischen rechtlichen und Compliance-Anforderungen."
      },
      {
        question: "Ist es möglich, LENS-Datenzentren in unserem Land zu haben?",
        answer:
          "Ja, Sie können dies beantragen. In bestimmten Plänen ist eine regionale Datenbank verfügbar. Weitere Informationen finden Sie auf der Preisseite."
      },
      {
        question:
          "Wie wird LMNAs die Migration von unserem bestehenden ERP zu LENS handhaben?",
        answer:
          "LMNAs wird die Migration von Ihrem bestehenden ERP zu LENS mithilfe einer Reihe von Tools und Prozessen durchführen. LENS verfügt über Business Process Analysis, Implementierungsvorlagen und Datenmigrationspakete, die darauf abzielen, den Migrationsprozess reibungslos und effizient zu gestalten, ohne den Geschäftsbetrieb zu stören. Diese Tools ermöglichen es LMNAs, den Migrationsprozess zu beschleunigen und einen nahtlosen Übergang zu LENS zu gewährleisten."
      },
      {
        question: "Wie werden LENS-Updates durchgeführt?",
        answer:
          "LENS erhält regelmäßige Updates in drei verschiedenen Formen - monatliche Patch-Updates, quartalsweise Verbesserungs-Upgrades und jährliche neue Release-Upgrades. Das LENS-Supportteam von LMNAs ist für diese Updates und die erforderlichen Tests innerhalb der festgelegten Häufigkeit verantwortlich. Dadurch ist LENS immer auf dem neuesten Stand mit den neuesten Funktionen und Verbesserungen und bietet den Benutzern ein optimales Erlebnis."
      }
    ]
  }
};
