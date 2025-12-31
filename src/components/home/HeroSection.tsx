import { Button } from '@/components/ui/button'
import { useNavbarVariant } from '@/hooks/useNavbarVariant'
import { Link } from 'react-router-dom'

export function HeroSection() {
  const { vibe, aesthetic } = useNavbarVariant()

  // Get background pattern class based on variant
  const getBackgroundPattern = () => {
    const key = `${vibe}-${aesthetic}`
    const patterns: Record<string, string> = {
      'action-dark-bold': 'bg-pattern-diagonal-stripes-intense',
      'action-light-airy': 'bg-pattern-motion-lines',
      'action-brutalist': 'bg-pattern-concrete-texture',
      'action-glass': 'bg-pattern-neon-grid-bg',
      'premium-dark-bold': 'bg-pattern-luxury-gradient',
      'premium-light-airy': 'bg-pattern-soft-vignette',
      'playful-dark-bold': 'bg-pattern-starfield',
      'playful-light-airy': 'bg-pattern-soft-clouds',
      'playful-brutalist': 'bg-pattern-halftone-dots',
      'playful-glass': 'bg-pattern-iridescent-bubbles',
      'minimal-dark-bold': 'bg-pattern-subtle-grid',
      'minimal-brutalist': 'bg-pattern-technical-grid',
      'minimal-glass': 'bg-pattern-metallic-gradient',
    }
    return patterns[key] || ''
  }

  return (
    <section
      className={`relative overflow-hidden ${getBackgroundPattern()}`}
      style={{
        minHeight: 'var(--hero-height)',
      }}
    >
      {/* Overlay for dark aesthetics */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"
        style={{
          opacity: 'var(--hero-overlay-opacity)',
        }}
      />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[var(--hero-height)] py-20">
        <div
          className="max-w-[var(--hero-content-width)] mx-auto space-y-8"
          style={{
            textAlign: 'var(--hero-text-align)' as React.CSSProperties['textAlign'],
          }}
        >
          {/* Title with variant-specific animation */}
          <h1
            className="hero-entrance opacity-0"
            style={{
              fontSize: 'var(--hero-title-size)',
              fontWeight: 'var(--hero-title-weight)' as React.CSSProperties['fontWeight'],
              lineHeight: 'var(--hero-title-line-height)',
              textShadow: 'var(--hero-text-shadow)',
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
                    : vibe === 'playful'
                      ? '-0.01em'
                      : '-0.02em',
              textTransform:
                (vibe === 'action' || vibe === 'premium' ? 'uppercase' : 'none') as React.CSSProperties['textTransform'],
            }}
          >
            {vibe === 'action' && 'Unleash Your Potential'}
            {vibe === 'premium' && 'Elevate Your Experience'}
            {vibe === 'playful' && 'Discover the Fun'}
            {vibe === 'minimal' && 'Simply Better'}
          </h1>

          {/* Subtitle */}
          <p
            className="hero-entrance opacity-0 stagger-1 text-muted-foreground max-w-2xl mx-auto"
            style={{
              fontSize: 'var(--hero-subtitle-size)',
            }}
          >
            {vibe === 'action' &&
              'Push boundaries. Break limits. Experience the rush of premium performance.'}
            {vibe === 'premium' &&
              'Crafted with precision, designed for those who appreciate the finer things.'}
            {vibe === 'playful' &&
              'Where creativity meets joy. Explore our collection of delightful products.'}
            {vibe === 'minimal' &&
              'Clean design. Clear purpose. Products that enhance your everyday life.'}
          </p>

          {/* CTA Buttons */}
          <div className="hero-entrance opacity-0 stagger-2 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/shop">
                {vibe === 'action' && 'Shop Now'}
                {vibe === 'premium' && 'Explore Collection'}
                {vibe === 'playful' && 'Start Exploring'}
                {vibe === 'minimal' && 'View Products'}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/team">
                {vibe === 'action' && 'Meet the Team'}
                {vibe === 'premium' && 'Our Story'}
                {vibe === 'playful' && 'About Us'}
                {vibe === 'minimal' && 'Learn More'}
              </Link>
            </Button>
          </div>

          {/* Decorative Element for certain variants */}
          {aesthetic === 'glass' && (
            <div className="hero-entrance opacity-0 stagger-3 absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
