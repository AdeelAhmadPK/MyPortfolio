export interface CountryContent {
  heroDescription: string;
  whyChoose: {
    title: string;
    points: string[];
  };
  stats: {
    label: string;
    value: string;
  }[];
}

export const countryContent: Record<string, CountryContent> = {
  'us': {
    heroDescription: "Transform your American business with data-driven SEO strategies. From Silicon Valley startups to Main Street businesses, I help companies across all 50 states dominate their local markets and achieve sustainable online growth.",
    whyChoose: {
      title: "Why Choose Our US SEO Services?",
      points: [
        "Deep understanding of American consumer behavior and search patterns",
        "Expertise in competitive US markets from New York to Los Angeles",
        "Proven track record with 500+ successful US business transformations",
        "Advanced local SEO for multi-location businesses across states",
        "Compliance with US digital marketing regulations and best practices"
      ]
    },
    stats: [
      { label: "US Cities Covered", value: "150+" },
      { label: "US Rankings #1", value: "2,400+" },
      { label: "Average Traffic Growth", value: "285%" },
      { label: "Client Retention", value: "96%" }
    ]
  },
  'uk': {
    heroDescription: "Elevate your British business with cutting-edge SEO solutions tailored for the UK market. From London's competitive landscape to regional markets across England, Scotland, Wales, and Northern Ireland, I deliver results that matter.",
    whyChoose: {
      title: "Why Choose Our UK SEO Services?",
      points: [
        "Deep knowledge of UK search behavior and regional preferences",
        "Experience with British English optimization and local terminology",
        "Expertise in competitive UK markets from London to Manchester",
        "Understanding of UK consumer protection laws and advertising standards",
        "Proven success with 300+ UK businesses across all sectors"
      ]
    },
    stats: [
      { label: "UK Cities Covered", value: "85+" },
      { label: "UK Rankings #1", value: "1,850+" },
      { label: "Average ROI Increase", value: "320%" },
      { label: "Years in UK Market", value: "8+" }
    ]
  },
  'ca': {
    heroDescription: "Boost your Canadian business with bilingual SEO expertise. From Toronto's bustling market to Vancouver's tech scene, I understand the unique challenges of ranking in Canada's diverse, multicultural marketplace.",
    whyChoose: {
      title: "Why Choose Our Canadian SEO Services?",
      points: [
        "Bilingual SEO expertise for English and French markets",
        "Understanding of regional differences across provinces",
        "Experience with Canadian search behavior and preferences",
        "Knowledge of Canadian advertising standards and regulations",
        "Proven success with 200+ Canadian businesses coast to coast"
      ]
    },
    stats: [
      { label: "Canadian Cities", value: "60+" },
      { label: "Bilingual Campaigns", value: "150+" },
      { label: "Traffic Growth", value: "295%" },
      { label: "Client Success Rate", value: "94%" }
    ]
  },
  'au': {
    heroDescription: "Grow your Australian business with SEO strategies designed for the unique Aussie market. From Sydney to Perth, I help businesses across Australia achieve top rankings and sustainable online growth.",
    whyChoose: {
      title: "Why Choose Our Australian SEO Services?",
      points: [
        "Deep understanding of Australian consumer search patterns",
        "Experience across major cities from Sydney to Brisbane",
        "Knowledge of Australian English and local terminology",
        "Expertise in seasonal trends unique to the Southern Hemisphere",
        "Proven results with 180+ successful Australian businesses"
      ]
    },
    stats: [
      { label: "Australian Cities", value: "45+" },
      { label: "Rankings Achieved", value: "1,650+" },
      { label: "Average Traffic Boost", value: "310%" },
      { label: "Client Retention", value: "95%" }
    ]
  },
  'pk': {
    heroDescription: "Transform your Pakistani business with localized SEO strategies. From Karachi's bustling markets to Lahore's business districts, I help companies dominate local search and reach customers across all major cities of Pakistan.",
    whyChoose: {
      title: "Why Choose Our Pakistan SEO Services?",
      points: [
        "Native understanding of Pakistani market dynamics and consumer behavior",
        "Expertise in both English and Urdu content optimization",
        "Deep knowledge of local competition across Pakistani cities",
        "Experience with Pakistan's growing e-commerce ecosystem",
        "Proven track record with 150+ successful Pakistani businesses"
      ]
    },
    stats: [
      { label: "Pakistani Cities", value: "35+" },
      { label: "Local Rankings", value: "1,200+" },
      { label: "Business Growth", value: "275%" },
      { label: "Success Stories", value: "150+" }
    ]
  },
  'in': {
    heroDescription: "Scale your Indian business with SEO strategies built for India's diverse digital landscape. From Mumbai to Bangalore, Delhi to Chennai, I help businesses navigate India's complex, multilingual market and achieve remarkable growth.",
    whyChoose: {
      title: "Why Choose Our India SEO Services?",
      points: [
        "Expertise in multilingual SEO across major Indian languages",
        "Deep understanding of regional market variations and preferences",
        "Experience with India's rapidly evolving digital economy",
        "Knowledge of local search behavior across metro and tier-2 cities",
        "Proven success with 250+ Indian businesses across all sectors"
      ]
    },
    stats: [
      { label: "Indian Cities", value: "100+" },
      { label: "Languages Optimized", value: "12+" },
      { label: "Rankings Achieved", value: "2,100+" },
      { label: "Average Growth", value: "340%" }
    ]
  },
  'de': {
    heroDescription: "Expand your German business with precision-engineered SEO solutions. From Berlin's startup scene to Munich's corporate landscape, I deliver results in Germany's quality-focused market with data-driven strategies.",
    whyChoose: {
      title: "Why Choose Our Germany SEO Services?",
      points: [
        "Native German language optimization and cultural understanding",
        "Expertise in Germany's quality-focused search landscape",
        "Understanding of German consumer behavior and privacy regulations (GDPR)",
        "Experience across major German cities and industrial regions",
        "Proven success with 120+ German businesses and international companies"
      ]
    },
    stats: [
      { label: "German Cities", value: "50+" },
      { label: "GDPR-Compliant Campaigns", value: "100%" },
      { label: "Rankings Achieved", value: "1,400+" },
      { label: "B2B Success Rate", value: "92%" }
    ]
  },
  'fr': {
    heroDescription: "Grow your French business with sophisticated SEO strategies tailored for the French market. From Paris to Lyon, Marseille to Toulouse, I help businesses achieve excellence in France's refined digital landscape.",
    whyChoose: {
      title: "Why Choose Our France SEO Services?",
      points: [
        "Native French language expertise and cultural sensitivity",
        "Understanding of French consumer preferences and search behavior",
        "Experience with France's unique digital regulations and standards",
        "Knowledge of regional variations across French territories",
        "Proven track record with 110+ successful French businesses"
      ]
    },
    stats: [
      { label: "French Cities", value: "45+" },
      { label: "French Keywords Ranked", value: "1,350+" },
      { label: "Traffic Increase", value: "305%" },
      { label: "Client Satisfaction", value: "97%" }
    ]
  }
};

export function getCountryContent(countryCode: string): CountryContent {
  return countryContent[countryCode] || countryContent['us'];
}
