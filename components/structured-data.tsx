const siteUrl = "https://sparkriseai.com"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: "SparkRise AI",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/icon.svg`,
  },
  description:
    "SparkRise AI is an AI lead automation and reactivation agency for med spas. We build automated follow-up, dead database reactivation, and AI voice systems that recover lost revenue for med spa owners.",
  founder: {
    "@type": "Person",
    name: "Cristian González Rivera",
    jobTitle: "Founder",
    url: "https://www.linkedin.com/in/cristian-gonzalez-rivera-4b1632201",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Northern Virginia" },
    { "@type": "Country", name: "United States" },
  ],
  sameAs: ["https://www.linkedin.com/in/cristian-gonzalez-rivera-4b1632201"],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteUrl}/#localbusiness`,
  name: "SparkRise AI",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  description:
    "AI lead automation and reactivation agency for med spas — based in Loudoun County, Northern Virginia. Specializing in med spa lead follow-up, AI booking automation, and dead database reactivation. Serving med spas nationwide.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Loudoun County",
    addressRegion: "VA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.0837,
    longitude: -77.6535,
  },
  areaServed: [
    { "@type": "City", name: "Ashburn" },
    { "@type": "City", name: "Leesburg" },
    { "@type": "City", name: "Reston" },
    { "@type": "City", name: "Fairfax" },
    { "@type": "City", name: "Arlington" },
    { "@type": "City", name: "Alexandria" },
    { "@type": "County", name: "Loudoun County" },
    { "@type": "AdministrativeArea", name: "Northern Virginia" },
    { "@type": "Country", name: "United States" },
  ],
}

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SparkRise AI Services for Med Spas",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "AI Lead Follow-Up for Med Spas",
        description:
          "Instant AI-powered SMS and email follow-up within 5 minutes of a new med spa lead — 24 hours a day, 7 days a week.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "United States",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Med Spa Booking Automation",
        description:
          "Qualified med spa leads automatically booked on your calendar. Integrates with major scheduling tools.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "United States",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "AI Lead Reactivation for Med Spas",
        description:
          "AI-powered reactivation campaigns that turn your dormant past-client list back into booked appointments.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "United States",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "AI Voice Agent for Med Spas",
        description:
          "AI voice agent that answers calls, qualifies leads, and books appointments for med spas 24/7 — so no inquiry goes unanswered.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "United States",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Bilingual English/Spanish AI for Med Spas",
        description:
          "Fully bilingual AI follow-up system in English and Spanish for med spas serving diverse communities in Northern Virginia and nationwide.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "United States",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Google Review Automation",
        description:
          "Automated review request sequences to boost your med spa's Google rating and online reputation.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "United States",
      },
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How fast does the AI follow up with new med spa leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI responds to new leads in under 5 minutes, 24 hours a day, 7 days a week — including weekends and holidays. Studies show leads go cold after just 5 minutes, so speed is everything.",
      },
    },
    {
      "@type": "Question",
      name: "Does this AI automation work specifically for med spas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our system is built around how med spas operate — appointment-based, relationship-driven, and often understaffed at the front desk. We handle lead follow-up and reactivation for Botox, filler, laser, and wellness services.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take for a med spa to go live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most med spa clients are fully live within 5 business days. We handle the entire setup — AI configuration, calendar integration, and reactivation campaign — so you can stay focused on your clients.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Dead Database Reactivation Campaign for med spas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's a targeted AI outreach to your existing past-client list — people who came in once and never returned. We identify them, craft personalized messages, and get them back in your chair. We only win when you win.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a med spa doesn't get results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We back every engagement with a 30-day guarantee. If you don't book a single appointment in the first 30 days, we keep working for free until you do.",
      },
    },
    {
      "@type": "Question",
      name: "Does the AI work in Spanish for bilingual med spas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our AI is fully bilingual in English and Spanish — a significant advantage for med spas serving diverse communities in Northern Virginia and nationwide. No extra setup required.",
      },
    },
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "SparkRise AI | AI Lead Automation for Med Spas",
  description:
    "SparkRise AI helps med spas recover lost revenue with AI-powered lead follow-up, reactivation campaigns, and automated booking. Based in Northern Virginia. Serving med spas nationwide.",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-US",
}

export function StructuredData() {
  const schemas = [
    organizationSchema,
    localBusinessSchema,
    servicesSchema,
    faqSchema,
    webPageSchema,
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
