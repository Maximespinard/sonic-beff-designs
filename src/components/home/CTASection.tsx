import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavbarVariant } from '@/hooks/useNavbarVariant'
import { Link } from 'react-router-dom'

export function CTASection() {
  const { vibe, aesthetic } = useNavbarVariant()

  // Get background pattern class based on variant
  const getBackgroundPattern = () => {
    const key = `${vibe}-${aesthetic}`
    const patterns: Record<string, string> = {
      'action-dark-bold': 'bg-pattern-diagonal-stripes-intense',
      'action-glass': 'bg-pattern-neon-grid-bg',
      'premium-dark-bold': 'bg-pattern-luxury-gradient',
      'playful-dark-bold': 'bg-pattern-starfield',
      'playful-glass': 'bg-pattern-iridescent-bubbles',
      'minimal-dark-bold': 'bg-pattern-subtle-grid',
      'minimal-brutalist': 'bg-pattern-technical-grid',
    }
    return patterns[key] || ''
  }

  const showNewsletterForm = vibe === 'premium' || vibe === 'minimal'

  return (
    <section
      className={`relative overflow-hidden ${getBackgroundPattern()}`}
      style={{
        minHeight: 'var(--cta-height)',
      }}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            aesthetic === 'dark-bold'
              ? 'linear-gradient(135deg, var(--card) 0%, var(--background) 100%)'
              : aesthetic === 'glass'
                ? 'linear-gradient(135deg, var(--background-glass) 0%, var(--background) 100%)'
                : 'var(--muted)',
          backdropFilter: aesthetic === 'glass' ? 'blur(20px)' : 'none',
        }}
      />

      {/* Decorative elements for glass variants */}
      {aesthetic === 'glass' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
      )}

      {/* Brutalist accent border */}
      {aesthetic === 'brutalist' && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-foreground" />
      )}

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[var(--cta-height)] py-16">
        <div
          className="max-w-3xl mx-auto text-center space-y-8"
          style={{
            textAlign: 'var(--cta-text-align)' as React.CSSProperties['textAlign'],
          }}
        >
          {/* Overline for premium variants */}
          {vibe === 'premium' && (
            <p
              className="scroll-reveal opacity-0 text-sm tracking-widest text-muted-foreground"
              style={{
                fontFamily: "'Lato', 'Montserrat', sans-serif",
                letterSpacing: '0.2em',
                textTransform: 'uppercase' as React.CSSProperties['textTransform'],
              }}
            >
              Join Us
            </p>
          )}

          {/* Heading */}
          <h2
            className="scroll-reveal opacity-0"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: vibe === 'premium' ? 400 : vibe === 'action' ? 800 : 700,
              lineHeight: vibe === 'action' ? 1 : vibe === 'premium' ? 1.2 : 1.15,
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
                    ? '0.08em'
                    : '0',
              textTransform:
                (vibe === 'action' || vibe === 'premium' ? 'uppercase' : 'none') as React.CSSProperties['textTransform'],
            }}
          >
            {vibe === 'action' && 'Ready to Push Your Limits?'}
            {vibe === 'premium' && 'Begin Your Journey'}
            {vibe === 'playful' && 'Join the Fun!'}
            {vibe === 'minimal' && 'Get Started Today'}
          </h2>

          {/* Description */}
          <p
            className="scroll-reveal opacity-0 stagger-1 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {vibe === 'action' &&
              'Join thousands of athletes who trust us to deliver peak performance. Start your journey today.'}
            {vibe === 'premium' &&
              'Experience the excellence that comes from unwavering commitment to quality and craftsmanship.'}
            {vibe === 'playful' &&
              'Discover products that bring joy to your everyday life. Your next favorite thing is waiting.'}
            {vibe === 'minimal' &&
              'Join those who appreciate thoughtful design and functional simplicity.'}
          </p>

          {/* CTA Content */}
          {showNewsletterForm ? (
            // Newsletter Form for Premium & Minimal
            <div className="scroll-reveal opacity-0 stagger-2 max-w-md mx-auto">
              <form
                className="flex gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  style={{
                    borderRadius: aesthetic === 'brutalist' ? '0' : 'var(--radius)',
                    borderWidth: aesthetic === 'brutalist' ? '2px' : '1px',
                  }}
                />
                <Button
                  type="submit"
                  size="lg"
                  style={{
                    borderRadius: aesthetic === 'brutalist' ? '0' : 'var(--radius)',
                  }}
                >
                  {vibe === 'premium' ? 'Subscribe' : 'Join'}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">
                {vibe === 'premium'
                  ? 'Receive exclusive updates and offers'
                  : 'Get updates on new products and features'}
              </p>
            </div>
          ) : (
            // Action Buttons for Action & Playful
            <div className="scroll-reveal opacity-0 stagger-2 flex gap-4 justify-center flex-wrap">
              <Button
                asChild
                size="lg"
                className="text-base px-8"
                style={{
                  borderRadius:
                    aesthetic === 'brutalist'
                      ? '0'
                      : vibe === 'playful'
                        ? '1.5rem'
                        : 'var(--radius)',
                }}
              >
                <Link to="/shop">
                  {vibe === 'action' && 'Shop Now →'}
                  {vibe === 'playful' && 'Start Shopping →'}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8"
                style={{
                  borderRadius:
                    aesthetic === 'brutalist'
                      ? '0'
                      : vibe === 'playful'
                        ? '1.5rem'
                        : 'var(--radius)',
                  borderWidth: aesthetic === 'brutalist' ? '2px' : '1px',
                }}
              >
                <Link to="/contact">
                  {vibe === 'action' && 'Get in Touch'}
                  {vibe === 'playful' && 'Contact Us'}
                </Link>
              </Button>
            </div>
          )}

          {/* Trust Indicators for Action variants */}
          {vibe === 'action' && (
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
          )}

          {/* Decorative line for brutalist variants */}
          {aesthetic === 'brutalist' && (
            <div className="scroll-reveal opacity-0 stagger-3 w-64 h-1 bg-foreground mx-auto" />
          )}
        </div>
      </div>

      {/* Bottom accent border for brutalist */}
      {aesthetic === 'brutalist' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground" />
      )}
    </section>
  )
}
