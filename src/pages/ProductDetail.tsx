import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useParams } from "react-router-dom"

export function ProductDetail() {
  const { id } = useParams()

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square bg-muted rounded-lg" />
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg" />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge className="mb-2">New Arrival</Badge>
            <h1 className="text-4xl font-bold mb-2">Product {id}</h1>
            <p className="text-3xl font-bold">$199</p>
          </div>

          <Separator />

          <div>
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground">
              This is a premium product with exceptional quality and features. Perfect for
              enthusiasts who demand the best performance and style.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Premium materials</li>
              <li>Expert craftsmanship</li>
              <li>Durable construction</li>
              <li>Modern design</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              Wishlist
            </Button>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">SKU:</span>
                  <span className="font-medium">SB-{id}-001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">Premium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="font-medium text-green-600">In Stock</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
