import type { VibeConfig } from '@/types/navbar'

export const VIBES: VibeConfig[] = [
  {
    id: 'action',
    name: 'Action / Extreme Sports',
    description: 'Bold, aggressive, high-energy aesthetic for action brands',
    fonts: {
      logo: "'Bebas Neue', 'Anton', sans-serif",
      nav: "'Anton', 'Oswald', sans-serif",
      accent: "'Oswald', sans-serif",
    },
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: {
      logo: 400,
      nav: 400,
    },
  },
  {
    id: 'premium',
    name: 'Premium / Luxury',
    description: 'Refined, sophisticated aesthetic for high-end brands',
    fonts: {
      logo: "'Cormorant Garamond', 'Playfair Display', serif",
      nav: "'Lato', 'Montserrat', sans-serif",
      accent: "'Montserrat', sans-serif",
    },
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    fontWeight: {
      logo: 400,
      nav: 300,
    },
  },
  {
    id: 'playful',
    name: 'Playful / Fun',
    description: 'Vibrant, youthful, approachable aesthetic',
    fonts: {
      logo: "'Fredoka', 'Nunito', sans-serif",
      nav: "'Nunito', 'Quicksand', sans-serif",
      accent: "'Quicksand', sans-serif",
    },
    textTransform: 'none',
    letterSpacing: '0.02em',
    fontWeight: {
      logo: 600,
      nav: 700,
    },
  },
  {
    id: 'minimal',
    name: 'Minimal / Modern Tech',
    description: 'Sleek, precise, cutting-edge aesthetic',
    fonts: {
      logo: "'Inter', system-ui, sans-serif",
      nav: "'Inter', system-ui, sans-serif",
      accent: "'JetBrains Mono', monospace",
    },
    textTransform: 'none',
    letterSpacing: '-0.01em',
    fontWeight: {
      logo: 600,
      nav: 450,
    },
  },
]

export const getVibeById = (id: string): VibeConfig | undefined => {
  return VIBES.find((v) => v.id === id)
}
