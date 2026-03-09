export function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="space-y-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            Bem-vindo ao meu espaço
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Um lugar onde compartilho ideias sobre tecnologia, design, desenvolvimento e tudo que me interessa. 
            Aqui você encontrará artigos profundos, insights práticos e reflexões sobre a vida digital.
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
            SN
          </div>
          <div>
            <p className="font-medium">Seu Nome</p>
            <p className="text-sm text-muted-foreground">Developer & Designer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
