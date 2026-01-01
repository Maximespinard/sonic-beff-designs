import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/shop',
    children: [
      { label: 'Product 1', href: '/shop/1' },
      { label: 'Product 2', href: '/shop/2' },
      { label: 'Product 3', href: '/shop/3' },
    ],
  },
  { label: 'Team Riders', href: '/team' },
  { label: 'Cart', href: '/cart' },
  { label: 'Contact', href: '/contact' },
  { label: 'Legal', href: '/legal' },
]

// Mobile menu trigger button
function MobileMenuTrigger({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="lg:hidden relative"
      style={{ color: 'var(--navbar-text)' }}
    >
      <Menu className="h-6 w-6" />
      <span className="sr-only">Open menu</span>
    </Button>
  )
}

// Mobile logo
function MobileLogo({ onClick }: { onClick: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center lg:hidden"
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

// Static White Lightning (light-airy) animation variants
const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: 'easeOut' as const },
}

const itemAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
}

// Full-screen mobile menu overlay
function MobileMenuOverlay({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [productsOpen, setProductsOpen] = useState(false)

  // Container variants for stagger (static light-airy timing)
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  }

  return (
    <AnimatePresence>
      {open && (
        <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50"
                style={{
                  backgroundColor: 'var(--navbar-bg)',
                }}
                initial={overlayAnimation.initial}
                animate={overlayAnimation.animate}
                exit={overlayAnimation.exit}
                transition={overlayAnimation.transition}
              />
            </Dialog.Overlay>

            {/* Content */}
            <Dialog.Content asChild>
              <motion.div
                className="fixed inset-0 z-50 flex flex-col overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between p-6"
                  style={{ minHeight: 'var(--navbar-height)' }}
                >
                  <Link
                    to="/"
                    onClick={onClose}
                    style={{
                      fontFamily: 'var(--navbar-logo-font-family)',
                      fontSize: 'calc(var(--navbar-logo-font-size) * 1.25)',
                      fontWeight: 'var(--navbar-logo-font-weight)',
                      letterSpacing: 'var(--navbar-logo-letter-spacing)',
                      color: 'var(--navbar-text)',
                    }}
                  >
                    Sonic Beff
                  </Link>

                  <Dialog.Close asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      style={{ color: 'var(--navbar-text)' }}
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </Dialog.Close>
                </div>

                {/* Navigation Links */}
                <motion.nav
                  className="flex-1 flex flex-col justify-center px-8 py-12"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {NAV_LINKS.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={itemAnimation}
                      transition={{
                        type: 'tween',
                        duration: 0.3,
                      }}
                    >
                      {link.children ? (
                        // Products with submenu
                        <div className="mb-6">
                          <button
                            onClick={() => setProductsOpen(!productsOpen)}
                            className="flex items-center justify-between w-full text-left transition-all py-3"
                            style={{
                              fontFamily: 'var(--navbar-font-family)',
                              fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                              fontWeight: 'var(--navbar-font-weight)',
                              letterSpacing: 'var(--navbar-letter-spacing)',
                              textTransform: 'var(--navbar-text-transform)' as React.CSSProperties['textTransform'],
                              color: 'var(--navbar-text)',
                            }}
                          >
                            {link.label}
                            <ChevronDown
                              className={cn(
                                'h-6 w-6 transition-transform',
                                productsOpen && 'rotate-180'
                              )}
                            />
                          </button>

                          <AnimatePresence>
                            {productsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4 mt-2"
                              >
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    onClick={onClose}
                                    className={cn(
                                      'block py-2 transition-colors',
                                      'hover:text-(--navbar-accent)'
                                    )}
                                    style={{
                                      fontFamily: 'var(--navbar-font-family)',
                                      fontSize: 'clamp(1rem, 4vw, 1.25rem)',
                                      color: 'var(--navbar-text-muted)',
                                    }}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                                <Link
                                  to="/shop"
                                  onClick={onClose}
                                  className={cn(
                                    'block py-2 mt-2 font-semibold',
                                    'hover:text-(--navbar-accent)'
                                  )}
                                  style={{
                                    fontFamily: 'var(--navbar-font-family)',
                                    fontSize: 'clamp(1rem, 4vw, 1.25rem)',
                                    color: 'var(--navbar-accent)',
                                  }}
                                >
                                  View All Products
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        // Regular link
                        <Link
                          to={link.href}
                          onClick={onClose}
                          className="block py-3 mb-4 transition-all hover:text-(--navbar-accent) hover:translate-x-2"
                          style={{
                            fontFamily: 'var(--navbar-font-family)',
                            fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                            fontWeight: 'var(--navbar-font-weight)',
                            letterSpacing: 'var(--navbar-letter-spacing)',
                            textTransform: 'var(--navbar-text-transform)' as React.CSSProperties['textTransform'],
                            color: 'var(--navbar-text)',
                          }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Footer Actions */}
                <motion.div
                  className="p-8 space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Search */}
                  <div className="relative">
                    <Search
                      className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                      style={{ color: 'var(--navbar-text-muted)' }}
                    />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-12 py-6 text-lg"
                      style={{
                        fontFamily: 'var(--navbar-font-family)',
                        borderColor: 'var(--navbar-border)',
                        color: 'var(--navbar-text)',
                      }}
                    />
                  </div>

                  {/* Sign In Button */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full py-6 text-lg"
                    style={{
                      backgroundColor: 'var(--navbar-accent)',
                      color: 'var(--navbar-bg)',
                      fontFamily: 'var(--navbar-font-family)',
                      letterSpacing: 'var(--navbar-letter-spacing)',
                      textTransform: 'var(--navbar-text-transform)' as React.CSSProperties['textTransform'],
                    }}
                  >
                    <Link to="/login" onClick={onClose}>
                      Sign In
                    </Link>
                  </Button>

                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--navbar-font-family)',
                        color: 'var(--navbar-text-muted)',
                      }}
                    >
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  )
}

// Main mobile header export
export function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="flex lg:hidden items-center justify-between w-full">
        <MobileMenuTrigger onClick={() => setMenuOpen(true)} />
        <MobileLogo onClick={() => setMenuOpen(false)} />
        <ThemeToggle />
      </div>

      <MobileMenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
