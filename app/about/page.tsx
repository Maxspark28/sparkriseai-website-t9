import { Zap, Linkedin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 no-underline group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary">
                <Zap className="h-5 w-5 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-primary opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
              </div>
              <span className="text-xl font-bold text-foreground">SparkRise AI</span>
            </Link>
          </div>
          <Link href="/">
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* About Section */}
      <section className="relative px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[128px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">About the Founder</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Meet the Mind Behind
              <br />
              <span className="bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent">
                SparkRise AI
              </span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Founder Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/founder.jpeg"
                  alt="Cristian González Rivera — Founder, SparkRise AI"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-accent/20 to-primary/20 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
              </div>
            </div>

            {/* Bio Section */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Cristian González Rivera</h2>
              <p className="text-accent font-medium mb-6">Founder, SparkRise AI</p>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Born in Puerto Rico and raised in Springfield, Massachusetts, Cristian is a husband, father, and problem-solver at his core. He built SparkRise AI out of a genuine obsession with figuring out how things work — and an even stronger drive to make those things useful for real people running real businesses.
                </p>
                <p>
                  When AI first started gaining traction, Cristian was already in it — experimenting from the early days of ChatGPT, through automation workflows, and into building voice agents and backend systems from the ground up. He didn&apos;t wait for it to become mainstream. He learned it while it was still being figured out.
                </p>
                <p>
                  That depth is what separates SparkRise from the noise. Cristian bridges the gap between fast-moving technology and the business owners who need it most — translating complex systems into results that are practical, bilingual, and built to last.
                </p>
              </div>

              <a
                href="https://linkedin.com/in/cristian-gonzalez-rivera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white font-semibold rounded-full px-6 shadow-[0_0_20px_rgba(10,102,194,0.3)]">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-1">Built for home service businesses across the country · Bilingual AI (EN + ES)</p>
          <p>&copy; 2026 SparkRise AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
