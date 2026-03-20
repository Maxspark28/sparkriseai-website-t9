export type Lang = 'en' | 'es'

export const translations = {
  en: {
    nav: {
      scarcityBar: '⚡ Only 3 onboarding spots open this month — ',
      scarcityLink: "claim yours before they're gone",
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      about: 'About',
      faq: 'FAQ',
      bookCta: 'Book Free Audit',
    },
    hero: {
      badge: 'AI Lead Automation for Med Spas',
      headlinePart1: 'Your Med Spa Is Losing Revenue',
      headlinePart2: 'Every Hour Leads Wait.',
      sub: 'SparkRise AI builds automated follow-up and reactivation systems for med spas — so no lead goes cold and no past client stays forgotten.',
      primaryCta: 'Book Your Free Revenue Leak Audit',
      secondaryCta: 'Claim Your Free Reactivation Campaign',
      proof: [
        '30-Day Guarantee',
        'Bilingual AI (EN + ES)',
        'Live in 5 Days',
        '47+ Leads Reactivated',
      ],
    },
    problem: {
      heading: 'Every Delay Costs You a Booking',
      sub: 'Most med spas lose revenue not from bad service — but from gaps in the follow-up process.',
      cards: [
        {
          title: 'No System to Respond in Time',
          body: "A new lead submits a form or messages your practice. Without automated follow-up, the window closes in minutes — and they book with whoever responds first.",
        },
        {
          title: 'Past Clients Left Uncontacted',
          body: "There are hundreds — maybe thousands — of past clients who visited once and never returned. Without a reactivation system, that revenue stays off the table.",
        },
        {
          title: 'Follow-Up Falls Through the Cracks',
          body: "Med spas run on lean teams. When there's no dedicated automation handling outreach, follow-up gets deprioritized — not because anyone dropped the ball, but because the tools weren't there.",
        },
      ],
    },
    howItWorks: {
      heading: 'How It Works',
      sub: 'Live in 5 days. Built around your med spa. Zero disruption to your workflow.',
      steps: [
        {
          title: 'Capture',
          desc: 'AI captures every new inquiry — web form, social DM, phone call — the moment it comes in, 24/7.',
        },
        {
          title: 'Follow Up',
          desc: 'Instant SMS and email follow-up in under 5 minutes. Your AI never sleeps, never forgets.',
        },
        {
          title: 'Book',
          desc: 'Qualified leads land directly on your calendar. You just show up and deliver the service.',
        },
      ],
    },
    pricing: {
      heading: 'Simple, Transparent Pricing',
      sub: 'No hidden fees. No long-term contracts. Cancel anytime.',
      popular: 'Most Popular',
      setup: 'setup',
      tiers: [
        {
          tier: 'Entry',
          name: 'AI Voice Agent',
          setup: '$997',
          monthly: '$497/mo',
          description: 'Your front desk never sleeps. AI answers calls, qualifies leads, and books appointments 24/7. Live in 5 days.',
          features: [
            'AI phone answering 24/7',
            'Lead qualification scripts',
            'Appointment booking automation',
            'Calendar integration',
            'Live in 5 days',
          ],
          cta: 'Get Started',
          popular: false,
        },
        {
          tier: 'Core',
          name: 'Revenue Recovery System',
          setup: '$2,997',
          monthly: '$1,497/mo',
          description: 'Full AI follow-up + dead database reactivation. Turns your dormant past-client list into booked appointments. 30-day guarantee.',
          features: [
            'Everything in AI Voice Agent',
            'AI SMS + email follow-up',
            'Dead database reactivation',
            'Bilingual English + Spanish',
            '30-day results guarantee',
            'Weekly revenue report',
          ],
          cta: 'Get Started',
          popular: true,
        },
        {
          tier: 'Premium',
          name: 'Full AI Growth System',
          setup: '$5,997',
          monthly: '$2,997/mo',
          description: 'Complete AI infrastructure — voice, SMS, email, reactivation, bilingual support, reporting. Built, managed, and optimized for you.',
          features: [
            'Everything in Revenue Recovery',
            'Google review automation',
            'Advanced reporting dashboard',
            'Monthly strategy call',
            'Priority support',
            'Done-for-you management',
          ],
          cta: 'Get Started',
          popular: false,
        },
      ],
      freeOffer: {
        heading: 'Not ready to commit? Let us prove it first — free.',
        body: "We'll run a full Dead Database Reactivation Campaign on your dormant past-client list at zero cost. No strings attached. No pitch. Just results. If it works, we talk.",
        cta: 'Claim Your Free Reactivation Campaign',
      },
    },
    founder: {
      heading: 'Built by Someone Who Gets It',
      name: 'Cristian González Rivera',
      title: 'Founder, SparkRise AI',
      bio: 'Born in Puerto Rico, built in Northern Virginia. Cristian founded SparkRise AI after watching small business owners burn hours on manual follow-up while leads went cold and revenue walked out the door. An early AI adopter since the ChatGPT era, he builds systems that give med spa owners their time — and their revenue — back.',
      location: 'Loudoun County, VA · Bilingual (English + Spanish) · Husband & Father',
    },
    guarantee: {
      heading: 'Our 30-Day Results Guarantee',
      body: "If you don't book at least one appointment in your first 30 days, we keep working for free — no questions asked — until you do.",
      items: ['No long-term contracts', 'Cancel anytime', 'Live in 5 business days'],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      sub: 'Everything you need to know before booking a call.',
      items: [
        {
          q: 'How fast does the AI follow up with new leads?',
          a: 'Under 5 minutes, every time — 24 hours a day, 7 days a week, including weekends and holidays. The research is clear: leads go cold after 5 minutes. Your AI never misses the window.',
        },
        {
          q: 'Does this work specifically for med spas?',
          a: 'Yes. Our system is built around how med spas operate — appointment-based, relationship-driven, and often understaffed at the front desk. We handle follow-up and reactivation for Botox, filler, laser, and wellness services.',
        },
        {
          q: 'How long does it take to go live?',
          a: 'Most clients are fully live within 5 business days. We handle the entire setup — AI configuration, calendar integration, and reactivation campaign — so you stay focused on your clients.',
        },
        {
          q: 'What is the Dead Database Reactivation Campaign?',
          a: "It's a targeted outreach to your existing past-client list — people who came in once and never returned. We identify them, craft personalized messages, and get them back in your chair. The free version is performance-based: we run it, you keep the bookings.",
        },
        {
          q: "What happens if I don't get results?",
          a: "We back every engagement with a 30-day guarantee. If you don't book a single appointment in the first 30 days, we keep working for free until you do. We only win when you win.",
        },
        {
          q: 'Does the AI work in Spanish?',
          a: 'Yes. Our AI is fully bilingual in English and Spanish — a significant advantage for med spas serving diverse communities in Northern Virginia and nationwide. No extra setup required.',
        },
      ],
    },
    finalCta: {
      heading: 'Ready to Stop Losing Med Spa Revenue?',
      body: "Find out exactly how many leads you're losing — and what it's costing you — in a free 30-minute audit.",
      cta: 'Book Your Free Revenue Leak Audit',
      sub: 'Free. No commitment. 30 minutes.',
    },
    footer: {
      tagline: 'Serving Northern Virginia and businesses nationwide.',
      rights: `© ${new Date().getFullYear()} SparkRise AI. All rights reserved.`,
      links: {
        howItWorks: 'How It Works',
        pricing: 'Pricing',
        about: 'About',
        faq: 'FAQ',
      },
    },
    modal: {
      heading: 'Claim Your Free Reactivation Campaign',
      sub: "Tell us about your med spa. We'll run a reactivation campaign on your past-client list at zero cost.",
    },
  },

  es: {
    nav: {
      scarcityBar: '⚡ Solo 3 cupos de incorporación disponibles este mes — ',
      scarcityLink: 'reclama el tuyo antes de que se agoten',
      howItWorks: 'Cómo Funciona',
      pricing: 'Precios',
      about: 'Nosotros',
      faq: 'Preguntas',
      bookCta: 'Reserva tu Auditoría',
    },
    hero: {
      badge: 'Automatización de Leads con IA para Spas Médicos',
      headlinePart1: 'Tu Spa Médico Está Perdiendo Ingresos',
      headlinePart2: 'Mientras los Leads Esperan.',
      sub: 'SparkRise AI construye sistemas automatizados de seguimiento y reactivación para spas médicos — para que ningún lead se enfríe y ningún cliente pasado quede olvidado.',
      primaryCta: 'Reserva tu Auditoría de Fugas de Ingresos',
      secondaryCta: 'Reclama tu Campaña de Reactivación Gratis',
      proof: [
        'Garantía de 30 Días',
        'IA Bilingüe (EN + ES)',
        'Activo en 5 Días',
        '47+ Leads Reactivados',
      ],
    },
    problem: {
      heading: 'Cada Retraso Te Cuesta una Reserva',
      sub: 'La mayoría de los spas médicos pierden ingresos no por mal servicio — sino por vacíos en el proceso de seguimiento.',
      cards: [
        {
          title: 'Sin Sistema para Responder a Tiempo',
          body: 'Un nuevo lead envía un formulario o escribe al consultorio. Sin seguimiento automatizado, la ventana se cierra en minutos — y reservan con quien responde primero.',
        },
        {
          title: 'Clientes Pasados sin Contactar',
          body: 'Hay cientos — tal vez miles — de clientes pasados que visitaron una vez y nunca regresaron. Sin un sistema de reactivación, esos ingresos se quedan sin aprovechar.',
        },
        {
          title: 'El Seguimiento Se Pierde en el Proceso',
          body: 'Los spas médicos operan con equipos reducidos. Cuando no hay automatización dedicada al alcance, el seguimiento se posterga — no porque alguien falle, sino porque las herramientas no estaban.',
        },
      ],
    },
    howItWorks: {
      heading: 'Cómo Funciona',
      sub: 'Activo en 5 días. Diseñado para tu spa médico. Sin interrupciones en tu flujo de trabajo.',
      steps: [
        {
          title: 'Captura',
          desc: 'La IA captura cada nueva consulta — formulario web, mensaje directo, llamada — en el momento en que llega, las 24/7.',
        },
        {
          title: 'Seguimiento',
          desc: 'Seguimiento instantáneo por SMS y correo en menos de 5 minutos. Tu IA nunca duerme, nunca olvida.',
        },
        {
          title: 'Reserva',
          desc: 'Los leads calificados llegan directamente a tu calendario. Tú solo apareces y ofreces el servicio.',
        },
      ],
    },
    pricing: {
      heading: 'Precios Simples y Transparentes',
      sub: 'Sin cargos ocultos. Sin contratos a largo plazo. Cancela cuando quieras.',
      popular: 'Más Popular',
      setup: 'configuración',
      tiers: [
        {
          tier: 'Básico',
          name: 'Agente de Voz IA',
          setup: '$997',
          monthly: '$497/mes',
          description: 'Tu recepción nunca duerme. La IA atiende llamadas, califica leads y reserva citas las 24/7. Activo en 5 días.',
          features: [
            'Atención telefónica IA 24/7',
            'Scripts de calificación de leads',
            'Automatización de reservas',
            'Integración de calendario',
            'Activo en 5 días',
          ],
          cta: 'Comenzar',
          popular: false,
        },
        {
          tier: 'Principal',
          name: 'Sistema de Recuperación de Ingresos',
          setup: '$2,997',
          monthly: '$1,497/mes',
          description: 'Seguimiento IA completo + reactivación de base de datos dormida. Convierte tu lista de clientes pasados en citas reservadas. Garantía de 30 días.',
          features: [
            'Todo en Agente de Voz IA',
            'Seguimiento IA por SMS y email',
            'Reactivación de base de datos',
            'Bilingüe Inglés + Español',
            'Garantía de resultados 30 días',
            'Informe semanal de ingresos',
          ],
          cta: 'Comenzar',
          popular: true,
        },
        {
          tier: 'Premium',
          name: 'Sistema Completo de Crecimiento IA',
          setup: '$5,997',
          monthly: '$2,997/mes',
          description: 'Infraestructura IA completa — voz, SMS, email, reactivación, soporte bilingüe, reportes. Construido, gestionado y optimizado por nosotros.',
          features: [
            'Todo en Sistema de Recuperación',
            'Automatización de reseñas de Google',
            'Panel de reportes avanzado',
            'Llamada estratégica mensual',
            'Soporte prioritario',
            'Gestión completamente delegada',
          ],
          cta: 'Comenzar',
          popular: false,
        },
      ],
      freeOffer: {
        heading: '¿No estás listo para comprometerte? Déjanos probarlo primero — gratis.',
        body: 'Ejecutaremos una Campaña de Reactivación de Base de Datos Dormida en tu lista de clientes pasados sin costo. Sin condiciones. Sin presión. Solo resultados. Si funciona, hablamos.',
        cta: 'Reclama tu Campaña de Reactivación Gratis',
      },
    },
    founder: {
      heading: 'Construido por Alguien que Entiende el Problema',
      name: 'Cristian González Rivera',
      title: 'Fundador, SparkRise AI',
      bio: 'Nacido en Puerto Rico, construido en el Norte de Virginia. Cristian fundó SparkRise AI después de ver a dueños de negocios perder horas en seguimientos manuales mientras los leads se enfriaban y los ingresos se iban. Adoptante temprano de IA desde la era de ChatGPT, construye sistemas que devuelven a los dueños de spas médicos su tiempo — y sus ingresos.',
      location: 'Loudoun County, VA · Bilingüe (Inglés + Español) · Esposo y Padre',
    },
    guarantee: {
      heading: 'Nuestra Garantía de Resultados de 30 Días',
      body: 'Si no reservas al menos una cita en tus primeros 30 días, seguimos trabajando gratis — sin preguntas — hasta que lo hagas.',
      items: ['Sin contratos a largo plazo', 'Cancela cuando quieras', 'Activo en 5 días hábiles'],
    },
    faq: {
      heading: 'Preguntas Frecuentes',
      sub: 'Todo lo que necesitas saber antes de reservar una llamada.',
      items: [
        {
          q: '¿Qué tan rápido hace seguimiento la IA con nuevos leads?',
          a: 'En menos de 5 minutos, siempre — 24 horas al día, 7 días a la semana, incluidos fines de semana y festivos. Los leads se enfrían después de 5 minutos. Tu IA nunca pierde la ventana.',
        },
        {
          q: '¿Funciona específicamente para spas médicos?',
          a: 'Sí. Nuestro sistema está diseñado alrededor de cómo operan los spas médicos — basados en citas, orientados a relaciones, y a menudo con poco personal en recepción. Manejamos seguimiento y reactivación para Botox, rellenos, láser y servicios de bienestar.',
        },
        {
          q: '¿Cuánto tiempo toma ponerse en marcha?',
          a: 'La mayoría de los clientes están completamente activos en 5 días hábiles. Manejamos toda la configuración — IA, integración de calendario y campaña de reactivación — para que puedas enfocarte en tus clientes.',
        },
        {
          q: '¿Qué es la Campaña de Reactivación de Base de Datos Dormida?',
          a: 'Es un alcance dirigido a tu lista de clientes pasados — personas que vinieron una vez y nunca regresaron. Los identificamos, creamos mensajes personalizados y los traemos de vuelta. La versión gratuita es basada en rendimiento: nosotros la ejecutamos, tú te quedas con las reservas.',
        },
        {
          q: '¿Qué pasa si no obtengo resultados?',
          a: 'Respaldamos cada compromiso con una garantía de 30 días. Si no reservas ni una cita en los primeros 30 días, seguimos trabajando gratis hasta que lo hagas. Solo ganamos cuando tú ganas.',
        },
        {
          q: '¿La IA funciona en español?',
          a: 'Sí. Nuestra IA es completamente bilingüe en inglés y español — una ventaja significativa para spas médicos que sirven a comunidades diversas en el Norte de Virginia y en todo el país. Sin configuración adicional.',
        },
      ],
    },
    finalCta: {
      heading: '¿Listo para Dejar de Perder Ingresos en tu Spa Médico?',
      body: 'Descubre exactamente cuántos leads estás perdiendo — y cuánto te está costando — en una auditoría gratuita de 30 minutos.',
      cta: 'Reserva tu Auditoría de Fugas de Ingresos',
      sub: 'Gratis. Sin compromiso. 30 minutos.',
    },
    footer: {
      tagline: 'Sirviendo al Norte de Virginia y negocios en todo el país.',
      rights: `© ${new Date().getFullYear()} SparkRise AI. Todos los derechos reservados.`,
      links: {
        howItWorks: 'Cómo Funciona',
        pricing: 'Precios',
        about: 'Nosotros',
        faq: 'Preguntas',
      },
    },
    modal: {
      heading: 'Reclama tu Campaña de Reactivación Gratis',
      sub: 'Cuéntanos sobre tu spa médico. Ejecutaremos una campaña de reactivación en tu lista de clientes pasados sin costo.',
    },
  },
} as const
