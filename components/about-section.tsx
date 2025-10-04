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
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Quién Soy</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p className="text-pretty">
                Soy <span className="font-semibold text-foreground">Yaneth Pérez</span>, especialista en Gestión y
                Selección de Talento Humano con años de experiencia ayudando a empresas y profesionales a encontrar su
                mejor versión.
              </p>

              <p className="text-pretty">
                Mi enfoque se basa en tres pilares fundamentales:{" "}
                <span className="font-semibold text-primary">confidencialidad</span>,
                <span className="font-semibold text-primary"> ética profesional</span> y
                <span className="font-semibold text-primary"> acompañamiento humano</span>. Cada proceso de selección es
                único y merece una atención personalizada que va más allá de simplemente llenar una vacante.
              </p>

              <p className="text-pretty">
                Creo firmemente que el éxito de una organización comienza con las personas correctas en los roles
                correctos. Mi misión es ser ese puente estratégico que conecta el talento excepcional con oportunidades
                que transforman carreras y empresas.
              </p>

              <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg shadow-sm mt-8">
                <p className="text-foreground font-medium text-xl italic text-balance">
                  "Mi compromiso es ayudar a empresas y candidatos a encontrar no solo un trabajo, sino el lugar donde
                  pueden crecer, desarrollarse y alcanzar su máximo potencial."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
