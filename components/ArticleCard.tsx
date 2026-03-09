import { Clock, ArrowRight } from 'lucide-react'

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
}

export function ArticleCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  slug,
}: ArticleCardProps) {
  return (
    <article className="group py-8 border-b border-border hover:bg-muted/50 px-4 sm:px-0 transition rounded-lg md:rounded-none md:px-0">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-accent transition">
          {title}
        </h3>

        <p className="text-lg text-muted-foreground line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
          <a
            href={`/articles/${slug}`}
            className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition"
          >
            Ler artigo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  )
}
