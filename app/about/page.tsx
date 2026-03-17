import { Zap, Linkedin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
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
        {/* Background Effects */}
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
            {/* Founder Photo Placeholder */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                {/* Placeholder for founder photo */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="text-center text-muted-foreground">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Zap className="h-10 w-10 text-accent/50" />
                    </div>
                    <p className="text-sm">Founder Photo</p>
                    <p className="text-xs text-muted-foreground/60">Coming Soon</p>
                  </div>
                </div>
                {/* Decorative gradient border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-accent/20 to-primary/20 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
              </div>
            </div>

            {/* Bio Section */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Founder Name</h2>
              <p className="text-accent font-medium mb-6">Founder & CEO, SparkRise AI</p>
              
              {/* Bio Placeholder */}
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Bio coming soon. This section will contain information about the founder's background, experience, and vision for SparkRise AI.
                </p>
                <p>
                  Learn about the journey that led to creating Northern Virginia's premier AI lead automation agency and the mission to help service businesses thrive.
                </p>
              </div>

              {/* LinkedIn Button */}
              <a 
                href="https://linkedin.com" 
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
          <p>&copy; {new Date().getFullYear()} SparkRise AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
