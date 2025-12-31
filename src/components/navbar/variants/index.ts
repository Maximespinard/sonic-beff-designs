import type { NavbarAesthetic, NavbarVariant, NavbarVibe } from '@/types/navbar'

export { AESTHETICS, getAestheticById } from './aesthetics'
export { getVibeById, VIBES } from './vibes'

// All 16 variant configurations with their unique characteristics
export const VARIANTS: NavbarVariant[] = [
  // ===== ACTION VARIANTS =====
  {
    id: 'action-dark-bold',
    name: 'Midnight Thunder',
    vibe: 'action',
    aesthetic: 'dark-bold',
    colors: {
      background: 'oklch(0.10 0.04 15)',
      backgroundOpacity: 0.98,
      border: 'oklch(0.65 0.28 30)',
      text: 'oklch(0.98 0 0)',
      textMuted: 'oklch(0.60 0.04 15)',
      accent: 'oklch(0.65 0.28 30)',
      accentSecondary: 'oklch(0.58 0.24 340)',
      hoverBg: 'oklch(0.16 0.06 25)',
      shadow: '0 4px 20px oklch(0.65 0.28 30 / 0.25)',
    },
    effects: {
      logoAnimation: 'flicker',
      hoverEffect: 'glow-lift',
      mobileEntrance: 'slide-right-stagger',
      specialEffect: 'gradient-border',
    },
  },
  {
    id: 'action-light-airy',
    name: 'White Lightning',
    vibe: 'action',
    aesthetic: 'light-airy',
    colors: {
      background: 'oklch(0.995 0 0)',
      backgroundOpacity: 0.95,
      border: 'oklch(0.92 0.02 250)',
      text: 'oklch(0.15 0.03 250)',
      textMuted: 'oklch(0.50 0.03 250)',
      accent: 'oklch(0.52 0.22 250)',
      accentSecondary: 'oklch(0.68 0.22 145)',
      hoverBg: 'oklch(0.52 0.22 250)',
      shadow: '0 2px 8px oklch(0.52 0.22 250 / 0.12)',
    },
    effects: {
      logoAnimation: 'lightning-underline',
      hoverEffect: 'color-flip',
      mobileEntrance: 'geometric-reveal',
    },
  },
  {
    id: 'action-brutalist',
    name: 'Raw Power',
    vibe: 'action',
    aesthetic: 'brutalist',
    colors: {
      background: 'oklch(0.94 0.02 85)',
      backgroundOpacity: 1,
      border: 'oklch(0.08 0 0)',
      text: 'oklch(0.08 0 0)',
      textMuted: 'oklch(0.35 0 0)',
      accent: 'oklch(0.58 0.26 30)',
      accentSecondary: 'oklch(0.08 0 0)',
      hoverBg: 'oklch(0.08 0 0)',
      shadow: '8px 8px 0 oklch(0.08 0 0)',
    },
    effects: {
      logoAnimation: 'glitch',
      hoverEffect: 'invert',
      mobileEntrance: 'instant-grid',
    },
  },
  {
    id: 'action-glass',
    name: 'Neon Haze',
    vibe: 'action',
    aesthetic: 'glass',
    colors: {
      background: 'oklch(0.14 0.08 285 / 0.65)',
      backgroundOpacity: 0.65,
      border: 'oklch(0.70 0.18 200 / 0.4)',
      text: 'oklch(0.95 0 0)',
      textMuted: 'oklch(0.70 0.05 285)',
      accent: 'oklch(0.75 0.22 175)',
      accentSecondary: 'oklch(0.70 0.22 330)',
      hoverBg: 'oklch(0.20 0.10 285 / 0.8)',
      shadow: '0 0 30px oklch(0.75 0.22 175 / 0.3)',
    },
    effects: {
      logoAnimation: 'rgb-shift',
      hoverEffect: 'neon-pulse',
      mobileEntrance: 'neon-grid-reveal',
      specialEffect: 'dual-glow',
    },
  },

  // ===== PREMIUM VARIANTS =====
  {
    id: 'premium-dark-bold',
    name: 'Black Tie',
    vibe: 'premium',
    aesthetic: 'dark-bold',
    colors: {
      background: 'oklch(0.08 0.01 285)',
      backgroundOpacity: 0.99,
      border: 'oklch(0.75 0.08 85 / 0.3)',
      text: 'oklch(0.92 0.02 85)',
      textMuted: 'oklch(0.55 0.03 85)',
      accent: 'oklch(0.75 0.08 85)',
      accentSecondary: 'oklch(0.38 0.06 320)',
      hoverBg: 'transparent',
      shadow: 'none',
    },
    effects: {
      logoAnimation: 'gold-shimmer',
      hoverEffect: 'gold-underline-expand',
      mobileEntrance: 'elegant-fade',
      specialEffect: 'gold-line',
    },
  },
  {
    id: 'premium-light-airy',
    name: 'Ivory Suite',
    vibe: 'premium',
    aesthetic: 'light-airy',
    colors: {
      background: 'oklch(0.98 0.01 75)',
      backgroundOpacity: 0.96,
      border: 'oklch(0.90 0.02 75)',
      text: 'oklch(0.28 0.04 55)',
      textMuted: 'oklch(0.52 0.04 55)',
      accent: 'oklch(0.48 0.08 55)',
      accentSecondary: 'oklch(0.58 0.10 30)',
      hoverBg: 'oklch(0.95 0.02 75)',
      shadow: '0 1px 1px oklch(0.48 0.08 55 / 0.05)',
    },
    effects: {
      logoAnimation: 'none',
      hoverEffect: 'delicate-underline',
      mobileEntrance: 'fine-line-reveal',
    },
  },
  {
    id: 'premium-brutalist',
    name: 'Avant-Garde',
    vibe: 'premium',
    aesthetic: 'brutalist',
    colors: {
      background: 'oklch(0.99 0 0)',
      backgroundOpacity: 1,
      border: 'oklch(0.10 0 0)',
      text: 'oklch(0.10 0 0)',
      textMuted: 'oklch(0.40 0 0)',
      accent: 'oklch(0.42 0.14 285)',
      accentSecondary: 'oklch(0.10 0 0)',
      hoverBg: 'oklch(0.42 0.14 285)',
      shadow: '4px 4px 0 oklch(0.10 0 0)',
    },
    effects: {
      logoAnimation: 'none',
      hoverEffect: 'color-block',
      mobileEntrance: 'bw-split',
    },
  },
  {
    id: 'premium-glass',
    name: 'Crystal Palace',
    vibe: 'premium',
    aesthetic: 'glass',
    colors: {
      background: 'oklch(0.96 0.02 290 / 0.65)',
      backgroundOpacity: 0.65,
      border: 'oklch(0.88 0.03 290 / 0.5)',
      text: 'oklch(0.25 0.04 290)',
      textMuted: 'oklch(0.48 0.04 290)',
      accent: 'oklch(0.68 0.08 25)',
      accentSecondary: 'oklch(0.75 0.06 320)',
      hoverBg: 'oklch(0.98 0.02 290 / 0.85)',
      shadow: '0 4px 20px oklch(0.68 0.08 25 / 0.1)',
    },
    effects: {
      logoAnimation: 'prism-shimmer',
      hoverEffect: 'soft-glow',
      mobileEntrance: 'particle-fade',
      specialEffect: 'prism-border',
    },
  },

  // ===== PLAYFUL VARIANTS =====
  {
    id: 'playful-dark-bold',
    name: 'Cosmic Candy',
    vibe: 'playful',
    aesthetic: 'dark-bold',
    colors: {
      background: 'oklch(0.16 0.10 290)',
      backgroundOpacity: 0.98,
      border: 'oklch(0.72 0.24 330 / 0.4)',
      text: 'oklch(0.96 0 0)',
      textMuted: 'oklch(0.65 0.08 290)',
      accent: 'oklch(0.72 0.24 330)',
      accentSecondary: 'oklch(0.80 0.20 85)',
      hoverBg: 'oklch(0.22 0.12 290)',
      shadow: '0 4px 20px oklch(0.72 0.24 330 / 0.3)',
    },
    effects: {
      logoAnimation: 'rainbow-shimmer',
      hoverEffect: 'gradient-text',
      mobileEntrance: 'star-bounce',
      specialEffect: 'stars-bg',
    },
  },
  {
    id: 'playful-light-airy',
    name: 'Cotton Cloud',
    vibe: 'playful',
    aesthetic: 'light-airy',
    colors: {
      background: 'oklch(0.995 0.005 280)',
      backgroundOpacity: 0.95,
      border: 'oklch(0.92 0.04 290)',
      text: 'oklch(0.35 0.08 290)',
      textMuted: 'oklch(0.55 0.06 290)',
      accent: 'oklch(0.70 0.16 290)',
      accentSecondary: 'oklch(0.78 0.14 210)',
      hoverBg: 'oklch(0.94 0.06 290)',
      shadow: '0 2px 8px oklch(0.70 0.16 290 / 0.15)',
    },
    effects: {
      logoAnimation: 'wobble',
      hoverEffect: 'bounce-color',
      mobileEntrance: 'cloud-bounce',
    },
  },
  {
    id: 'playful-brutalist',
    name: 'Pop Art',
    vibe: 'playful',
    aesthetic: 'brutalist',
    colors: {
      background: 'oklch(0.90 0.18 90)',
      backgroundOpacity: 1,
      border: 'oklch(0.10 0 0)',
      text: 'oklch(0.10 0 0)',
      textMuted: 'oklch(0.30 0 0)',
      accent: 'oklch(0.55 0.26 25)',
      accentSecondary: 'oklch(0.52 0.20 250)',
      hoverBg: 'oklch(0.55 0.26 25)',
      shadow: '5px 5px 0 oklch(0.10 0 0)',
    },
    effects: {
      logoAnimation: 'none',
      hoverEffect: 'comic-explosion',
      mobileEntrance: 'halftone-reveal',
      specialEffect: 'dots-pattern',
    },
  },
  {
    id: 'playful-glass',
    name: 'Bubblegum Dream',
    vibe: 'playful',
    aesthetic: 'glass',
    colors: {
      background: 'oklch(0.88 0.10 340 / 0.7)',
      backgroundOpacity: 0.7,
      border: 'oklch(0.92 0.06 340 / 0.5)',
      text: 'oklch(0.25 0.08 340)',
      textMuted: 'oklch(0.45 0.08 340)',
      accent: 'oklch(0.65 0.16 290)',
      accentSecondary: 'oklch(0.78 0.14 170)',
      hoverBg: 'oklch(0.92 0.08 340 / 0.85)',
      shadow: '0 4px 20px oklch(0.65 0.16 290 / 0.2)',
    },
    effects: {
      logoAnimation: 'iridescent-shine',
      hoverEffect: 'bubble-pop',
      mobileEntrance: 'bubble-float',
      specialEffect: 'iridescent-border',
    },
  },

  // ===== MINIMAL VARIANTS =====
  {
    id: 'minimal-dark-bold',
    name: 'Obsidian',
    vibe: 'minimal',
    aesthetic: 'dark-bold',
    colors: {
      background: 'oklch(0.11 0.01 250)',
      backgroundOpacity: 0.99,
      border: 'oklch(0.20 0.02 250)',
      text: 'oklch(0.88 0 0)',
      textMuted: 'oklch(0.52 0.02 250)',
      accent: 'oklch(0.58 0.16 250)',
      accentSecondary: 'oklch(0.65 0.10 180)',
      hoverBg: 'oklch(0.15 0.02 250)',
      shadow: 'none',
    },
    effects: {
      logoAnimation: 'weight-shift',
      hoverEffect: 'blue-glow',
      mobileEntrance: 'clean-slide',
      specialEffect: 'pixel-line',
    },
  },
  {
    id: 'minimal-light-airy',
    name: 'Paper White',
    vibe: 'minimal',
    aesthetic: 'light-airy',
    colors: {
      background: 'oklch(0.998 0 0)',
      backgroundOpacity: 0.98,
      border: 'oklch(0.94 0.01 250)',
      text: 'oklch(0.18 0.02 250)',
      textMuted: 'oklch(0.55 0.02 250)',
      accent: 'oklch(0.48 0.12 250)',
      accentSecondary: 'oklch(0.55 0.08 180)',
      hoverBg: 'oklch(0.96 0.01 250)',
      shadow: '0 1px 2px oklch(0 0 0 / 0.04)',
    },
    effects: {
      logoAnimation: 'weight-shift',
      hoverEffect: 'underline-grow',
      mobileEntrance: 'precise-fade',
    },
  },
  {
    id: 'minimal-brutalist',
    name: 'Blueprint',
    vibe: 'minimal',
    aesthetic: 'brutalist',
    colors: {
      background: 'oklch(0.45 0.12 250)',
      backgroundOpacity: 1,
      border: 'oklch(0.98 0 0)',
      text: 'oklch(0.98 0 0)',
      textMuted: 'oklch(0.80 0.04 250)',
      accent: 'oklch(0.98 0 0)',
      accentSecondary: 'oklch(0.98 0 0)',
      hoverBg: 'oklch(0.98 0 0)',
      shadow: 'none',
    },
    effects: {
      logoAnimation: 'none',
      hoverEffect: 'invert-block',
      mobileEntrance: 'blueprint-reveal',
      specialEffect: 'grid-pattern',
    },
  },
  {
    id: 'minimal-glass',
    name: 'Frosted Steel',
    vibe: 'minimal',
    aesthetic: 'glass',
    colors: {
      background: 'oklch(0.92 0.01 250 / 0.8)',
      backgroundOpacity: 0.8,
      border: 'oklch(0.85 0.02 250 / 0.5)',
      text: 'oklch(0.22 0.02 250)',
      textMuted: 'oklch(0.48 0.02 250)',
      accent: 'oklch(0.50 0.10 250)',
      accentSecondary: 'oklch(0.58 0.06 200)',
      hoverBg: 'oklch(0.95 0.01 250 / 0.9)',
      shadow: '0 2px 8px oklch(0 0 0 / 0.04)',
    },
    effects: {
      logoAnimation: 'metallic-sheen',
      hoverEffect: 'opacity-shift',
      mobileEntrance: 'frosted-fade',
    },
  },
]

// Helper to get variant by vibe and aesthetic
export function getVariant(
  vibe: NavbarVibe,
  aesthetic: NavbarAesthetic
): NavbarVariant | undefined {
  return VARIANTS.find((v) => v.vibe === vibe && v.aesthetic === aesthetic)
}

// Get all variants for a specific vibe
export function getVariantsByVibe(vibe: NavbarVibe): NavbarVariant[] {
  return VARIANTS.filter((v) => v.vibe === vibe)
}

// Get all variants for a specific aesthetic
export function getVariantsByAesthetic(aesthetic: NavbarAesthetic): NavbarVariant[] {
  return VARIANTS.filter((v) => v.aesthetic === aesthetic)
}
