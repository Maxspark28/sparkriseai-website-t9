const siteUrl = "https://sparkriseai.com"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "SparkRise AI",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/icon.svg`,
  },
  description:
    "SparkRise AI builds AI systems that book appointments while you sleep. Founded by Cristian González Rivera.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Northern Virginia",
  },
  sameAs: [],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "SparkRise AI",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  description:
    "AI lead automation agency serving Northern Virginia — HVAC, dental, real estate, and other service-based businesses. Leads followed up in under 5 minutes, 24/7.",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Fairfax" },
    { "@type": "City", name: "Arlington" },
    { "@type": "City", name: "Alexandria" },
    { "@type": "County", name: "Loudoun County" },
    { "@type": "County", name: "Prince William County" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "VA",
    addressCountry: "US",
  },
}

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SparkRise AI Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "AI SMS + Email Lead Follow-Up",
        description:
          "Instant AI-powered SMS and email follow-up within 5 minutes of a new lead, 24 hours a day, 7 days a week.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "Northern Virginia",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "AI Appointment Booking Automation",
        description:
          "Qualified leads automatically booked on your calendar. Integrates with Cal.com and major scheduling tools.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "Northern Virginia",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Dead Lead Reactivation",
        description:
          "AI-powered reactivation campaigns that turn your old lead database back into booked appointments.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "Northern Virginia",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Lead Qualification Chatbot",
        description:
          "Automated AI chatbot that pre-qualifies leads before they reach your calendar, filtering out low-quality prospects.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "Northern Virginia",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Google Review Automation",
        description:
          "Automated review request sequences to boost your Google rating and online reputation.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "Northern Virginia",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Bilingual English/Spanish AI",
        description:
          "Fully bilingual AI follow-up system in English and Spanish, helping Northern Virginia businesses serve a broader market.",
        provider: { "@type": "Organization", name: "SparkRise AI" },
        areaServed: "Northern Virginia",
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
      name: "How fast does the AI follow up with new leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI responds to new leads in under 5 minutes, 24 hours a day, 7 days a week — including weekends and holidays. Studies show leads go cold after just 5 minutes, so speed is everything.",
      },
    },
    {
      "@type": "Question",
      name: "What types of businesses do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with service-based businesses in Northern Virginia and the DMV area — including HVAC, dental practices, real estate agents, home services, law firms, and more. If you rely on appointments to generate revenue, we can help.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to go live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients are fully live within 5 business days. We handle the entire setup — AI configuration, CRM integration, and calendar connection — so you can focus on running your business.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't get results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We back every engagement with a 30-day guarantee. If you don't book a single appointment in the first 30 days, we keep working for free until you do. We only win when you win.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to change my existing software or CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our system integrates with the tools you already use — GoHighLevel, HubSpot, Salesforce, and most major CRMs. We connect to your existing workflow rather than replacing it.",
      },
    },
    {
      "@type": "Question",
      name: "Does the AI work in Spanish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our AI is fully bilingual in English and Spanish, allowing you to serve a wider customer base in the Northern Virginia and DMV market without any extra effort.",
      },
    },
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "SparkRise AI | AI Lead Automation Agency | Northern Virginia",
  description:
    "SparkRise AI builds AI systems that book appointments while you sleep. Founded by Cristian González Rivera.",
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
