export type Tcta = {
  text: string;
  href: string;
  target?: string;
  rel?: string;
  style?: string;
  icon?: String;
};
export type TnavCta = {
  text: string;
  href: string;
  isDropdown: boolean;
  target?: string;
  rel?: string;
  icon?: String;
  navs: TnavDropdown;
};
export type TnavDropdown = {
  text: string;
  slug: string;
  description: string;
  icon: string;
}[];
export type TsocialCta = {
  text?: string;
  href: string;
  target?: string;
  rel?: string;
  icon: string;
};
export type TsocialCtas = TsocialCta[];
export type Ttitle = {
  text1?: string;
  text2?: string;
  text3?: string;
};
export type TsubTitle = {
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
};
export type Tlayout = {
  metaData: TheadMetaData;
  footerData: Tfooter;
  navbar: Tnavbar;
};
export type Tbanner={
  title:Ttitle,
  subtitle:TsubTitle,
  cta:Tcta,
}
export type ThomePage = {
  lang: string;
  layoutData: Tlayout;
  banner:Tbanner;
  heroSection: Thero;
  productSection: Tproducts;
  industrySection: TindustrySection;
  integrateAppsSection: TintegrateApp;
  testimonialSection: TtestimonialSection;
  startTrialSection: TstartTrial;
};
export type ThomePageData = ThomePage[];
export type Thero = {
  title: Ttitle;
  subTitle: TsubTitle;
  cta1: Tcta;
  cta2: Tcta;
};
export type TproductFeature = {
  cardTitle: string;
  subTitle?: TsubTitle;
  cta1?: Tcta;
  cta2?: Tcta;
  usps?: string[];
};
export type Tproduct = {
  product: string;
  slug: string;
  feature: TproductFeature;
  icon: string;
};
export type Tproducts = Tproduct[];
export type TindustrySection = {
  title: Ttitle;
  subTitle: TsubTitle;
  industry: Tindustries;
};
export type Tindustry = {
  title: string;
  cta1: Tcta;
  cta2: Tcta;
  icon: string;
};
export type Tindustries = Tindustry[];
export type TintegrateApp = {
  title: Ttitle;
  subTitle: TsubTitle;
  paypal: string;
  dropbox: string;
  razorpay: string;
  slack: string;
  google: string;
  stripe: string;
  shopify: string;
  exotel: string;
  woocommerce: string;
  plaid: string;
  aws: string;
};
export type TtestimonialSection = {
  title: Ttitle;
  subtitle: TsubTitle;
  testimonial: Ttestimonials;
  clientTitle: Ttitle;
  clientLogo: TclientLogos;
};
export type TclientLogo = {
  logo: string;
  href: string;
};
export type TclientLogos = TclientLogo[];
export type Ttestimonial = {
  clientName: string;
  designation: string;
  content: string;
  rating: string;
  imagehref: string;
};
export type Ttestimonials = Ttestimonial[];
export type TstartTrial = {
  title: Ttitle;
  subTitle: TsubTitle;
  cta: Tcta;
};
export type TpricingPage = {
  lang: string;
  layoutData: Tlayout;
  pricinghero: TpricingHero;
  pricingPlanPrice: TpricingPlansPrices;
  pricingPlanFeature: TpricingFeatures;
  pricingMobile: TpricingMobilePlans;
  faqsection: Tfaqs;
};
export type TpricingPageData = TpricingPage[];
export type TpricingHero = {
  title: Ttitle;
  subTitle: TsubTitle;
  image: string;
};
export type Tfaq = {
  question: string;
  answer: string;
};
export type Tfaqs = {
  title: Ttitle;
  subtitle?: TsubTitle;
  faqs: Tfaq[];
};
export type TpricingPlanPrice = {
  title: string;
  subtitle: string;
  price: string;
  cta?: Tcta;
};
export type TpricingPlansPrices = TpricingPlanPrice[];
export type TplanFeature = {
  text?: string;
  icon: string;
};
export type TpricingFeature = {
  title: string;
  starter: TplanFeature;
  smallbusiness: TplanFeature;
  mediumbsuiness: TplanFeature;
  enterprise: TplanFeature;
};
export type TpricingFeatures = TpricingFeature[];
export type TaboutUsPage = {
  lang: string;
  layoutData: Tlayout;
  aboutUsHero: TaboutUsHero;
  timeLineSection: TtimeLineSection;
  aboutWhatWeOffer: TaboutWhatWeOffer;
  aboutUsLocation: TaboutUsLocation;
};
export type TaboutUsPageData = TaboutUsPage[];
export type TaboutUsLocation = {
  title: Ttitle;
  locations: Tlocations;
};
export type Tlocation = {
  area: string;
  address: string;
  image: string;
  cta: Tcta;
};
export type Tlocations = Tlocation[];
export type TaboutUsHero = {
  title: Ttitle;
  subTitle: TsubTitle;
  companyValues: TcompanyValues;
};
export type TtimeLineSection = {
  title: Ttitle;
  subTitle: TsubTitle;
  timeLines: TtimeLines;
};
export type TaboutWhatWeOffer = {
  title: Ttitle;
  companyServices: TcompanyServices;
};
export type TcompanyService = {
  service: string;
  content: string;
  icon: string;
  iconColor: string;
  ringColor: string;
};
export type TcompanyServices = TcompanyService[];
export type TcompanyValue = {
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  ringColor: string;
};
export type TcompanyValues = TcompanyValue[];
export type TtimeLine = {
  monthYear: string;
  title: string;
  content: string;
  icon: string;
};
export type TtimeLines = TtimeLine[];
export type TtermsAndConditions = {
  lang: string;
  layoutData: Tlayout;
  title: string;
  subTitle: TsubTitle;
  tcContents: TtcContents;
  contact: Tcontact;
};
export type TtermsAndConditionData = TtermsAndConditions[];
export type TprivacyPolicy = {
  lang: string;
  layoutData: Tlayout;
  title: string;
  subTitle: TsubTitle;
  pPContents: TpPContents;
  contact: Tcontact;
};
export type TprivacyPolicyData = TprivacyPolicy[];
export type Tcontact = {
  heading: string;
  subTitle: TsubTitle;
  cta1: Tcta;
  cta2: Tcta;
};
export type TtcContent = {
  heading: string;
  content: TsubTitle;
};
export type TtcContents = TtcContent[];
export type TpPContent = {
  heading?: string;
  content: TsubTitle;
};
export type TpPContents = TpPContent[];

export type TheadMetaData = {
  schemaData: object;
  title: string;
  description: string;
  pageUrl: string;
};

export type Tnavbar = {
  companyName: string;
  logo: string;
  ctas: TnavCtas;
  contactCta: Tcta;
};
export type TnavCtas = TnavCta[];
export type Tctas = Tcta[];

export type Tfooter = {
  column1: {
    logo: string;
    companyNAme: string;
    description: string;
  };
  column2: {
    title: string;
    ctas: Tctas;
  };
  column3: {
    title: string;
    ctas: Tctas;
  };
  column4: {
    title: string;
    subTitle: TsubTitle;
    address: TsubTitle;
    phoneno: string;
    mailid: string;
    contactCta: Tcta;
  };
  column5: {
    title: string;
    socialCta: TsocialCtas;
    subTitle: string;
  };
  bottom: {
    copyright: string;
    ctas: Tctas;
  };
};
export type TpricingMobilePlan = {
  id: number;
  name: string;
  price: string;
  users: string;
  features: {
    feature: string;
    icon: string;
  }[];
  cta: Tcta;
};
export type TpricingMobilePlans = TpricingMobilePlan[];

export type TproductPage = {
  slug: string;
  lang: string;
  productPageDetail: {
    layoutData: Tlayout;
    productHero: Thero;
    productTabs: Ttabs;
    contactSection: TcontactSection;
    subscribeSection: TsubscribeSection;
  };
};
export type ToverviewTab = {
  tabName: string;
  icon: string;
  tabBody: {
    content: ToverviewTabContent;
  };
  cta1: Tcta;
  cta2: Tcta;
};
export type TcustomerStoriesTab = {
  tabName: string;
  icon: string;
  tabBody: {
    content: TcustomerStoriesTabContent;
  };
  cta1: Tcta;
  cta2: Tcta;
};
export type Ttabs = [ToverviewTab];
export type ToverviewTabContent = {
  title: Ttitle;
  banner: {
    text: string;
    cta: Tcta;
  };
  features: {
    icon: string;
    featureName: string;
  }[];
  usps: {
    title: string;
    content: string;
    icon: string;
  }[];
  title2: Ttitle;
  featureDetails: TfeatureDetails;
};
export type TcustomerStoriesTabContent = {
  title: Ttitle;
  subTitle: TsubTitle;
  content: string;
  downloadCaseStudy: {
    title: Ttitle;
    content: TsubTitle;
    cta: Tcta;
    image: string;
  };
  hastags: string[];
  points: string[];
};
export type TproductIndustries = {
  title: string;
  subTitle: string;
  content: string;
  cta: Tcta;
  image: string;
  position: string;
}[];
export type Tusps = {
  title: string;
  subTitle: string;
  points: string[];
  cta: Tcta;
}[];
export type TcontactSection = {
  tag: string;
  title: string;
  subTitle: string;
  contactMenthos: {
    icon: string;
    contact: string;
    title: string;
    href: string;
  }[];
};
export type TsubscribeSection = {
  title: string;
  subTitle: string;
  inputField: string;
  cta1: Tcta;
  cta2: Tcta;
  inputPromo: string;
};
export type TproductsPageData = TproductPage[];

export type TfeatureCardBig = {
  cardTitle: string;
  usps: {
    text1: string;
    highlightedText1: string;
    highlightedText2?: string;
    text2?: string;
    text3?: string;
  };
  icon: string;
  cta1: Tcta;
  cta2: Tcta;
  ctaPosition?: string;
};
export type TfeatureCardsBig = TfeatureCardBig[];
export type TfeatureCardSmall = {
  cardTitle: string;
  usps: {
    text1: string;
    highlightedText1: string;
    highlightedText2?: string;
    text2?: string;
    text3?: string;
  };
  icon: string;
  integrationUsps1?: string;
  integrationUsps2?: string;
};
export type TfeatureCardsSmall = TfeatureCardSmall[];
export type TfeatureDetails = {
  featureCardBig: TfeatureCardsBig;
  featureCardsSmall: TfeatureCardsSmall;
};
export type TjobCard = {
  jobProfile: string;
  category: string;
  validity: string;
  cta: Tcta;
  tag:string,
  requirements: string[];
};
export type TjobCards = TjobCard[];
export type TjobSection = {
  title: Ttitle;
  subTitle: TsubTitle;
  cards: TjobCards;
};
export type TjobHighlight = {
  title: Ttitle;
  subTitle: TsubTitle;
  featuresBenefit: {
    title: string;
    content: string;
    icon:string,
  }[];
};
export type Tstat={
  data:string,
  title:string,
}
export type Tstats=Tstat[]
export type TjobsPage = {
  lang: string;
  layoutData: Tlayout;
  heroSection: Thero;
  statsSection:Tstats;
  jobsSection: TjobSection;
  whyLMNAs: TjobHighlight;
  contactSection: TcontactSection;
};
export type TjobsPageData = TjobsPage[];
