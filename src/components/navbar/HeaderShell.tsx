import * as React from 'react'

import { cn } from '@/lib/utils'

interface HeaderShellProps {
  children: React.ReactNode
  className?: string
}

export function HeaderShell({ children, className }: HeaderShellProps) {
  return (
    <header
      className={cn(
        // Base structure
        'sticky top-0 z-50 w-full',
        // Dynamic styles via CSS variables
        'transition-all',
        // Border
        'border-b',
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
