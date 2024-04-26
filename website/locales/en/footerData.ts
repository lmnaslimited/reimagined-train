import { Tfooter} from "@/data/types";

export const footerEnData:Tfooter={
        column1:{
          logo:'LmnasLogoStroke',
          companyNAme:'LMNAs',
          description:'LMNAs Cloud Solutions: Your Partner in End-to-End Business Transformation. Experience the Power of LENS Cloud ERP for Seamless Digital Integration.'
        },
      column2:{
        title:'Featured Products',
        ctas:[
          {
            text:'ERP & Finance Cloud',
            href:'/#products'
          },
          {
            text:'CRM Cloud',href:'/#products'
          },
          {
            text:'HRMS Cloud',
            href:'/#products'
          },
          {
            text:'Analytical Cloud',
            href:'/#products'
          },
        ]
      },
      column3:{
        title:'Information',
        ctas:[
          {
            text:'Products',
            href:'/#products',
          },
          {
            text:'Industries',
            href:'/#industry'
          },
          {
            text:'Pricing',
            href:'/pricing'
          },
          {
            text:'About us',
            href:'/aboutus',
          },
          {
            text:'Jobs',
            href:'https://nectar.lmnas.com/career',
            target:'_blank',
            rel:'noopener noreferrer',
          }]
      },
      column4:{
        title:'Contacts',
        subTitle:{
          text1:'Phone:',
          text2:'Email:',
          text3:'Address:',
        },
        address:{
          text1:'#B202',
          text2:' Radiance Royal, Poonthalmalle,',
          text3:'CH-56.'
        },
        phoneno:'+91 98840 44470',
        mailid:'hello@lmnas.com',
        contactCta:{
          text: "Contact Us",
        href: "https://nectar.lmnas.com/contact",
        }
      },
      column5:{
        title:'Social',
        socialCta:[
          {
            href:'https://twitter.com/lmnaslimited',
            icon:'TwitterIcon',
          },
          {
            href:'https://www.youtube.com/@lmnascloudsolutions.4549',
            icon:'YoutubeIcon',
          },
          {
            href:'https://in.linkedin.com/company/lmnaslimited',
            icon:'LinkedinIcon',
          }
        ],
        subTitle:'Stay Connected. Subscribe to our social handles to get bored.'
      },
      bottom:{
        copyright:'© Copyright 2024 LMNAs Cloud Solutions LLP. All rights reserved.',
        ctas:[
          {
            text:'F.A.Q',
            href:'/pricing/#faq',
          },
          {
            text:'Privacy Policy',
            href:'/privacy-policy',
            target:'_blank',
            rel:'noopener noreferrer',
          },
          {
            text:'Terms & Conditions',
            href:'/terms-and-conditions',
            target:'_blank',
            rel:'noopener noreferrer',
          }
        ]
      }}
