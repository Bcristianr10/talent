"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }
const whatsappLink =
    "https://wa.me/50767397874?text=Hola%2C%20quisiera%20recibir%20información%20sobre%20los%20servicios%20de%20RS%20Human%20Talent"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,180,150,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,200,170,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                RS Human Talent                
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Conectando el talento correcto con las oportunidades correctas
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Reclutamiento y selección  de personal.
              </p>
            </div>

            {/* Inspirational quote */}
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg italic text-foreground/80 text-pretty">
                "Encuentra el Talento Ideal para tu Empresa."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg"
              >
                Contáctanos
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(whatsappLink, "_blank")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-6 text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hablemos por WhatsApp
              </Button>
            </div>
          </div>

          {/* Right content - Professional photo placeholder */}
          <div className={`relative ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/Rs-Talent.jpeg" alt="RS Human Talent" className="object-cover w-full h-full" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
