import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useNavbarVariant } from '@/hooks/useNavbarVariant'
import { Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  description: string
  price: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Signature Series',
    description: 'Premium quality, unmatched performance',
    price: '$299',
  },
  {
    id: 2,
    name: 'Limited Edition',
    description: 'Exclusive design, limited availability',
    price: '$449',
  },
  {
    id: 3,
    name: 'Pro Collection',
    description: 'Professional grade, maximum impact',
    price: '$599',
  },
]

export function FeaturedProducts() {
  const { vibe, aesthetic } = useNavbarVariant()

  // Get product card hover class based on variant
  const getHoverClass = () => {
    if (vibe === 'action') return 'product-hover-explosive-lift'
    if (vibe === 'premium') return 'product-hover-subtle-lift'
    if (vibe === 'playful') return 'product-hover-wiggle-lift'
    if (vibe === 'minimal') return 'product-hover-minimal-lift'
    return 'product-hover-lift'
  }

  const gridCols = vibe === 'premium' && aesthetic === 'light-airy' ? 'md:grid-cols-2' : 'md:grid-cols-3'

  return (
    <section className="section-spacing">
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
                    : vibe === 'minimal'
                      ? '-0.02em'
                      : '0',
              textTransform:
                (vibe === 'action' || vibe === 'premium' ? 'uppercase' : 'none') as React.CSSProperties['textTransform'],
            }}
          >
            {vibe === 'action' && 'Featured Gear'}
            {vibe === 'premium' && 'Our Collection'}
            {vibe === 'playful' && 'Popular Picks'}
            {vibe === 'minimal' && 'Featured Products'}
          </h2>
          <p className="scroll-reveal opacity-0 text-muted-foreground text-lg max-w-2xl mx-auto">
            {vibe === 'action' && 'Built for performance, designed for winners'}
            {vibe === 'premium' && 'Timeless pieces, carefully curated'}
            {vibe === 'playful' && 'Handpicked favorites that bring joy'}
            {vibe === 'minimal' && 'Essential items, thoughtfully selected'}
          </p>
        </div>

        {/* Product Grid */}
        <div
          className={`grid grid-cols-1 ${gridCols} gap-[var(--product-grid-gap)]`}
        >
          {PRODUCTS.map((product, index) => (
            <Card
              key={product.id}
              className={`product-card ${getHoverClass()} overflow-hidden scroll-reveal opacity-0 group cursor-pointer`}
              style={{
                animationDelay: `${300 + index * 150}ms`,
                filter: 'var(--product-image-filter)',
              }}
            >
              {/* Product Image Placeholder */}
              <div
                className="relative overflow-hidden bg-muted"
                style={{
                  aspectRatio: 'var(--product-card-aspect)',
                }}
              >
                {/* Image overlay effect for glass variants */}
                {aesthetic === 'glass' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Brutalist overlay effect */}
                {aesthetic === 'brutalist' && (
                  <div className="absolute top-4 right-4 w-16 h-16 border-4 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                {/* Action variant motion blur effect */}
                {vibe === 'action' && aesthetic === 'light-airy' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                )}

                {/* Product number badge for minimal variants */}
                {vibe === 'minimal' && (
                  <div className="absolute top-4 left-4 text-xs font-mono text-muted-foreground">
                    {String(product.id).padStart(2, '0')}
                  </div>
                )}

                {/* Price tag for premium variants */}
                {vibe === 'premium' && (
                  <div
                    className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2"
                    style={{
                      borderRadius: aesthetic === 'brutalist' ? '0' : 'var(--radius)',
                      border:
                        aesthetic === 'brutalist' ? '2px solid var(--foreground)' : 'none',
                    }}
                  >
                    <span className="text-sm font-serif">{product.price}</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <CardContent className="p-6 space-y-3">
                <h3
                  className="font-semibold group-hover:text-primary transition-colors"
                  style={{
                    fontSize: vibe === 'premium' ? '1.25rem' : '1.125rem',
                    fontFamily:
                      vibe === 'premium'
                        ? "'Cormorant Garamond', 'Playfair Display', serif"
                        : 'inherit',
                    letterSpacing: vibe === 'premium' ? '0.08em' : '0',
                    textTransform:
                      (vibe === 'action' || vibe === 'premium' ? 'uppercase' : 'none') as React.CSSProperties['textTransform'],
                  }}
                >
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground">{product.description}</p>

                {/* Price for non-premium variants */}
                {vibe !== 'premium' && (
                  <p className="font-semibold text-lg">{product.price}</p>
                )}

                {/* CTA Button */}
                <Button
                  asChild
                  variant={aesthetic === 'brutalist' ? 'outline' : 'secondary'}
                  className="w-full"
                  style={{
                    borderRadius:
                      aesthetic === 'brutalist'
                        ? '0'
                        : vibe === 'playful'
                          ? '1.5rem'
                          : 'var(--radius)',
                  }}
                >
                  <Link to={`/shop/${product.id}`}>
                    {vibe === 'action' && 'Get It Now'}
                    {vibe === 'premium' && 'View Details'}
                    {vibe === 'playful' && 'Check It Out'}
                    {vibe === 'minimal' && 'Learn More'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 scroll-reveal opacity-0" style={{ animationDelay: '800ms' }}>
          <Button asChild variant="outline" size="lg">
            <Link to="/shop">
              {vibe === 'action' && 'View All Products →'}
              {vibe === 'premium' && 'Explore Full Collection →'}
              {vibe === 'playful' && 'See Everything →'}
              {vibe === 'minimal' && 'All Products →'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
