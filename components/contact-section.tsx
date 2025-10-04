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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

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
    "https://wa.me/50700000000?text=Hola%20Yaneth%2C%20quiero%20más%20información%20sobre%20tus%20servicios"

  return (
    <section ref={sectionRef} id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Contacto</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Listo para encontrar el talento ideal? Conversemos sobre tus necesidades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          {/* <Card className={`border-2 ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
            <CardHeader>
              <CardTitle className="text-2xl">Envíame un mensaje</CardTitle>
              <CardDescription>Completa el formulario y me pondré en contacto contigo a la brevedad</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntame sobre tus necesidades..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card> */}

          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <MessageCircle className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">WhatsApp</CardTitle>
                <CardDescription>Respuesta rápida y directa</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => window.open(whatsappLink, "_blank")}
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Options */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Correo Electrónico</CardTitle>
                <CardDescription>yanethperez@ejemplo.com</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => (window.location.href = "mailto:yanethperez@ejemplo.com")}
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
              <h3 className="text-xl font-semibold text-foreground mb-4">Horario de atención</h3>
              <div className="space-y-2 text-foreground/70">
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
                <p className="text-sm text-muted-foreground mt-4">
                  * Respondo mensajes fuera del horario laboral en un plazo de 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
