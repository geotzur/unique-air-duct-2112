import { company, services, areas } from '@/lib/data';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://uniqueairduct.com';

type Crumb = { name: string; url: string };

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Primary LocalBusiness schema for Unique Air Duct (Air Duct Cleaning / HVAC).
 * Uses HVACBusiness — the most specific schema type for air duct cleaners.
 */
export function LocalBusinessJsonLd({
  areaName,
}: {
  areaName?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${BASE}/#business`,
    name: company.name,
    description: company.tagline,
    url: BASE,
    telephone: company.phone,
    email: company.email,
    image: `${BASE}/logo.jpg`,
    logo: `${BASE}/logo.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8432 NW 36th Street, Suite 210',
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: '33166',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.7617,
      longitude: -80.1918,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: 127,
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    areaServed: areaName
      ? [{ '@type': 'City', name: areaName }]
      : areas.map(a => ({ '@type': 'City', name: a.name })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 25.7617,
        longitude: -80.1918,
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Air Duct & HVAC Cleaning Services',
      itemListElement: services.map(s => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: `${BASE}/services/${s.slug}/`,
        },
      })),
    },
    sameAs: [],
  };
  return <Script data={data} />;
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: company.name,
    url: BASE,
    logo: `${BASE}/logo.jpg`,
    telephone: company.phone,
    email: company.email,
    foundingDate: company.year_established,
    description: company.tagline,
  };
  return <Script data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    url: BASE,
    name: company.name,
    publisher: { '@id': `${BASE}/#organization` },
    inLanguage: 'en-US',
  };
  return <Script data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  slug,
  areaName,
}: {
  name: string;
  description: string;
  slug: string;
  areaName?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: areaName ? `${name} in ${areaName}` : name,
    serviceType: name,
    description,
    url: areaName
      ? `${BASE}/areas/${areaName.toLowerCase().replace(/\s+/g, '-')}/${slug}/`
      : `${BASE}/services/${slug}/`,
    provider: {
      '@type': 'HVACBusiness',
      '@id': `${BASE}/#business`,
      name: company.name,
      telephone: company.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: company.city,
        addressRegion: company.state,
        addressCountry: 'US',
      },
    },
    areaServed: areaName
      ? { '@type': 'City', name: areaName }
      : { '@type': 'State', name: company.state_full },
  };
  return <Script data={data} />;
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
  return <Script data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url.startsWith('http') ? it.url : `${BASE}${it.url}`,
    })),
  };
  return <Script data={data} />;
}

export function ArticleJsonLd({
  headline,
  description,
  slug,
  category,
  datePublished,
}: {
  headline: string;
  description: string;
  slug: string;
  category?: string;
  datePublished?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    articleSection: category,
    datePublished: datePublished ?? '2024-01-15',
    dateModified: datePublished ?? '2024-01-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE}/blog/${slug}/`,
    },
    author: {
      '@type': 'Organization',
      name: company.name,
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/logo.jpg`,
      },
    },
  };
  return <Script data={data} />;
}
