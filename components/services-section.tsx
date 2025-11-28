"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Briefcase, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Reclutamiento Especializado",
    description:
      "Identificamos y atraemos a los candidatos más calificados para diversas áreas y niveles profesionales, garantizando perfiles alineados a las necesidades estratégicas de su empresa.",
  },
  {
    icon: Target,
    title: "Evaluación por Competencias",
    description:
      "Aplicamos entrevistas por competencias, pruebas psicométricas y verificación de referencias para asegurar un análisis riguroso del perfil técnico y conductual del candidato.",
  },
  {
    icon: TrendingUp,
    title: "Optimización del Proceso de Selección",
    description:
      "Diseñamos procesos eficientes que permiten reducir tiempos de contratación, mejorar la calidad del talento incorporado y disminuir la rotación dentro de la organización.",
  },
  {
    icon: Briefcase,
    title: "Selección Ejecutiva",
    description:
      "Headhunting confidencial enfocado en posiciones estratégicas, gerenciales y de alta dirección, garantizando la identificación de líderes con visión y alto desempeño.",
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
            Soluciones profesionales de reclutamiento y selección diseñadas para fortalecer el crecimiento de su empresa
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
