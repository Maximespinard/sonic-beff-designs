import type { AestheticConfig } from '@/types/navbar'

export const AESTHETICS: AestheticConfig[] = [
  {
    id: 'dark-bold',
    name: 'Dark & Bold',
    description: 'Dramatic, high-contrast, powerful presence',
    borderRadius: '0',
    borderWidth: '1px',
    shadowStyle: 'dramatic',
    backdropBlur: '0px',
    transitionStyle: 'snappy',
  },
  {
    id: 'light-airy',
    name: 'Light & Airy',
    description: 'Bright, open, subtle depth and shadows',
    borderRadius: '0.75rem',
    borderWidth: '1px',
    shadowStyle: 'soft',
    backdropBlur: '0px',
    transitionStyle: 'smooth',
  },
  {
    id: 'brutalist',
    name: 'Brutalist / Raw',
    description: 'Stark, unconventional, bold typography',
    borderRadius: '0',
    borderWidth: '3px',
    shadowStyle: 'hard',
    backdropBlur: '0px',
    transitionStyle: 'instant',
  },
  {
    id: 'glass',
    name: 'Glassmorphism',
    description: 'Frosted glass, transparency, layered depth',
    borderRadius: '1rem',
    borderWidth: '1px',
    shadowStyle: 'glow',
    backdropBlur: '20px',
    transitionStyle: 'elastic',
  },
]

export const getAestheticById = (id: string): AestheticConfig | undefined => {
  return AESTHETICS.find((a) => a.id === id)
}
