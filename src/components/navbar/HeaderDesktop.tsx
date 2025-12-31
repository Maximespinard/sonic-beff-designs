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
import { useNavbarVariant } from '@/hooks/useNavbarVariant'
import { cn } from '@/lib/utils'

// Logo component with variant-specific animations
function Logo() {
  const { currentVariant } = useNavbarVariant()

  const getLogoAnimation = () => {
    if (!currentVariant) return ''

    switch (currentVariant.effects.logoAnimation) {
      case 'flicker':
        return 'hover:animate-[flicker_0.5s_ease-in-out]'
      case 'glitch':
        return 'hover:animate-[glitch_0.3s_ease-in-out]'
      case 'rgb-shift':
        return 'animate-[rgb-shift_2s_ease-in-out_infinite]'
      case 'gold-shimmer':
        return 'hover:bg-gradient-to-r hover:from-transparent hover:via-[var(--navbar-accent)] hover:to-transparent hover:bg-[length:200%_100%] hover:animate-[gold-shimmer_1.5s_ease-in-out_infinite] hover:bg-clip-text'
      case 'wobble':
        return 'hover:animate-[wobble_0.5s_ease-in-out]'
      case 'rainbow-shimmer':
        return 'hover:animate-[rainbow-shimmer_3s_linear_infinite]'
      case 'weight-shift':
        return 'transition-all duration-300 hover:font-semibold'
      case 'metallic-sheen':
        return 'hover:bg-gradient-to-r hover:from-transparent hover:via-white/20 hover:to-transparent hover:bg-[length:200%_100%] hover:animate-[metallic-sheen_1s_ease-in-out]'
      default:
        return ''
    }
  }

  return (
    <Link
      to="/"
      className={cn(
        'flex items-center transition-all',
        getLogoAnimation()
      )}
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

// Navigation link with variant-specific hover effects
function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const { currentVariant } = useNavbarVariant()

  const getHoverClass = () => {
    if (!currentVariant) return ''

    switch (currentVariant.effects.hoverEffect) {
      case 'glow-lift':
        return 'hover:translate-y-[-2px] hover:shadow-[0_4px_12px_var(--navbar-accent)]'
      case 'color-flip':
        return 'hover:bg-[var(--navbar-hover-bg)] hover:text-white'
      case 'invert':
        return 'hover:bg-[var(--navbar-hover-bg)] hover:text-[var(--navbar-bg)]'
      case 'neon-pulse':
        return 'hover:animate-[neon-pulse_1s_ease-in-out_infinite]'
      case 'gold-underline-expand':
        return 'relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--navbar-accent)] after:transition-all hover:after:w-full hover:tracking-[0.25em]'
      case 'delicate-underline':
        return 'relative after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-0 after:bg-[var(--navbar-accent)] after:transition-all after:-translate-x-1/2 hover:after:w-full'
      case 'color-block':
        return 'hover:bg-[var(--navbar-accent)] hover:text-white transition-none'
      case 'soft-glow':
        return 'hover:shadow-[0_0_20px_var(--navbar-accent)] transition-shadow'
      case 'gradient-text':
        return 'hover:bg-gradient-to-r hover:from-[var(--navbar-accent)] hover:via-[var(--navbar-accent-secondary)] hover:to-[var(--navbar-accent)] hover:bg-clip-text hover:text-transparent'
      case 'bounce-color':
        return 'hover:translate-y-[-3px] hover:text-[var(--navbar-accent)] transition-all'
      case 'comic-explosion':
        return 'hover:bg-[var(--navbar-accent)] hover:text-white hover:scale-110 hover:rotate-[-2deg] transition-all'
      case 'bubble-pop':
        return 'hover:scale-105 hover:bg-[var(--navbar-hover-bg)] transition-transform'
      case 'blue-glow':
        return 'hover:text-[var(--navbar-accent)] hover:drop-shadow-[0_0_8px_var(--navbar-accent)]'
      case 'underline-grow':
        return 'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--navbar-accent)] after:transition-all hover:after:w-full'
      case 'invert-block':
        return 'hover:bg-[var(--navbar-accent)] hover:text-[var(--navbar-bg)] px-3 transition-colors'
      case 'opacity-shift':
        return 'hover:opacity-70 transition-opacity'
      default:
        return 'hover:bg-[var(--navbar-hover-bg)]'
    }
  }

  return (
    <Link
      to={href}
      className={cn(
        'px-4 py-2 rounded-sm transition-all',
        getHoverClass(),
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
  const { currentVariant, aesthetic } = useNavbarVariant()

  const getHoverClass = () => {
    if (!currentVariant) return ''

    switch (currentVariant.effects.hoverEffect) {
      case 'glow-lift':
        return 'hover:translate-y-[-2px] hover:shadow-[0_4px_12px_var(--navbar-accent)]'
      case 'color-flip':
        return 'hover:bg-[var(--navbar-hover-bg)] hover:text-white'
      case 'invert':
        return 'hover:bg-[var(--navbar-hover-bg)] hover:text-[var(--navbar-bg)]'
      default:
        return 'hover:bg-[var(--navbar-hover-bg)]'
    }
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              'px-4 py-2 transition-all bg-transparent',
              getHoverClass()
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
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div
              className="grid gap-3 p-6 w-[450px] grid-cols-[.75fr_1fr]"
              style={{
                backgroundColor: 'var(--navbar-bg)',
                borderRadius: aesthetic === 'brutalist' ? '0' : '0.5rem',
                border: `var(--navbar-border-width) solid var(--navbar-border)`,
                boxShadow: 'var(--navbar-shadow)',
              }}
            >
              {/* Featured Product */}
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/shop"
                    className={cn(
                      'flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-none transition-all',
                      'bg-gradient-to-b from-[var(--navbar-accent)]/20 to-[var(--navbar-accent)]/40',
                      getHoverClass()
                    )}
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
                    className={cn(
                      'block select-none rounded-md p-3 leading-none no-underline outline-none transition-all',
                      getHoverClass()
                    )}
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
                    color: aesthetic === 'dark-bold' || aesthetic === 'glass' ? 'white' : 'var(--navbar-bg)',
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

// Search input with variant styling
function SearchInput() {
  const { aesthetic } = useNavbarVariant()

  return (
    <div className="relative">
      <Search
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
        style={{ color: 'var(--navbar-text-muted)' }}
      />
      <Input
        type="search"
        placeholder="Search..."
        className={cn(
          'pl-10 w-56 transition-all',
          aesthetic === 'brutalist' && 'rounded-none border-2',
          aesthetic === 'glass' && 'bg-white/10 border-white/20'
        )}
        style={{
          fontFamily: 'var(--navbar-font-family)',
          fontSize: 'var(--navbar-font-size)',
          backgroundColor: aesthetic === 'glass' ? 'var(--navbar-hover-bg)' : undefined,
          borderColor: 'var(--navbar-border)',
          color: 'var(--navbar-text)',
        }}
      />
    </div>
  )
}

// Main desktop header component
export function HeaderDesktop() {
  const { currentVariant } = useNavbarVariant()

  const getHoverClass = () => {
    if (!currentVariant) return ''

    switch (currentVariant.effects.hoverEffect) {
      case 'invert':
      case 'color-flip':
        return 'hover:bg-[var(--navbar-hover-bg)] hover:text-[var(--navbar-bg)]'
      case 'invert-block':
        return 'hover:bg-[var(--navbar-accent)] hover:text-[var(--navbar-bg)]'
      default:
        return 'hover:bg-[var(--navbar-hover-bg)]'
    }
  }

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
          className={cn('transition-all', getHoverClass())}
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
