"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:yanethperez@ejemplo.com?subject=Consulta de ${formData.name}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`,
    )}`
    window.location.href = mailtoLink
  }

  const whatsappLink =
    "https://wa.me/50767397874?text=Hola%2C%20quisiera%20recibir%20información%20sobre%20los%20servicios%20de%20RS%20Human%20Talent"

  return (
    <section ref={sectionRef} id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Contacto</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Deseas fortalecer tu equipo con talento estratégico? Estamos listos para asesorarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <MessageCircle className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">WhatsApp</CardTitle>
                <CardDescription>
                  Comunicación inmediata y asesoría personalizada para tus requerimientos de talento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => window.open(whatsappLink, "_blank")}
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Escribir por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Correo Electrónico</CardTitle>
                <CardDescription>
                  rshumantalent149@gmail.com 
                  <br />
                  Envíanos tus solicitudes o consultas corporativas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => (window.location.href = "mailto:rshumantalent149@gmail.com")}
                  variant="outline"
                  size="lg"
                  className="w-full border-2"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar correo
                </Button>
              </CardContent>
            </Card>

            <div className="bg-secondary/30 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Horario de Atención</h3>
              <div className="space-y-2 text-foreground/70">
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
                <p className="text-sm text-muted-foreground mt-4">
                  * En caso de consultas realizadas fuera del horario laboral, recibirás una respuesta dentro de las próximas 24 horas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
