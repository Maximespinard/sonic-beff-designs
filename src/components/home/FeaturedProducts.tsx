import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
  return (
    <section className="section-spacing">
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
            Featured Gear
          </h2>
          <p className="scroll-reveal opacity-0 text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for performance, designed for winners
          </p>
        </div>

        {/* Product Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-(--product-grid-gap)">
          {PRODUCTS.map((product, index) => (
            <Card
              key={product.id}
              className="product-card product-hover-explosive-lift overflow-hidden scroll-reveal opacity-0 group cursor-pointer"
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
                {/* White Lightning motion blur effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              {/* Product Info */}
              <CardContent className="p-6 space-y-3">
                <h3
                  className="font-semibold group-hover:text-primary transition-colors text-lg"
                  style={{
                    textTransform: 'uppercase' as React.CSSProperties['textTransform'],
                  }}
                >
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground">{product.description}</p>

                <p className="font-semibold text-lg">{product.price}</p>

                {/* CTA Button */}
                <Button
                  asChild
                  variant="secondary"
                  className="w-full"
                >
                  <Link to={`/shop/${product.id}`}>Get It Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 scroll-reveal opacity-0" style={{ animationDelay: '800ms' }}>
          <Button asChild variant="outline" size="lg">
            <Link to="/shop">View All Products →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
