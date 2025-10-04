"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Briefcase, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Reclutamiento Especializado",
    description:
      "Procesos de búsqueda y selección adaptados a las necesidades específicas de tu organización, garantizando candidatos de alto nivel.",
  },
  {
    icon: Target,
    title: "Evaluación por Competencias",
    description:
      "Análisis profundo de habilidades técnicas y blandas mediante herramientas especializadas para asegurar el mejor ajuste cultural.",
  },
  {
    icon: TrendingUp,
    title: "Asesoría en Gestión de Talento",
    description:
      "Consultoría estratégica para optimizar tus procesos de recursos humanos y desarrollar el potencial de tu equipo.",
  },
  {
    icon: Briefcase,
    title: "Selección Ejecutiva",
    description:
      "Headhunting especializado para posiciones de liderazgo y alta dirección con metodología confidencial y efectiva.",
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Servicios</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluciones integrales en gestión de talento humano diseñadas para tu éxito
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`border-2 hover:border-primary transition-all duration-300 hover:shadow-lg ${
                  isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : "opacity-0"
                }`}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-foreground/70">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
