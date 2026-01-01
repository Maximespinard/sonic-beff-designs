import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: 'var(--cta-height)',
      }}
    >
      {/* Background overlay - Light & Airy */}
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--muted)',
        }}
      />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-(--cta-height) py-16">
        <div
          className="max-w-3xl mx-auto text-center space-y-8"
          style={{
            textAlign: 'var(--cta-text-align)' as React.CSSProperties['textAlign'],
          }}
        >
          {/* Heading - Action Vibe */}
          <h2
            className="scroll-reveal opacity-0"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1,
              fontFamily: "'Bebas Neue', 'Anton', sans-serif",
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as React.CSSProperties['textTransform'],
            }}
          >
            Ready to Push Your Limits?
          </h2>

          {/* Description */}
          <p className="scroll-reveal opacity-0 stagger-1 text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of athletes who trust us to deliver peak performance. Start your journey today.
          </p>

          {/* Action Buttons */}
          <div className="scroll-reveal opacity-0 stagger-2 flex gap-4 justify-center flex-wrap">
            <Button
              asChild
              size="lg"
              className="text-base px-8"
            >
              <Link to="/shop">Shop Now →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Trust Indicators - Action Vibe */}
          <div className="scroll-reveal opacity-0 stagger-3 flex gap-8 justify-center pt-8 text-sm">
            {['Free Shipping', 'Lifetime Warranty', '30-Day Returns'].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-muted-foreground uppercase tracking-wide text-xs">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
