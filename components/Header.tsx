'use client'

import { Search, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Seu Nome
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-accent transition">
              Blog
            </a>
            <a href="#about" className="text-muted-foreground hover:text-accent transition">
              Sobre
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-accent transition">
              Projetos
            </a>
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <a href="/" className="text-foreground hover:text-accent transition py-2">
              Blog
            </a>
            <a href="#about" className="text-muted-foreground hover:text-accent transition py-2">
              Sobre
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-accent transition py-2">
              Projetos
            </a>
            <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
