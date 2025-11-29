interface LocalBusinessSchemaProps {
  businessName: string;
  industryName: string;
  cityName: string;
  areaName: string;
  countryName: string;
  description: string;
}

export default function LocalBusinessSchema({
  businessName,
  industryName,
  cityName,
  areaName,
  countryName,
  description
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${industryName} in ${areaName}, ${cityName}`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": areaName,
      "addressCountry": countryName
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "",
      "longitude": ""
    },
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "telephone": "+1-234-567-890",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
