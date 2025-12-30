import { Link } from "react-router-dom"
import { ThemeToggle } from "@/components/theme/ThemeToggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Sonic Beff</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              to="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Shop
            </Link>
            <Link
              to="/team"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Team Riders
            </Link>
            <Link
              to="/contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="text-sm text-foreground/60 hover:text-foreground/80 transition-colors"
          >
            Login
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
