"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    position: "Directora de Recursos Humanos",
    company: "Grupo Empresarial del Pacífico",
    text: "RS Human Talent optimizó nuestro proceso de reclutamiento de manera extraordinaria. Su capacidad para identificar talento alineado a nuestra cultura organizacional marcó una diferencia significativa.",
  },
  {
    name: "Carlos Mendoza",
    position: "CEO",
    company: "InnovaTech Solutions",
    text: "El profesionalismo y la rigurosidad metodológica del equipo de RS Human Talent fueron claves para conformar nuestro equipo estratégico. Su acompañamiento superó nuestras expectativas.",
  },
  {
    name: "Ana Rodríguez",
    position: "Gerente General",
    company: "Corporación Multisectorial Centroamérica",
    text: "La experiencia con RS Human Talent fue impecable. Su ética, compromiso y capacidad para presentar candidatos altamente calificados resultaron fundamentales para nuestras operaciones.",
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
            Testimonios de empresas que han confiado en nuestra experiencia
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
