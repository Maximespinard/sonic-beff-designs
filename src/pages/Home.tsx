import {
  BrandStory,
  CTASection,
  FeaturedProducts,
  HeroSection,
  Testimonials,
} from '@/components/home'
import { useEffect } from 'react'

export function Home() {
  // Initialize scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProducts />
      <BrandStory />
      <Testimonials />
      <CTASection />
    </div>
  )
}
