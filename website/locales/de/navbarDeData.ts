import { Tnavbar } from "@/data/types";

export const navbarDEData:Tnavbar={
    companyName:'LMNAs',
    logo:'LmnasLogo',
    
    ctas:[
     {
        text: "Produkte",
        href:"/#products",
        navs: [
          {
            text: 'ERP & Finanzen Cloud',
            slug: 'erp&finance-cloud',
            description: 'Ihre Geschäftsprozesse mit der ERP & Finanzen Cloud optimieren',
            icon: 'ErpCloudLogo'
          },
          {
            text: 'CRM Cloud',
            slug: 'crm-cloud',
            description: 'Ihr Kundenbeziehungsmanagement mit der CRM Cloud stärken',
            icon: 'CrmCloudLogo'
          },
          {
            text: 'CPQ Cloud',
            slug: 'cpq-cloud',
            description: 'SaaS-Lösung, die Unternehmen unterstützt',
            icon: 'CPQLogo'
          },          
          {
            text: 'HRMS Cloud',
            slug: 'hrms-cloud',
            description: 'Das Personalmanagement im digitalen Zeitalter mit der HRMS Cloud transformieren',
            icon: 'HrmsCloudLogo'
          },
          {
            text: 'Analytik Cloud',
            slug: 'erp&finance-cloud',
            description: 'Ihr Unternehmen mit der Analytik Cloud effizienter gestalten',
            icon: 'AnalyticalCloudLogo'
          }
        ],
        isDropdown:true,
      },
      {
        text:'Branchen',
        href:'/#industry',
        isDropdown:false,
        navs:[]
      },
      {
        text:'Preisgestaltung',
        href:'/pricing',
        isDropdown:false,
        navs:[]

      },
      {
        text:'Über uns',
        href:'/aboutus',
        isDropdown:false,
        navs:[]


      },
      {
        text:'Stellenangebote',
        href:'/jobs',
        target:'_blank',
        rel:'noopener noreferrer',
        isDropdown:false,
        navs:[]

      },
    ],
    contactCta:{
        text:'Kontaktiere uns',
        href: "https://nectar.lmnas.com/contact",
    }
   }
