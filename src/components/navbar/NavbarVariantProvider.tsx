import * as React from 'react'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import type {
  NavbarAesthetic,
  NavbarVariant,
  NavbarVariantContextValue,
  NavbarVibe,
} from '@/types/navbar'
import { VARIANT_NAMES } from '@/types/navbar'

import { VARIANTS } from './variants'

const NavbarVariantContext = createContext<NavbarVariantContextValue | null>(null)

const STORAGE_KEY = 'sonic-beff-navbar-variant'

interface StoredVariant {
  vibe: NavbarVibe
  aesthetic: NavbarAesthetic
}

interface NavbarVariantProviderProps {
  children: React.ReactNode
  defaultVibe?: NavbarVibe
  defaultAesthetic?: NavbarAesthetic
}

export function NavbarVariantProvider({
  children,
  defaultVibe = 'action',
  defaultAesthetic = 'dark-bold',
}: NavbarVariantProviderProps) {
  // Initialize from localStorage or defaults
  const [vibe, setVibeState] = useState<NavbarVibe>(() => {
    if (typeof window === 'undefined') return defaultVibe
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed: StoredVariant = JSON.parse(stored)
        return parsed.vibe || defaultVibe
      }
    } catch {
      // Ignore parse errors
    }
    return defaultVibe
  })

  const [aesthetic, setAestheticState] = useState<NavbarAesthetic>(() => {
    if (typeof window === 'undefined') return defaultAesthetic
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed: StoredVariant = JSON.parse(stored)
        return parsed.aesthetic || defaultAesthetic
      }
    } catch {
      // Ignore parse errors
    }
    return defaultAesthetic
  })

  // Persist to localStorage
  useEffect(() => {
    const toStore: StoredVariant = { vibe, aesthetic }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
  }, [vibe, aesthetic])

  // Apply data attributes to document
  useEffect(() => {
    document.documentElement.setAttribute('data-vibe', vibe)
    document.documentElement.setAttribute('data-aesthetic', aesthetic)
  }, [vibe, aesthetic])

  const setVibe = useCallback((newVibe: NavbarVibe) => {
    setVibeState(newVibe)
  }, [])

  const setAesthetic = useCallback((newAesthetic: NavbarAesthetic) => {
    setAestheticState(newAesthetic)
  }, [])

  const variantKey = `${vibe}-${aesthetic}`
  const variantName = VARIANT_NAMES[variantKey] || 'Custom'

  const currentVariant: NavbarVariant | null = useMemo(() => {
    return VARIANTS.find((v) => v.vibe === vibe && v.aesthetic === aesthetic) || null
  }, [vibe, aesthetic])

  const value: NavbarVariantContextValue = useMemo(
    () => ({
      vibe,
      aesthetic,
      setVibe,
      setAesthetic,
      variantKey,
      variantName,
      currentVariant,
    }),
    [vibe, aesthetic, setVibe, setAesthetic, variantKey, variantName, currentVariant]
  )

  return (
    <NavbarVariantContext.Provider value={value}>
      {children}
    </NavbarVariantContext.Provider>
  )
}

export { NavbarVariantContext }
