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
