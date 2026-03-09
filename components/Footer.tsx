import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre Mim</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Developer e designer apaixonado por criar experiências digitais incríveis. Compartilho conhecimento e insights sobre tecnologia e design.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <nav className="space-y-3">
              <a href="/" className="text-muted-foreground hover:text-accent transition text-sm">
                Blog
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-accent transition text-sm">
                Sobre
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-accent transition text-sm">
                Projetos
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-accent transition text-sm">
                Contato
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Conecte-se</h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Email"
                className="p-2 bg-border rounded-lg hover:bg-accent hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 bg-border rounded-lg hover:bg-accent hover:text-white transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 bg-border rounded-lg hover:bg-accent hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-border rounded-lg hover:bg-accent hover:text-white transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Seu Nome. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
