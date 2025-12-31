import type { NavbarAesthetic, NavbarVariant, NavbarVibe } from '@/types/navbar'

export { AESTHETICS, getAestheticById } from './aesthetics'
export { getVibeById, VIBES } from './vibes'

// All 16 variant configurations - colors now come from theme CSS variables
export const VARIANTS: NavbarVariant[] = [
  // ===== ACTION VARIANTS =====
  {
    id: 'action-dark-bold',
    name: 'Midnight Thunder',
    vibe: 'action',
    aesthetic: 'dark-bold',
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
