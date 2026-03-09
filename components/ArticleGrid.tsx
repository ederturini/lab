'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { ArticleCard } from './ArticleCard'

const articles = [
  {
    id: 1,
    title: 'Design de Interfaces Modernas com React e TypeScript',
    excerpt: 'Explorando as melhores práticas para criar interfaces responsivas e acessíveis usando React com TypeScript...',
    date: '15 de Março, 2026',
    readTime: '8 min',
    category: 'Desenvolvimento',
    slug: 'design-interfaces-react-typescript',
  },
  {
    id: 2,
    title: 'O Futuro do Web Design: Tendências em 2026',
    excerpt: 'As principais tendências de design que estão moldando a web. Desde neumorfismo até às animações mais sofisticadas...',
    date: '12 de Março, 2026',
    readTime: '12 min',
    category: 'Design',
    slug: 'futuro-web-design-2026',
  },
  {
    id: 3,
    title: 'Otimização de Performance em Next.js',
    excerpt: 'Técnicas práticas para melhorar a performance da sua aplicação Next.js, desde lazy loading até image optimization...',
    date: '8 de Março, 2026',
    readTime: '10 min',
    category: 'Desenvolvimento',
    slug: 'otimizacao-performance-nextjs',
  },
  {
    id: 4,
    title: 'Acessibilidade Web: Não é Apenas um Checklist',
    excerpt: 'Entendendo a importância da acessibilidade além das compliance requirements. Como criar experiences inclusivas...',
    date: '4 de Março, 2026',
    readTime: '15 min',
    category: 'Acessibilidade',
    slug: 'acessibilidade-web',
  },
  {
    id: 5,
    title: 'Estado da Indústria Tech: Reflexões e Previsões',
    excerpt: 'Uma reflexão sobre os últimos anos na indústria de tecnologia e minhas previsões para o futuro próximo...',
    date: '1 de Março, 2026',
    readTime: '14 min',
    category: 'Pensamentos',
    slug: 'estado-industria-tech-2026',
  },
  {
    id: 6,
    title: 'Construindo Componentes Reutilizáveis com Tailwind',
    excerpt: 'Como criar uma biblioteca de componentes escalável usando Tailwind CSS e boas práticas de organização...',
    date: '25 de Fevereiro, 2026',
    readTime: '9 min',
    category: 'Desenvolvimento',
    slug: 'componentes-tailwind-reutilizaveis',
  },
]

const categories = ['Todos', 'Desenvolvimento', 'Design', 'Acessibilidade', 'Pensamentos']

export function ArticleGrid() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === 'Todos' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar artigos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-12 flex gap-2 overflow-x-auto pb-4 -mx-4 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === category
                ? 'bg-accent text-white'
                : 'bg-muted text-foreground hover:bg-border'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div>
        {filteredArticles.length > 0 ? (
          <div className="space-y-0">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              Nenhum artigo encontrado. Tente outro termo de busca ou categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
