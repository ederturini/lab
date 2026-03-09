import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ArticleGrid } from '@/components/ArticleGrid'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ArticleGrid />
      <Footer />
    </div>
  )
}
