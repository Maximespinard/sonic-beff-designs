export function BrandStory() {
  return (
    <section
      className="section-spacing relative overflow-hidden"
      style={{
        background: 'var(--story-bg-pattern)',
      }}
    >
      <div className="container">
        <div className="grid gap-12 items-center grid-cols-1 lg:grid-cols-2">
          {/* Text Content - Action Vibe */}
          <div className="space-y-6 scroll-reveal opacity-0">
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1,
                fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as React.CSSProperties['textTransform'],
              }}
            >
              Built for Champions
            </h2>

            <div className="space-y-4 text-muted-foreground max-w-2xl">
              <p style={{ lineHeight: 1.7 }}>
                We believe in pushing limits, breaking barriers, and achieving the impossible. Every product we create is engineered for performance and built to withstand the toughest challenges.
              </p>

              <p style={{ lineHeight: 1.7 }}>
                Join thousands of athletes and adventurers who trust our gear to perform when it matters most.
              </p>
            </div>

            {/* Stats - Action Vibe */}
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
          </div>

          {/* Visual Element / Image Placeholder - Light & Airy */}
          <div
            className="relative scroll-reveal opacity-0"
            style={{
              animationDelay: '200ms',
            }}
          >
            <div
              className="relative overflow-hidden bg-muted"
              style={{
                aspectRatio: '16/10',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
