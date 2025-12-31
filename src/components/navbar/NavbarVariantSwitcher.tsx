import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Palette, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useNavbarVariant } from '@/hooks/useNavbarVariant'
import { cn } from '@/lib/utils'
import type { NavbarAesthetic, NavbarVibe } from '@/types/navbar'
import { VARIANT_NAMES } from '@/types/navbar'

import { AESTHETICS, VIBES } from './variants'

// Color swatches for each variant
const VARIANT_COLORS: Record<string, { bg: string; accent: string; text: string }> = {
  'action-dark-bold': { bg: '#1a0f0f', accent: '#ff5722', text: '#fff' },
  'action-light-airy': { bg: '#ffffff', accent: '#2196f3', text: '#1a237e' },
  'action-brutalist': { bg: '#f5f0e1', accent: '#ff5722', text: '#1a1a1a' },
  'action-glass': { bg: '#1a1a3e', accent: '#00e5ff', text: '#fff' },
  'premium-dark-bold': { bg: '#0d0d12', accent: '#d4af37', text: '#f5f0e1' },
  'premium-light-airy': { bg: '#f8f4e8', accent: '#8b7355', text: '#3d2b1f' },
  'premium-brutalist': { bg: '#ffffff', accent: '#6a0dad', text: '#1a1a1a' },
  'premium-glass': { bg: '#e8e0f0', accent: '#d4a574', text: '#3d3050' },
  'playful-dark-bold': { bg: '#1a0a2e', accent: '#ff69b4', text: '#fff' },
  'playful-light-airy': { bg: '#fff5fc', accent: '#9c27b0', text: '#4a148c' },
  'playful-brutalist': { bg: '#ffeb3b', accent: '#f44336', text: '#1a1a1a' },
  'playful-glass': { bg: '#ffe4ec', accent: '#9c27b0', text: '#4a148c' },
  'minimal-dark-bold': { bg: '#0f1419', accent: '#4fc3f7', text: '#e1e8ed' },
  'minimal-light-airy': { bg: '#ffffff', accent: '#5c6bc0', text: '#1a237e' },
  'minimal-brutalist': { bg: '#5c6bc0', accent: '#ffffff', text: '#fff' },
  'minimal-glass': { bg: '#e3e7ee', accent: '#5c6bc0', text: '#2c3e50' },
}

// Mini preview of a variant
function VariantPreview({
  vibeId,
  aestheticId,
  isSelected,
  onClick,
}: {
  vibeId: NavbarVibe
  aestheticId: NavbarAesthetic
  isSelected: boolean
  onClick: () => void
}) {
  const key = `${vibeId}-${aestheticId}`
  const colors = VARIANT_COLORS[key] || { bg: '#fff', accent: '#000', text: '#000' }
  const name = VARIANT_NAMES[key] || 'Custom'

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'relative w-full aspect-[3/2] rounded-lg overflow-hidden transition-all',
        'border-2',
        isSelected ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-transparent hover:border-muted-foreground/30'
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      title={name}
    >
      {/* Mini navbar preview */}
      <div
        className="absolute inset-0 flex flex-col"
        style={{ backgroundColor: colors.bg }}
      >
        {/* Header bar */}
        <div
          className="h-3 w-full flex items-center px-1.5 gap-1"
          style={{ borderBottom: `1px solid ${colors.accent}40` }}
        >
          {/* Logo placeholder */}
          <div
            className="h-1.5 w-6 rounded-sm"
            style={{ backgroundColor: colors.text }}
          />
          {/* Nav items */}
          <div className="flex-1 flex justify-center gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-1 w-3 rounded-sm opacity-60"
                style={{ backgroundColor: colors.text }}
              />
            ))}
          </div>
          {/* Action */}
          <div
            className="h-1.5 w-4 rounded-sm"
            style={{ backgroundColor: colors.accent }}
          />
        </div>
        {/* Content placeholder */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-8 h-8 rounded-full opacity-20"
            style={{ backgroundColor: colors.accent }}
          />
        </div>
      </div>

      {/* Selected indicator */}
      {isSelected && (
        <motion.div
          layoutId="selected-indicator"
          className="absolute inset-0 border-2 border-primary rounded-lg"
          initial={false}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  )
}

export function NavbarVariantSwitcher() {
  const { vibe, aesthetic, setVibe, setAesthetic, variantName } = useNavbarVariant()
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'grid' | 'vibes' | 'aesthetics'>('grid')

  const handleVariantSelect = (newVibe: NavbarVibe, newAesthetic: NavbarAesthetic) => {
    setVibe(newVibe)
    setAesthetic(newAesthetic)
  }

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={cn(
              'absolute bottom-full right-0 mb-3',
              'w-80 bg-background border border-border rounded-xl shadow-2xl overflow-hidden'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-sm">Design Variants</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Current Variant */}
            <div className="px-4 py-3 bg-muted/50 border-b border-border">
              <p className="text-xs text-muted-foreground mb-1">Current</p>
              <p className="font-medium text-primary">{variantName}</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-border">
              {[
                { id: 'grid', label: '4×4 Grid' },
                { id: 'vibes', label: 'Vibes' },
                { id: 'aesthetics', label: 'Aesthetics' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={cn(
                    'flex-1 py-2 text-xs font-medium transition-colors',
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 max-h-80 overflow-y-auto">
              {activeTab === 'grid' && (
                <div className="grid grid-cols-4 gap-2">
                  {VIBES.map((vibeConfig) =>
                    AESTHETICS.map((aestheticConfig) => (
                      <VariantPreview
                        key={`${vibeConfig.id}-${aestheticConfig.id}`}
                        vibeId={vibeConfig.id}
                        aestheticId={aestheticConfig.id}
                        isSelected={vibe === vibeConfig.id && aesthetic === aestheticConfig.id}
                        onClick={() => handleVariantSelect(vibeConfig.id, aestheticConfig.id)}
                      />
                    ))
                  )}
                </div>
              )}

              {activeTab === 'vibes' && (
                <div className="space-y-2">
                  {VIBES.map((vibeConfig) => (
                    <button
                      key={vibeConfig.id}
                      onClick={() => setVibe(vibeConfig.id)}
                      className={cn(
                        'w-full p-3 rounded-lg text-left transition-all',
                        'border hover:border-primary',
                        vibe === vibeConfig.id
                          ? 'bg-primary/10 border-primary'
                          : 'bg-muted/30 border-transparent'
                      )}
                    >
                      <div className="font-medium text-sm">{vibeConfig.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {vibeConfig.description}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {activeTab === 'aesthetics' && (
                <div className="space-y-2">
                  {AESTHETICS.map((aestheticConfig) => (
                    <button
                      key={aestheticConfig.id}
                      onClick={() => setAesthetic(aestheticConfig.id)}
                      className={cn(
                        'w-full p-3 rounded-lg text-left transition-all',
                        'border hover:border-primary',
                        aesthetic === aestheticConfig.id
                          ? 'bg-primary/10 border-primary'
                          : 'bg-muted/30 border-transparent'
                      )}
                    >
                      <div className="font-medium text-sm">{aestheticConfig.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {aestheticConfig.description}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with variant name matrix */}
            <div className="p-3 bg-muted/30 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                {VIBES.find((v) => v.id === vibe)?.name} + {AESTHETICS.find((a) => a.id === aesthetic)?.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'rounded-full px-4 py-2 shadow-lg',
            'bg-primary text-primary-foreground hover:bg-primary/90',
            'flex items-center gap-2'
          )}
        >
          <Palette className="h-4 w-4" />
          <span className="text-sm font-medium max-w-32 truncate">{variantName}</span>
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </Button>
      </motion.div>
    </div>
  )
}
