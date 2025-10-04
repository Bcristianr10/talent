"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    position: "Directora de RRHH",
    company: "Empresa Tecnológica",
    text: "Yaneth transformó completamente nuestro proceso de selección. Su profesionalismo y dedicación nos ayudaron a encontrar el talento que necesitábamos.",
  },
  {
    name: "Carlos Mendoza",
    position: "CEO",
    company: "Startup Innovadora",
    text: "El enfoque personalizado y estratégico de Yaneth fue clave para construir nuestro equipo fundador. Altamente recomendada.",
  },
  {
    name: "Ana Rodríguez",
    position: "Gerente General",
    company: "Corporación Internacional",
    text: "Trabajar con Yaneth fue una experiencia excepcional. Su ética profesional y resultados hablan por sí solos.",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="testimonios" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Casos de Éxito</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Lo que dicen quienes han confiado en mis servicios
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-2 hover:shadow-lg transition-all duration-300 ${
                isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-foreground/80 mb-6 leading-relaxed text-pretty">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
