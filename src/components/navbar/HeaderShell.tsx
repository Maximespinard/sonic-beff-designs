import * as React from 'react'

import { useNavbarVariant } from '@/hooks/useNavbarVariant'
import { cn } from '@/lib/utils'

interface HeaderShellProps {
  children: React.ReactNode
  className?: string
}

export function HeaderShell({ children, className }: HeaderShellProps) {
  const { aesthetic, currentVariant } = useNavbarVariant()

  // Determine special border/pattern classes based on variant
  const getBorderClass = () => {
    if (!currentVariant) return ''

    const effect = currentVariant.effects.specialEffect
    switch (effect) {
      case 'gradient-border':
        return 'navbar-gradient-border'
      case 'gold-line':
        return 'navbar-gold-line'
      case 'pixel-line':
        return 'navbar-pixel-line'
      case 'prism-border':
        return 'navbar-prism-border'
      case 'iridescent-border':
        return 'navbar-prism-border'
      case 'dots-pattern':
        return 'navbar-dots-pattern'
      case 'grid-pattern':
        return 'navbar-grid-pattern'
      default:
        return ''
    }
  }

  // Get backdrop filter styles for glass aesthetic
  const getBackdropStyles = (): React.CSSProperties => {
    if (aesthetic === 'glass') {
      return {
        backdropFilter: `blur(var(--navbar-backdrop-blur)) saturate(var(--navbar-backdrop-saturate))`,
        WebkitBackdropFilter: `blur(var(--navbar-backdrop-blur)) saturate(var(--navbar-backdrop-saturate))`,
      }
    }
    return {}
  }

  return (
    <header
      className={cn(
        // Base structure
        'sticky top-0 z-50 w-full',
        // Dynamic styles via CSS variables
        'transition-all',
        // Border
        'border-b',
        // Special effects
        getBorderClass(),
        className
      )}
      style={{
        height: 'var(--navbar-height)',
        backgroundColor: 'var(--navbar-bg)',
        borderColor: 'var(--navbar-border)',
        borderWidth: 'var(--navbar-border-width)',
        borderRadius: 'var(--navbar-border-radius)',
        boxShadow: 'var(--navbar-shadow)',
        transitionDuration: 'var(--navbar-transition-duration)',
        transitionTimingFunction: 'var(--navbar-transition-timing)',
        ...getBackdropStyles(),
      }}
    >
      <div
        className="container mx-auto flex h-full items-center justify-between"
        style={{
          paddingLeft: 'var(--navbar-padding-x)',
          paddingRight: 'var(--navbar-padding-x)',
        }}
      >
        {children}
      </div>
    </header>
  )
}
