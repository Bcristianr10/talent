"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section ref={sectionRef} id="sobre-mi" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Quiénes Somos</h2>
            </div>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p className="text-pretty">
                En <span className="font-semibold text-foreground">RS Human Talent</span> somos un equipo especializado
                en Reclutamiento y Selección de Personal, dedicado a conectar empresas con profesionales altamente
                calificados. Nuestro compromiso es acompañar a organizaciones de distintos sectores en la construcción
                de equipos sólidos y alineados con sus objetivos estratégicos.
              </p>

              <p className="text-pretty">
                Trabajamos bajo un enfoque profesional basado en{" "}
                <span className="font-semibold text-primary">confidencialidad</span>,{" "}
                <span className="font-semibold text-primary">ética</span> y{" "}
                <span className="font-semibold text-primary">rigurosidad en cada proceso</span>. Cada vacante es única,
                por lo que diseñamos procesos personalizados que incluyen entrevistas por competencias, evaluaciones
                psicométricas, verificación de referencias y análisis de habilidades técnicas.
              </p>

              <p className="text-pretty">
                Creemos firmemente que el éxito de una empresa comienza con las personas adecuadas en los roles
                correctos. Por ello, nos enfocamos en identificar talento que no solo cumpla con el perfil técnico, sino
                que también encaje con la cultura organizacional, reduciendo la rotación y potenciando el crecimiento
                empresarial.
              </p>

              <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg shadow-sm mt-8">
                <p className="text-foreground font-medium text-xl italic text-balance">
                  "Nuestro propósito es garantizar que cada empresa encuentre el talento ideal y que cada candidato
                  descubra el lugar donde pueda desarrollarse, aportar valor y alcanzar su máximo potencial."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
