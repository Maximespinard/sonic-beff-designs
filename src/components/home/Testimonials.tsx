import { Card, CardContent } from '@/components/ui/card'
import { useNavbarVariant } from '@/hooks/useNavbarVariant'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  rating: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "This completely changed how I approach my work. The quality is unmatched.",
    author: 'Alex Rivera',
    role: 'Professional Athlete',
    rating: 5,
  },
  {
    id: 2,
    quote: "I've never experienced anything quite like this. Absolutely exceptional.",
    author: 'Jordan Chen',
    role: 'Design Director',
    rating: 5,
  },
  {
    id: 3,
    quote: "Worth every penny. The attention to detail is remarkable.",
    author: 'Sam Taylor',
    role: 'Creative Lead',
    rating: 5,
  },
]

export function Testimonials() {
  const { vibe, aesthetic } = useNavbarVariant()

  const QuoteIcon = () => (
    <svg
      className="w-8 h-8 text-primary/20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  )

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2
            className="scroll-reveal opacity-0"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: vibe === 'premium' ? 400 : vibe === 'action' ? 800 : 700,
              fontFamily:
                vibe === 'action'
                  ? "'Bebas Neue', 'Anton', sans-serif"
                  : vibe === 'premium'
                    ? "'Cormorant Garamond', 'Playfair Display', serif"
                    : vibe === 'playful'
                      ? "'Fredoka', 'Nunito', sans-serif"
                      : "'Inter', system-ui, sans-serif",
              letterSpacing:
                vibe === 'action'
                  ? '0.08em'
                  : vibe === 'premium'
                    ? '0.12em'
                    : '0',
              textTransform:
                (vibe === 'action' || vibe === 'premium' ? 'uppercase' : 'none') as React.CSSProperties['textTransform'],
            }}
          >
            {vibe === 'action' && 'What Champions Say'}
            {vibe === 'premium' && 'Client Testimonials'}
            {vibe === 'playful' && 'Happy Customers'}
            {vibe === 'minimal' && 'Reviews'}
          </h2>
          <p className="scroll-reveal opacity-0 text-muted-foreground text-lg max-w-2xl mx-auto">
            {vibe === 'action' && 'Hear from those who push their limits with us'}
            {vibe === 'premium' && 'Trusted by discerning individuals worldwide'}
            {vibe === 'playful' && 'See what people are loving about us'}
            {vibe === 'minimal' && 'Customer feedback and experiences'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`
                scroll-reveal opacity-0 overflow-hidden
                ${aesthetic === 'glass' ? 'backdrop-blur-sm bg-background/80' : ''}
              `}
              style={{
                animationDelay: `${300 + index * 150}ms`,
                borderRadius:
                  aesthetic === 'brutalist'
                    ? '0'
                    : vibe === 'playful'
                      ? '1.5rem'
                      : 'var(--radius)',
                border:
                  aesthetic === 'brutalist'
                    ? '3px solid var(--foreground)'
                    : '1px solid var(--border)',
                boxShadow:
                  aesthetic === 'brutalist'
                    ? '8px 8px 0 var(--foreground)'
                    : aesthetic === 'dark-bold'
                      ? '0 8px 32px oklch(0 0 0 / 0.2)'
                      : 'var(--shadow-md)',
              }}
            >
              <CardContent className="p-6 space-y-4 relative">
                {/* Quote Icon */}
                {vibe !== 'minimal' && (
                  <div className={vibe === 'premium' ? 'mb-4' : ''}>
                    <QuoteIcon />
                  </div>
                )}

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-foreground leading-relaxed"
                  style={{
                    fontSize:
                      vibe === 'premium' ? '1.125rem' : vibe === 'minimal' ? '0.9375rem' : '1rem',
                    fontStyle: (vibe === 'premium' ? 'italic' : 'normal') as React.CSSProperties['fontStyle'],
                    lineHeight: vibe === 'premium' ? 1.8 : 1.6,
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div
                  className={`
                    pt-4
                    ${aesthetic === 'brutalist' ? 'border-t-2 border-foreground' : ''}
                    ${aesthetic !== 'brutalist' ? 'border-t border-border' : ''}
                  `}
                >
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: vibe === 'minimal' ? '0.875rem' : '1rem',
                      fontFamily:
                        vibe === 'premium'
                          ? "'Cormorant Garamond', 'Playfair Display', serif"
                          : 'inherit',
                    }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{
                      fontSize: vibe === 'minimal' ? '0.8125rem' : '0.875rem',
                      letterSpacing: vibe === 'premium' ? '0.05em' : '0',
                      textTransform:
                        (vibe === 'action' || vibe === 'premium' ? 'uppercase' : 'none') as React.CSSProperties['textTransform'],
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>

                {/* Decorative element for playful glass variant */}
                {vibe === 'playful' && aesthetic === 'glass' && (
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl" />
                )}

                {/* Accent line for premium dark-bold */}
                {vibe === 'premium' && aesthetic === 'dark-bold' && (
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge / Social Proof */}
        <div
          className="text-center mt-12 scroll-reveal opacity-0"
          style={{ animationDelay: '800ms' }}
        >
          <p
            className="text-muted-foreground"
            style={{
              fontSize: vibe === 'premium' ? '0.875rem' : '1rem',
              letterSpacing: vibe === 'premium' ? '0.1em' : '0',
              textTransform: (vibe === 'premium' ? 'uppercase' : 'none') as React.CSSProperties['textTransform'],
            }}
          >
            {vibe === 'action' && 'Trusted by 10,000+ Athletes Worldwide'}
            {vibe === 'premium' && 'Serving Discerning Clients Since 2020'}
            {vibe === 'playful' && 'Join 10,000+ Happy Customers'}
            {vibe === 'minimal' && '10,000+ Satisfied Customers'}
          </p>
        </div>
      </div>
    </section>
  )
}
