import { useState } from "react"
import { Link } from "react-router-dom"
import { Check, CreditCard, Lock, MapPin, Package, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

// Placeholder order items
const ORDER_ITEMS = [
  {
    id: 1,
    name: "Product 1",
    price: 299.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Product 2",
    price: 199.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
]

const STEPS = [
  { id: 1, name: "Shipping", icon: Truck },
  { id: 2, name: "Payment", icon: CreditCard },
  { id: 3, name: "Review", icon: Package },
]

export function Checkout() {
  const [currentStep, setCurrentStep] = useState(1)
  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  })

  const subtotal = ORDER_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10.0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&display=swap');

        .checkout-heading {
          font-family: 'Crimson Pro', serif;
          letter-spacing: -0.02em;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .step-content {
          animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .order-summary-item {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .checkout-input:focus {
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }
      `}</style>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="checkout-heading text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Secure Checkout
          </h1>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Lock className="h-4 w-4 text-amber-500" />
            Your information is protected with 256-bit SSL encryption
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted -z-10">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
              />
            </div>

            {STEPS.map((step) => {
              const Icon = step.icon
              const isCompleted = currentStep > step.id
              const isCurrent = currentStep === step.id

              return (
                <div key={step.id} className="flex flex-col items-center gap-2 bg-background px-2">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                      isCompleted &&
                        "bg-gradient-to-br from-amber-500 to-amber-600 border-amber-500 shadow-lg shadow-amber-500/30",
                      isCurrent &&
                        "bg-background border-amber-500 shadow-lg shadow-amber-500/20 scale-110",
                      !isCompleted && !isCurrent && "bg-muted border-muted-foreground/20"
                    )}
                  >
                    {isCompleted ? (
                      <Check className="h-5 w-5 text-white" />
                    ) : (
                      <Icon
                        className={cn(
                          "h-5 w-5",
                          isCurrent ? "text-amber-500" : "text-muted-foreground"
                        )}
                      />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors",
                      (isCompleted || isCurrent) && "text-foreground",
                      !isCompleted && !isCurrent && "text-muted-foreground"
                    )}
                  >
                    {step.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="border-muted-foreground/20 shadow-xl">
              <CardContent className="p-8">
                {/* Step 1: Shipping Information */}
                {currentStep === 1 && (
                  <div className="step-content space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-amber-500/10">
                        <MapPin className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <h2 className="checkout-heading text-2xl font-semibold">
                          Shipping Information
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Where should we send your order?
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input
                          placeholder="John"
                          className="checkout-input"
                          value={shippingData.firstName}
                          onChange={(e) =>
                            setShippingData({ ...shippingData, firstName: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input
                          placeholder="Doe"
                          className="checkout-input"
                          value={shippingData.lastName}
                          onChange={(e) =>
                            setShippingData({ ...shippingData, lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="checkout-input"
                        value={shippingData.email}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Street Address</label>
                      <Input
                        placeholder="123 Main Street"
                        className="checkout-input"
                        value={shippingData.address}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, address: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">City</label>
                        <Input
                          placeholder="New York"
                          className="checkout-input"
                          value={shippingData.city}
                          onChange={(e) =>
                            setShippingData({ ...shippingData, city: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">State</label>
                        <Input
                          placeholder="NY"
                          className="checkout-input"
                          value={shippingData.state}
                          onChange={(e) =>
                            setShippingData({ ...shippingData, state: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">ZIP Code</label>
                        <Input
                          placeholder="10001"
                          className="checkout-input"
                          value={shippingData.zipCode}
                          onChange={(e) =>
                            setShippingData({ ...shippingData, zipCode: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Country</label>
                      <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm checkout-input">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Payment Method */}
                {currentStep === 2 && (
                  <div className="step-content space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-amber-500/10">
                        <CreditCard className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <h2 className="checkout-heading text-2xl font-semibold">
                          Payment Method
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          All transactions are secure and encrypted
                        </p>
                      </div>
                    </div>

                    {/* Payment Options */}
                    <div className="space-y-3">
                      <div className="border-2 border-amber-500 rounded-lg p-4 bg-amber-50 dark:bg-amber-950/20">
                        <div className="flex items-center gap-3 mb-4">
                          <input
                            type="radio"
                            name="payment"
                            id="card"
                            className="w-4 h-4 text-amber-500"
                            defaultChecked
                          />
                          <label htmlFor="card" className="font-medium flex-1">
                            Credit / Debit Card
                          </label>
                          <div className="flex gap-2">
                            <div className="w-10 h-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded flex items-center justify-center text-[10px] font-bold text-white">
                              VISA
                            </div>
                            <div className="w-10 h-6 bg-gradient-to-br from-orange-600 to-orange-400 rounded flex items-center justify-center text-[10px] font-bold text-white">
                              MC
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 pl-7">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Card Number</label>
                            <Input
                              placeholder="1234 5678 9012 3456"
                              className="checkout-input"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Expiry Date</label>
                              <Input placeholder="MM/YY" className="checkout-input" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">CVV</label>
                              <Input placeholder="123" className="checkout-input" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 hover:border-amber-500/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input type="radio" name="payment" id="paypal" className="w-4 h-4" />
                          <label htmlFor="paypal" className="font-medium flex-1 cursor-pointer">
                            PayPal
                          </label>
                          <div className="w-16 h-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded flex items-center justify-center text-xs font-bold text-white">
                            PayPal
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Review Order */}
                {currentStep === 3 && (
                  <div className="step-content space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-amber-500/10">
                        <Package className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <h2 className="checkout-heading text-2xl font-semibold">Review Order</h2>
                        <p className="text-sm text-muted-foreground">
                          Please review your order before placing it
                        </p>
                      </div>
                    </div>

                    {/* Shipping Info Review */}
                    <div className="space-y-3">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Truck className="h-4 w-4 text-amber-500" />
                        Shipping Address
                      </h3>
                      <div className="bg-muted/50 rounded-lg p-4 text-sm space-y-1">
                        <p className="font-medium">
                          {shippingData.firstName} {shippingData.lastName}
                        </p>
                        <p className="text-muted-foreground">{shippingData.email}</p>
                        <p className="text-muted-foreground">{shippingData.address}</p>
                        <p className="text-muted-foreground">
                          {shippingData.city}, {shippingData.state} {shippingData.zipCode}
                        </p>
                        <p className="text-muted-foreground">{shippingData.country}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
                        Edit Shipping
                      </Button>
                    </div>

                    <Separator />

                    {/* Payment Method Review */}
                    <div className="space-y-3">
                      <h3 className="font-semibold flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-amber-500" />
                        Payment Method
                      </h3>
                      <div className="bg-muted/50 rounded-lg p-4 text-sm">
                        <p className="font-medium">Credit Card ending in 3456</p>
                        <p className="text-muted-foreground">Expires 12/25</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setCurrentStep(2)}>
                        Edit Payment
                      </Button>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={handleBack} className="flex-1">
                      Back
                    </Button>
                  )}
                  {currentStep < 3 ? (
                    <Button
                      onClick={handleNext}
                      className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/30"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/30">
                      Place Order
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card className="border-muted-foreground/20 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 p-6 border-b">
                  <h2 className="checkout-heading text-2xl font-semibold mb-1">Order Summary</h2>
                  <p className="text-sm text-muted-foreground">
                    {ORDER_ITEMS.length} {ORDER_ITEMS.length === 1 ? "item" : "items"}
                  </p>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Order Items */}
                  <div className="space-y-4">
                    {ORDER_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        className="order-summary-item flex gap-3"
                      >
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                            {item.quantity}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm truncate">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">Premium quality</p>
                          <p className="text-sm font-semibold mt-1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Total */}
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-amber-600 dark:text-amber-500">${total.toFixed(2)}</span>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-4 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Lock className="h-3 w-3 text-amber-500" />
                      <span>Secure SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-3 w-3 text-amber-500" />
                      <span>Free returns within 30 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Back to Cart Link */}
              <Button variant="ghost" asChild className="w-full mt-4">
                <Link to="/cart">← Back to Cart</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
