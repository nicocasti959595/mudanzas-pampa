import { site } from "./site";
import { faqs } from "./content";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${site.url}/#business`,
    name: site.brandFull,
    description:
      "Empresa de fletes y mudanzas en CABA y Gran Buenos Aires. Mudanzas de hogar y oficina, embalaje, armado de muebles, guardamuebles e izaje por balcón.",
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
      { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
      { "@type": "Country", name: "Argentina" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressStreet,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
    },
    sameAs: [site.instagram, site.facebook],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
