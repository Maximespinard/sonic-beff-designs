import * as React from 'react'
import { Link } from 'react-router-dom'
import { Search, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'

// Logo component
function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center transition-all"
      style={{
        fontFamily: 'var(--navbar-logo-font-family)',
        fontSize: 'var(--navbar-logo-font-size)',
        fontWeight: 'var(--navbar-logo-font-weight)',
        letterSpacing: 'var(--navbar-logo-letter-spacing)',
        color: 'var(--navbar-text)',
      }}
    >
      Sonic Beff
    </Link>
  )
}

// Navigation link with White Lightning hover effect (color-flip)
function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      to={href}
      className={cn(
        'px-4 py-2 rounded-sm transition-all hover:bg-(--navbar-hover-bg) hover:text-white',
        className
      )}
      style={{
        fontFamily: 'var(--navbar-font-family)',
        fontSize: 'var(--navbar-font-size)',
        fontWeight: 'var(--navbar-font-weight)',
        letterSpacing: 'var(--navbar-letter-spacing)',
        textTransform: 'var(--navbar-text-transform)' as React.CSSProperties['textTransform'],
        color: 'var(--navbar-text)',
      }}
    >
      {children}
    </Link>
  )
}

// Products dropdown with featured section
function ProductsMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="px-4 py-2 transition-all bg-transparent hover:bg-(--navbar-hover-bg) hover:text-white"
            style={{
              fontFamily: 'var(--navbar-font-family)',
              fontSize: 'var(--navbar-font-size)',
              fontWeight: 'var(--navbar-font-weight)',
              letterSpacing: 'var(--navbar-letter-spacing)',
              textTransform: 'var(--navbar-text-transform)' as React.CSSProperties['textTransform'],
              color: 'var(--navbar-text)',
            }}
          >
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div
              className="grid gap-3 p-6 w-[450px] grid-cols-[.75fr_1fr]"
              style={{
                backgroundColor: 'var(--navbar-bg)',
                borderRadius: '0.5rem',
                border: `var(--navbar-border-width) solid var(--navbar-border)`,
                boxShadow: 'var(--navbar-shadow)',
              }}
            >
              {/* Featured Product */}
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/shop"
                    className="flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-none transition-all bg-linear-to-b from-(--navbar-accent)/20 to-(--navbar-accent)/40 hover:bg-(--navbar-hover-bg) hover:text-white"
                  >
                    <div
                      className="mb-2 mt-4 text-lg"
                      style={{
                        fontFamily: 'var(--navbar-logo-font-family)',
                        fontWeight: 'var(--navbar-logo-font-weight)',
                        color: 'var(--navbar-text)',
                      }}
                    >
                      Featured
                    </div>
                    <p
                      className="text-sm leading-tight"
                      style={{ color: 'var(--navbar-text-muted)' }}
                    >
                      Discover our latest collection
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>

              {/* Product Links */}
              {[
                { title: 'Product 1', desc: 'Premium quality', href: '/shop/1' },
                { title: 'Product 2', desc: 'Top rated item', href: '/shop/2' },
                { title: 'Product 3', desc: 'Best seller', href: '/shop/3' },
              ].map((product) => (
                <NavigationMenuLink asChild key={product.href}>
                  <Link
                    to={product.href}
                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-(--navbar-hover-bg) hover:text-white"
                  >
                    <div
                      className="text-sm font-medium leading-none mb-1"
                      style={{
                        fontFamily: 'var(--navbar-font-family)',
                        color: 'var(--navbar-text)',
                      }}
                    >
                      {product.title}
                    </div>
                    <p
                      className="text-sm leading-snug"
                      style={{ color: 'var(--navbar-text-muted)' }}
                    >
                      {product.desc}
                    </p>
                  </Link>
                </NavigationMenuLink>
              ))}

              {/* View All Button */}
              <div className="col-span-2 pt-2">
                <Button
                  asChild
                  className="w-full"
                  style={{
                    backgroundColor: 'var(--navbar-accent)',
                    color: 'var(--navbar-bg)',
                    fontFamily: 'var(--navbar-font-family)',
                    letterSpacing: 'var(--navbar-letter-spacing)',
                    textTransform: 'var(--navbar-text-transform)' as React.CSSProperties['textTransform'],
                  }}
                >
                  <Link to="/shop">View All Products</Link>
                </Button>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// Search input
function SearchInput() {
  return (
    <div className="relative">
      <Search
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
        style={{ color: 'var(--navbar-text-muted)' }}
      />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-10 w-56 transition-all"
        style={{
          fontFamily: 'var(--navbar-font-family)',
          fontSize: 'var(--navbar-font-size)',
          borderColor: 'var(--navbar-border)',
          color: 'var(--navbar-text)',
        }}
      />
    </div>
  )
}

// Main desktop header component
export function HeaderDesktop() {
  return (
    <div className="hidden lg:flex items-center justify-between w-full">
      {/* Logo */}
      <Logo />

      {/* Navigation */}
      <nav className="flex items-center" style={{ gap: 'var(--navbar-gap)' }}>
        <ProductsMenu />
        <NavLink href="/team">Team Riders</NavLink>
        <NavLink href="/cart">Cart</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/legal">Legal</NavLink>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3 relative z-50">
        <SearchInput />

        <Button
          asChild
          variant="ghost"
          size="sm"
          className="transition-all hover:bg-(--navbar-hover-bg) hover:text-(--navbar-bg)"
          style={{
            fontFamily: 'var(--navbar-font-family)',
            fontSize: 'var(--navbar-font-size)',
            letterSpacing: 'var(--navbar-letter-spacing)',
            textTransform: 'var(--navbar-text-transform)' as React.CSSProperties['textTransform'],
            color: 'var(--navbar-text)',
          }}
        >
          <Link to="/login">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Link>
        </Button>

        <ThemeToggle />
      </div>
    </div>
  )
}
