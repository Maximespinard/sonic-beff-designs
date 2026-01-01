import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-pattern-motion-lines"
      style={{
        minHeight: 'var(--hero-height)',
      }}
    >
      {/* Overlay for dark aesthetics */}
      <div
        className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background"
        style={{
          opacity: 'var(--hero-overlay-opacity)',
        }}
      />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-(--hero-height) py-20">
        <div
          className="max-w-(--hero-content-width) mx-auto space-y-8"
          style={{
            textAlign: 'var(--hero-text-align)' as React.CSSProperties['textAlign'],
          }}
        >
          {/* Title - White Lightning (action vibe) */}
          <h1
            className="hero-entrance opacity-0"
            style={{
              fontSize: 'var(--hero-title-size)',
              fontWeight: 'var(--hero-title-weight)' as React.CSSProperties['fontWeight'],
              lineHeight: 'var(--hero-title-line-height)',
              textShadow: 'var(--hero-text-shadow)',
              fontFamily: "'Bebas Neue', 'Anton', sans-serif",
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as React.CSSProperties['textTransform'],
            }}
          >
            Unleash Your Potential
          </h1>

          {/* Subtitle */}
          <p
            className="hero-entrance opacity-0 stagger-1 text-muted-foreground max-w-2xl mx-auto"
            style={{
              fontSize: 'var(--hero-subtitle-size)',
            }}
          >
            Push boundaries. Break limits. Experience the rush of premium performance.
          </p>

          {/* CTA Buttons */}
          <div className="hero-entrance opacity-0 stagger-2 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
