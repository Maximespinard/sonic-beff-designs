import { useContext } from 'react'

import { NavbarVariantContext } from '@/components/navbar/NavbarVariantProvider'
import type { NavbarVariantContextValue } from '@/types/navbar'

export function useNavbarVariant(): NavbarVariantContextValue {
  const context = useContext(NavbarVariantContext)

  if (!context) {
    throw new Error('useNavbarVariant must be used within a NavbarVariantProvider')
  }

  return context
}
