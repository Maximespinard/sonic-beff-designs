import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TeamRiders() {
  const riders = [
    { name: "Alex Johnson", role: "Pro Rider", initials: "AJ" },
    { name: "Sarah Williams", role: "Pro Rider", initials: "SW" },
    { name: "Mike Chen", role: "Team Captain", initials: "MC" },
    { name: "Emma Davis", role: "Pro Rider", initials: "ED" },
  ]

  return (
    <div className="container py-8">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Team Riders</h1>
        <p className="text-lg text-muted-foreground">
          Meet our talented team of professional riders who represent Sonic Beff around the
          world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {riders.map((rider) => (
          <Card key={rider.name} className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl">{rider.initials}</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle>{rider.name}</CardTitle>
              <CardDescription>{rider.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Professional rider with years of experience and multiple championship wins.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
