// Navbar Variant Type Definitions
// 16 unique combinations: 4 vibes × 4 aesthetics

export type NavbarVibe = 'action' | 'premium' | 'playful' | 'minimal';
export type NavbarAesthetic = 'dark-bold' | 'light-airy' | 'brutalist' | 'glass';

export interface VibeConfig {
  id: NavbarVibe;
  name: string;
  description: string;
  fonts: {
    logo: string;
    nav: string;
    accent: string;
  };
  textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  letterSpacing: string;
  fontWeight: {
    logo: number;
    nav: number;
  };
}

export interface AestheticConfig {
  id: NavbarAesthetic;
  name: string;
  description: string;
  borderRadius: string;
  borderWidth: string;
  shadowStyle: 'dramatic' | 'soft' | 'hard' | 'glow' | 'none';
  backdropBlur: string;
  transitionStyle: 'snappy' | 'smooth' | 'instant' | 'elastic';
}

export interface VariantColors {
  background: string;
  backgroundOpacity: number;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
  accentSecondary: string;
  hoverBg: string;
  shadow: string;
}

export interface VariantEffects {
  logoAnimation: string;
  hoverEffect: string;
  mobileEntrance: string;
  specialEffect?: string;
}

export interface NavbarVariant {
  id: string;
  name: string;
  vibe: NavbarVibe;
  aesthetic: NavbarAesthetic;
  colors?: VariantColors; // Now optional - colors come from theme CSS variables
  effects: VariantEffects;
}

// The 16 named variants
export const VARIANT_NAMES: Record<string, string> = {
  'action-dark-bold': 'Midnight Thunder',
  'action-light-airy': 'White Lightning',
  'action-brutalist': 'Raw Power',
  'action-glass': 'Neon Haze',
  'premium-dark-bold': 'Black Tie',
  'premium-light-airy': 'Ivory Suite',
  'premium-brutalist': 'Avant-Garde',
  'premium-glass': 'Crystal Palace',
  'playful-dark-bold': 'Cosmic Candy',
  'playful-light-airy': 'Cotton Cloud',
  'playful-brutalist': 'Pop Art',
  'playful-glass': 'Bubblegum Dream',
  'minimal-dark-bold': 'Obsidian',
  'minimal-light-airy': 'Paper White',
  'minimal-brutalist': 'Blueprint',
  'minimal-glass': 'Frosted Steel',
} as const;

export interface NavbarVariantContextValue {
  vibe: NavbarVibe;
  aesthetic: NavbarAesthetic;
  setVibe: (vibe: NavbarVibe) => void;
  setAesthetic: (aesthetic: NavbarAesthetic) => void;
  variantKey: string;
  variantName: string;
  currentVariant: NavbarVariant | null;
}

// Navigation items configuration
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
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
];
