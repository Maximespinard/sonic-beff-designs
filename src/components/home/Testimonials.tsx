import { Card, CardContent } from '@/components/ui/card'

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
        {/* Section Header - White Lightning (Action Vibe) */}
        <div className="text-center mb-12 space-y-4">
          <h2
            className="scroll-reveal opacity-0"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              fontFamily: "'Bebas Neue', 'Anton', sans-serif",
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as React.CSSProperties['textTransform'],
            }}
          >
            What Champions Say
          </h2>
          <p className="scroll-reveal opacity-0 text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from those who push their limits with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="scroll-reveal opacity-0 overflow-hidden"
              style={{
                animationDelay: `${300 + index * 150}ms`,
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <CardContent className="p-6 space-y-4 relative">
                {/* Quote Icon */}
                <div>
                  <QuoteIcon />
                </div>

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
                <p className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">
                    {testimonial.author}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{
                      textTransform: 'uppercase' as React.CSSProperties['textTransform'],
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge / Social Proof - Action Vibe */}
        <div
          className="text-center mt-12 scroll-reveal opacity-0"
          style={{ animationDelay: '800ms' }}
        >
          <p className="text-muted-foreground">
            Trusted by 10,000+ Athletes Worldwide
          </p>
        </div>
      </div>
    </section>
  )
}
