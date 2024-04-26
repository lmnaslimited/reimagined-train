import { Tnavbar } from "@/data/types";

export const navbarEnData:Tnavbar={
    companyName:'LMNAs',
    logo:'LmnasLogo',
    ctas:[
      {
        text: "Products",
        href:"/#products",
        navs:[
          {
            text:'ERP & Fianace Cloud',
         slug:'erp&finance-cloud',
         description:'Powering Your Business Operations',
         icon:'ErpCloudLogo'
          },
          {
            text:'CRM Cloud',
         slug:'crm-cloud',
         description:'Empowering Your Customer Relationship Management',
         icon:'CrmCloudLogo'
          },
          {
            text:'CPQ Cloud',
         slug:'cpq-cloud',
         description:'SaaS solution designed to assist businesses',
         icon:'CPQLogo'
          },
          {
            text:'HRMS Cloud',
         slug:'hrms-cloud',
         description:'Transforming Human Resource Management in the Digital Era',
         icon:'HrmsCloudLogo'
          },
          {
            text:'Analytical Cloud',
         slug:'erp&finance-cloud',
         description:'Streamline Your Business with Analytics Cloud',
         icon:'AnalyticalCloudLogo'
          }
        ],
        isDropdown:true,
      },
      {
        text:'Industries',
        href:'/#industry',
        isDropdown:false,
        navs:[]

      },
      {
        text:'Pricing',
        href:'/pricing',
        isDropdown:false,
        navs:[]
      },
      {
        text:'About us',
        href:'/aboutus',
        isDropdown:false,
        navs:[]

      },
      {
        text:'Jobs',
        href:'/jobs',
        target:'_blank',
        rel:'noopener noreferrer',
        isDropdown:false,
        navs:[]
      },
    ],
    contactCta:{
      text:'Contact Us',
      href: "https://nectar.lmnas.com/contact",
    }
   }