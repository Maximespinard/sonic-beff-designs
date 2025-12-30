import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export function Shop() {
  const products = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Shop</h1>
        <div className="flex gap-4">
          <Input placeholder="Search products..." className="max-w-xs" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((id) => (
          <Card key={id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-muted relative">
              <Badge className="absolute top-2 right-2">New</Badge>
            </div>
            <CardHeader>
              <CardTitle>Product {id}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Premium quality product with excellent features
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${99 + id}</span>
                <Button asChild size="sm">
                  <Link to={`/shop/${id}`}>View</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
