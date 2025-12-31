import { useNavbarVariant } from '@/hooks/useNavbarVariant'

export function BrandStory() {
  const { vibe, aesthetic } = useNavbarVariant()

  // Determine layout based on variant
  const isEditorialLayout = vibe === 'premium' && aesthetic === 'light-airy'
  const isDiagonalLayout = vibe === 'action' && aesthetic === 'dark-bold'
  const isBrutalistLayout = aesthetic === 'brutalist'

  return (
    <section
      className="section-spacing relative overflow-hidden"
      style={{
        background: 'var(--story-bg-pattern)',
      }}
    >
      {/* Background pattern for specific variants */}
      {aesthetic === 'glass' && (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className="container">
        <div
          className={`
            grid gap-12 items-center
            ${isEditorialLayout ? 'grid-cols-1 lg:grid-cols-12 gap-x-20' : ''}
            ${isDiagonalLayout ? 'grid-cols-1 lg:grid-cols-2' : ''}
            ${!isEditorialLayout && !isDiagonalLayout ? 'grid-cols-1 lg:grid-cols-2' : ''}
          `}
        >
          {/* Text Content */}
          <div
            className={`
              space-y-6 scroll-reveal opacity-0
              ${isEditorialLayout ? 'lg:col-span-5' : ''}
              ${isDiagonalLayout ? 'order-2 lg:order-1' : ''}
            `}
          >
            {/* Overline for premium variants */}
            {vibe === 'premium' && (
              <p
                className="text-sm tracking-widest text-muted-foreground"
                style={{
                  fontFamily: "'Lato', 'Montserrat', sans-serif",
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as React.CSSProperties['textTransform'],
                }}
              >
                Our Story
              </p>
            )}

            <h2
              style={{
                fontSize: isEditorialLayout ? 'clamp(2.5rem, 6vw, 4.5rem)' : 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: vibe === 'premium' ? 400 : vibe === 'action' ? 800 : 700,
                lineHeight: vibe === 'premium' ? 1.2 : vibe === 'action' ? 1 : 1.15,
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
              {vibe === 'action' && 'Built for Champions'}
              {vibe === 'premium' && 'Crafted with Purpose'}
              {vibe === 'playful' && 'Making Life More Fun'}
              {vibe === 'minimal' && 'Design Matters'}
            </h2>

            <div className="space-y-4 text-muted-foreground max-w-2xl">
              <p
                style={{
                  fontSize: isEditorialLayout ? '1.125rem' : '1rem',
                  lineHeight: isEditorialLayout ? 1.8 : 1.7,
                }}
              >
                {vibe === 'action' &&
                  'We believe in pushing limits, breaking barriers, and achieving the impossible. Every product we create is engineered for performance and built to withstand the toughest challenges.'}
                {vibe === 'premium' &&
                  'Excellence is not a destination, but a journey of continuous refinement. Our commitment to quality and craftsmanship ensures that every piece tells a story of dedication and passion.'}
                {vibe === 'playful' &&
                  'Life is too short to be boring! We create products that spark joy, inspire creativity, and bring smiles to faces. Every item in our collection is designed to add a touch of magic to your day.'}
                {vibe === 'minimal' &&
                  'Great design is invisible. We focus on what matters, removing the unnecessary to create products that seamlessly integrate into your life. Simple, functional, beautiful.'}
              </p>

              <p
                style={{
                  fontSize: isEditorialLayout ? '1.125rem' : '1rem',
                  lineHeight: isEditorialLayout ? 1.8 : 1.7,
                }}
              >
                {vibe === 'action' &&
                  'Join thousands of athletes and adventurers who trust our gear to perform when it matters most.'}
                {vibe === 'premium' &&
                  'Experience the difference that true craftsmanship makes. Discover pieces that transcend trends and become timeless companions.'}
                {vibe === 'playful' &&
                  'Join our community of dreamers and creators who believe that every day is an opportunity for adventure and wonder.'}
                {vibe === 'minimal' &&
                  'Join those who appreciate the power of simplicity and the elegance of thoughtful design.'}
              </p>
            </div>

            {/* Decorative element for brutalist variants */}
            {isBrutalistLayout && (
              <div
                className="w-32 h-1 bg-foreground"
                style={{
                  marginTop: '2rem',
                }}
              />
            )}

            {/* Stats for action variants */}
            {vibe === 'action' && (
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: '10K+', label: 'Athletes' },
                  { value: '50+', label: 'Countries' },
                  { value: '99%', label: 'Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                        letterSpacing: '0.05em',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Visual Element / Image Placeholder */}
          <div
            className={`
              relative scroll-reveal opacity-0
              ${isEditorialLayout ? 'lg:col-span-7' : ''}
              ${isDiagonalLayout ? 'order-1 lg:order-2' : ''}
            `}
            style={{
              animationDelay: '200ms',
            }}
          >
            <div
              className="relative overflow-hidden bg-muted"
              style={{
                aspectRatio: isEditorialLayout ? '4/5' : '16/10',
                borderRadius:
                  aesthetic === 'brutalist'
                    ? '0'
                    : aesthetic === 'glass'
                      ? '1.5rem'
                      : vibe === 'playful'
                        ? '2rem'
                        : 'var(--radius)',
                border:
                  aesthetic === 'brutalist'
                    ? '4px solid var(--foreground)'
                    : aesthetic === 'light-airy'
                      ? '1px solid var(--border)'
                      : 'none',
                boxShadow:
                  aesthetic === 'brutalist'
                    ? '16px 16px 0 var(--foreground)'
                    : aesthetic === 'dark-bold'
                      ? '0 20px 60px oklch(0 0 0 / 0.4)'
                      : aesthetic === 'glass'
                        ? '0 8px 32px oklch(0 0 0 / 0.12)'
                        : 'var(--shadow-lg)',
              }}
            >
              {/* Overlay gradient for glass effect */}
              {aesthetic === 'glass' && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              )}

              {/* Diagonal overlay for action dark-bold */}
              {isDiagonalLayout && (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                  }}
                />
              )}

              {/* Grid overlay for minimal brutalist */}
              {vibe === 'minimal' && aesthetic === 'brutalist' && (
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              )}
            </div>

            {/* Floating accent element for playful variants */}
            {vibe === 'playful' && aesthetic === 'glass' && (
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
