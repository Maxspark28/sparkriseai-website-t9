import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Linkedin } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CalButton } from "@/components/cal-button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "About Cristian González Rivera",
  description:
    "Meet Cristian González Rivera, founder of SparkRise AI — building AI automation systems that help Northern Virginia service businesses book more appointments.",
  openGraph: {
    type: "profile",
    title: "About Cristian González Rivera | SparkRise AI",
    description:
      "Meet Cristian González Rivera, founder of SparkRise AI — building AI automation systems for Northern Virginia service businesses.",
    url: "https://sparkriseai.com/about",
    images: [
      {
        url: "/founder.jpg",
        width: 480,
        height: 560,
        alt: "Cristian González Rivera — Founder, SparkRise AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Cristian González Rivera | SparkRise AI",
    description:
      "Meet Cristian González Rivera, founder of SparkRise AI — building AI automation systems for Northern Virginia service businesses.",
    images: ["/founder.jpg"],
  },
  alternates: {
    canonical: "https://sparkriseai.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Founder Hero */}
      <section className="px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
                <Image
                  src="/founder.jpg"
                  alt="Cristian González Rivera — Founder, SparkRise AI"
                  width={480}
                  height={560}
                  className="h-auto w-full max-w-sm object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--orange)]">
                Meet the Founder
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Cristian González Rivera</h1>
              <p className="mt-1 text-lg text-muted-foreground">Founder, SparkRise AI</p>

              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Born in Puerto Rico and raised in Springfield, Massachusetts, Cristian is a husband,
                  father, and problem-solver at his core. He built SparkRise AI out of a genuine
                  obsession with figuring out how things work — and an even stronger drive to make those
                  things useful for real people running real businesses.
                </p>
                <p>
                  When AI first started gaining traction, Cristian was already in it — experimenting
                  from the early days of ChatGPT, through automation workflows, and into building voice
                  agents and backend systems from the ground up. He didn&apos;t wait for it to become
                  mainstream. He learned it while it was still being figured out.
                </p>
                <p>
                  That depth is what separates SparkRise from the noise. Cristian bridges the gap
                  between fast-moving technology and the business owners who need it most — translating
                  complex systems into results that are practical, bilingual, and built to last.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--orange)]/90">
                  Book a Call with Cristian
                  <ArrowRight className="h-4 w-4" />
                </CalButton>
                <a
                  href="https://www.linkedin.com/in/cristian-gonzalez-rivera-4b1632201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8" id="contact">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Prefer email over a call? Fill out the form and we'll get back to you within 5 minutes."}
            </p>
          </div>
          <Card className="mt-12 border-border bg-card">
            <CardContent className="p-6 sm:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
