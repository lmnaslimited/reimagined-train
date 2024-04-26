import { ThomePage } from "@/data/types";
import { footerDEData } from "./footerDataDeData";
import { navbarDEData } from "./navbarDeData";

export const homepageDEData: ThomePage = {
  lang: "de",
  layoutData: {
    footerData: footerDEData,
    navbar: navbarDEData,
    metaData: {
      title:
        "LMNAs Cloud Solutions | Cloud-ERP für eine umfassende Geschäftstransformation.",
      description:
        "LENS ist eine cloudbasierte ERP-Lösung, die darauf abzielt, Unternehmen in den Bereichen Fertigung, Einzelhandel, Distribution und Bildung zu transformieren. Mit LENS können Sie Integrationen vornehmen, Automatisierung einführen, Analysen durchführen und auf nichtlineare Weise wachsen, um im heutigen wettbewerbsintensiven Umfeld erfolgreich zu sein. Diese leistungsstarke Software optimiert Ihre Geschäftsprozesse und treibt das Wachstum voran, sodass sie ein unverzichtbares Werkzeug für jede Organisation ist, die an der Spitze bleiben möchte. Starten Sie noch heute mit LENS und bringen Sie Ihr Unternehmen auf neue Höhen!",
      pageUrl: "https://lmnas.com/de",
      schemaData: {
        "@context": "http://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://lmnas.com/de",
            name: "LMNAs Cloud Solutions",
            alternateName: "LMNAs",
            url: "https://lmnas.com/de",
            logo: "https://lmnas.com/lmnaslogo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+919884044470",
              contactType: "sales",
              areaServed: ["IN", "GB", "US", "DE", "CZ"],
              availableLanguage: ["en", "de"]
            },
            sameAs: [
              "https://twitter.com/lmnaslimited",
              "https://www.youtube.com/@lmnascloudsolutions.4549",
              "https://www.linkedin.com/company/lmnaslimited?originalSubdomain=in"
            ],
            publisher: {
              "@type": "Organization",
              "@id": "https://lmnas.com/de",
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

  banner: {
    title: {
      text1: "CloudConfluence 2024"
    },
    subtitle: {
      text1: "Die Zukunft der LMNAs Cloud Excellence enthüllen",
      text2: "Wir stellen ein!"
    },
    cta: {
      text: "Jetzt bewerben",
      href: "/jobs#jobOpenings",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  heroSection: {
    title: {
      text1: "Wachsen",
      text2: "Nicht-linear"
    },
    subTitle: {
      text1: "Maximieren Sie das Geschäftswachstum mit LMNAs Cloud-ERP",
      text2: "Entfesseln Sie die Kraft der nicht-linearen Expansion mit LENS."
    },
    cta1: {
      text: "Jetzt starten",
      href: "/pricing"
    },
    cta2: {
      text: "Kontaktiere uns",
      href: "https://nectar.lmnas.com/contact"
    }
  },
  productSection: [
    {
      product: "LENS",
      slug: "lens",
      feature: {
        cardTitle: "LENS",
        subTitle: {
          text1: "LMNAs Experience Suite",
          text2: "Von LMNAs",
          text3:
            "Stärken Sie Ihr Unternehmen mit dem LENS Cloud-ERP. Integrieren, Automatisieren, Analysieren, Erfolgreich sein."
        },
        cta1: {
          text: "Jetzt starten",
          href: "/pricing"
        },
        cta2: {
          text: "Jetzt ausprobieren",
          href: "https://demolens.lmnas.com/"
        }
      },
      icon: "LensLogo"
    },
    {
      product: "CRM Cloud",
      slug: "crm-cloud",
      feature: {
        cardTitle: "CRM Cloud",
        cta1: {
          text: "Jetzt starten",
          href: "/pricing"
        },
        cta2: {
          text: "Jetzt ausprobieren",
          href: "https://demolens.lmnas.com/"
        },
        usps: [
          "Personalisierte Kundenbindung",
          "Skalierbar und flexibel",
          "Omnichannel-Kundenverständnis",
          "Transparent, sozial, kollaborativ"
        ]
      },
      icon: "CrmCloudLogo"
    },
    {
      product: "Analytical Cloud",
      slug: "erp&finance-cloud",
      feature: {
        cardTitle: "Analytical Cloud",
        cta1: {
          text: "Jetzt starten",
          href: "/pricing"
        },
        cta2: {
          text: "Jetzt ausprobieren",
          href: "https://demolens.lmnas.com/"
        }
      },
      icon: "AnalyticalCloudLogo"
    },
    {
      product: "HRMS Cloud",
      slug: "hrms-cloud",
      feature: {
        cardTitle: "HRMS Cloud",
        cta1: {
          text: "Jetzt starten",
          href: "/pricing"
        },
        cta2: {
          text: "Jetzt ausprobieren",
          href: "https://demolens.lmnas.com/"
        }
      },
      icon: "HrmsCloudLogo"
    },
    {
      product: "ERP & Finance Cloud",
      slug: "erp&finance-cloud",
      feature: {
        cardTitle: "ERP & Finance Cloud",
        cta1: {
          text: "Jetzt starten",
          href: "/pricing"
        },
        cta2: {
          text: "Jetzt ausprobieren",
          href: "https://demolens.lmnas.com/"
        },
        usps: ["Mehrere Währungen", "Mehrere Sprachen", "Echtzeit-Einblicke"]
      },
      icon: "ErpCloudLogo"
    },
    {
      product: "CPQ Cloud",
      slug: "cpq-cloud",
      feature: {
        cardTitle: "CPQ Cloud",
        cta1: {
          text: "Loslegen",
          href: "/preisgestaltung"
        },
        cta2: {
          text: "Jetzt ausprobieren",
          href: "https://demolens.lmnas.com/"
        }
      },
      icon: "CPQLogo"
    }
  ],
  industrySection: {
    title: { text1: "Branchenspezifisches Cloud-ERP", text2: "LENS" },
    subTitle: {
      text1: "Transformieren Sie Ihr Unternehmen mit LENS",
      text2:
        "Die Cloud-ERP-Lösung für die Bereiche Fertigung, Einzelhandel, Vertrieb und Bildung."
    },
    industry: [
      {
        title: "Fertigung",
        cta1: {
          text: "Jetzt starten",
          href: "/pricing"
        },
        cta2: {
          text: "Jetzt ausprobieren",
          href: "https://demolens.lmnas.com/"
        },
        icon: "ManufacturingLogo"
      },
      {
        title: "Einzelhandel & Vertrieb",
        cta1: {
          text: "Jetzt starten",
          href: "/pricing"
        },
        cta2: {
          text: "Jetzt ausprobieren",
          href: "https://demolens.lmnas.com/"
        },
        icon: "RetailDistributionLogo"
      },
      {
        title: "Bildung",
        cta1: {
          text: "Jetzt starten",
          href: "/pricing"
        },
        cta2: {
          text: "Jetzt ausprobieren",
          href: "https://demolens.lmnas.com/"
        },
        icon: 'EducationLogo',
      }
    ]
  },
  integrateAppsSection: {
    title: {
      text1: "Verbinden Sie Ihr Unternehmen",
      text2: "mit",
      text3: "Top-Apps"
    },
    subTitle: {
      text1: "Optimieren Sie Ihr Unternehmen mit",
      text2: "LENS Integration"
    },
    paypal: "PaypalLogo",
    dropbox: "DropboxLogo",
    razorpay: "RazorpayLogo",
    slack: "SlackLogo",
    google: "GoogleLogo",
    stripe: "StripeLogo",
    shopify: "ShopifyLogo",
    exotel: "ExotelLogo",
    woocommerce: "WoocommerceLogo",
    plaid: "PlaidLogo",
    aws: "AwsLogo"
  },
  testimonialSection: {
    title: {
      text1: "Erfolgsgeschichten",
      text2: "unserer Kunden"
    },
    subtitle: { text1: "Wie LENS Cloud ERP ihr Unternehmen transformiert hat" },
    testimonial: [
      {
        clientName: "Jayamalini Venkatesan",
        designation: "CEO, Mindfresh",
        content:
          "“Früher haben wir alle unsere Geschäftsanforderungen mit Excel bearbeitet. Die Umstellung auf LENS hat es uns ermöglicht, die volle Kraft von CRM zu nutzen und aus unserer Komfortzone auszubrechen. CRM für Bildungs- und Medieninstitute ist einzigartig. Bei anderen Anbietern konnten wir nicht die richtige Expertise finden, um unsere Bedürfnisse maßzuschneidern. Aber als wir LMNAs kennengelernt haben, hat sich alles geändert. Ihre Absicht war es nicht, LENS zu verkaufen, sondern uns zu zeigen, wie LENS unser Geschäft verbessern kann.”",
        rating: "FourStarRating",
        imagehref: "/female-avatar.svg"
      },
      {
        clientName: "Daniel Polasek",
        designation: "Chief Sales, SGB Czech Trafo",
        content:
          "“Unser vorhandenes Angebotserstellungssystem ist gut. Aber die Erweiterung um einige neue Funktionen ist aufgrund der veralteten Technologie zu teuer. LENS ist flexibel. Das Team von LMNAs ist schnell und präzise. Wir haben das LENS-Angebotstool mit nur wenigen Übersetzungen in andere Sprachen eingeführt.”",
        rating: "FourStarRating",
        imagehref: "/avatar-male.svg"
      },
      {
        clientName: "Swamy Chellappan",
        designation: "CEO, BluemapleIT",
        content:
          "“Es gibt viele Produkte auf dem Markt für HRMS. Wir haben uns für LMNAs entschieden aufgrund ihrer sozialen Werte. Ihre Werte wie mindestens 50% Frauen, die Errichtung eines Büros in einer entfernten Stadt und die Stärkung der lokalen Belegschaft mit einem Job in ihrer eigenen Stadt haben uns beeindruckt. Ihre Kenntnisse auf technologischer Seite sind keineswegs zu unterschätzen.”",
        rating: "FourStarRating",
        imagehref: "/avatar-male.svg"
      }
    ],
    clientTitle: {
      text1: "Unsere zufriedenen",
      text2: "Kunden"
    },
    clientLogo: [
      {
        logo: "SGBIndiaLogo",
        href: "https://www.sgb-smit.com/"
      },
      {
        logo: "BluemapleITLogo",
        href: "https://bluemapleit.com/"
      },
      {
        logo: "MindfreshLogo",
        href: "https://www.mindfresh.in/"
      },
      {
        logo: "SGBCzexhTrafoLogo",
        href: "https://www.sgb-smit.com/sgb-smit-group/locations/czech-republic-slavonin-sgb-czech-trafo"
      }
    ]
  },
  startTrialSection: {
    title: {
      text1: "Testen Sie LENS kostenlos:",
      text2: "Maßgeschneiderte Cloud-ERP-Tests ohne den Aufwand "
    },
    subTitle: {
      text1:
        "Erleben Sie die anpassbare LENS-Cloud-ERP-Lösung ohne Verpflichtungen oder Kreditkarten"
    },
    cta: {
      text: "Kostenlos testen",
      href: "/pricing"
    }
  }
};
