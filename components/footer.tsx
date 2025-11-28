import { Linkedin, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappLink =
    "https://wa.me/50768943612?text=Hola%2C%20quisiera%20recibir%20información%20sobre%20los%20servicios%20de%20RS%20Human%20Talent"

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">

          {/* Name and title */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">RS Human Talent</h3>
            <p className="text-muted-foreground">
              Especialistas en Reclutamiento, Selección y Gestión de Talento Humano
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Conectando empresas con profesionales altamente calificados
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </a> */}

            <a
              href="mailto:rshumantalent149@gmail.com"
              className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-300 group"
              aria-label="Correo electrónico"
            >
              <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-300 group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border w-full">
            <p>© {currentYear} RS Human Talent | Reclutamiento y Selección Profesional</p>
            <p className="mt-2">Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
