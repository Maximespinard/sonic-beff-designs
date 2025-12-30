import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function Legal() {
  return (
    <div className="container py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Legal Information</h1>
        <p className="text-lg text-muted-foreground">
          Terms & Conditions and Privacy Policy
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Terms & Conditions</CardTitle>
            <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
              <p className="text-sm text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the
                terms and provision of this agreement.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">2. Use License</h3>
              <p className="text-sm text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials on
                Sonic Beff's website for personal, non-commercial transitory viewing only.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">3. Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                The materials on Sonic Beff's website are provided on an 'as is' basis. Sonic
                Beff makes no warranties, expressed or implied, and hereby disclaims and
                negates all other warranties.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
            <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Information We Collect</h3>
              <p className="text-sm text-muted-foreground">
                We collect information that you provide directly to us, including your name,
                email address, and any other information you choose to provide.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">2. How We Use Your Information</h3>
              <p className="text-sm text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our
                services, to communicate with you, and to comply with legal obligations.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">3. Data Security</h3>
              <p className="text-sm text-muted-foreground">
                We take reasonable measures to help protect information about you from loss,
                theft, misuse and unauthorized access, disclosure, alteration and destruction.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
