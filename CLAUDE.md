# Sonic Beff Designs - Development Standards

## Tailwind CSS v4 Standards

This project uses **Tailwind CSS v4**. Follow these standards to prevent syntax errors and maintain consistency.

---

### 1. Gradient Syntax
- ✅ Use: `bg-linear-to-{direction}` (e.g., `bg-linear-to-r`, `bg-linear-to-b`)
- ❌ Never use: `bg-gradient-to-{direction}` (v3 syntax)

**Examples:**
```tsx
// ✅ Correct (v4)
className="bg-linear-to-r from-blue-500 to-purple-500"
className="hover:bg-linear-to-br from-amber-500 to-amber-600"
className="bg-linear-45 from-red-500 to-blue-500"

// ❌ Wrong (v3)
className="bg-gradient-to-r from-blue-500 to-purple-500"
```

---

### 2. CSS Variable Syntax in Tailwind Classes
- ✅ Use: `bg-(--variable-name)` (parentheses, no var())
- ❌ Never use: `bg-[--variable-name]` or `bg-[var(--variable-name)]` (v3 syntax)

**Examples:**
```tsx
// ✅ Correct (v4)
className="text-(--navbar-accent)"
className="bg-(--navbar-hover-bg)"
className="from-(--navbar-accent)/20 to-(--navbar-accent)/40"

// ❌ Wrong (v3)
className="text-[--navbar-accent]"
className="bg-[var(--navbar-hover-bg)]"
```

---

### 3. Translate & Position Utilities (Prefer Named Values over Arbitrary)
Use built-in fractional values instead of arbitrary percentage values.

#### Translation (100%)
- ✅ Use: `translate-x-full`, `-translate-x-full`, `translate-y-full`, `-translate-y-full`
- ❌ Never use: `translate-x-[100%]`, `translate-x-[-100%]`, `translate-y-[100%]`, `translate-y-[-100%]`

#### Translation (50%)
- ✅ Use: `translate-x-1/2`, `-translate-x-1/2`, `translate-y-1/2`, `-translate-y-1/2`
- ❌ Never use: `translate-x-[50%]`, `translate-x-[-50%]`, `translate-y-[50%]`, `translate-y-[-50%]`

#### Positioning (50%)
- ✅ Use: `top-1/2`, `left-1/2`, `right-1/2`, `bottom-1/2`
- ❌ Never use: `top-[50%]`, `left-[50%]`, `right-[50%]`, `bottom-[50%]`

**Examples:**
```tsx
// ✅ Correct (v4)
className="translate-x-full"
className="-translate-x-full"
className="translate-x-1/2 -translate-y-1/2"
className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"

// ❌ Wrong (v3)
className="translate-x-[100%]"
className="translate-x-[-100%]"
className="translate-x-[50%] translate-y-[-50%]"
className="absolute top-[50%] left-[50%]"
```

---

### 4. Flex Utilities
- ✅ Use: `shrink-0`, `shrink`, `grow`, `grow-0`
- ❌ Never use: `flex-shrink-0`, `flex-shrink`, `flex-grow`, `flex-grow-0`

**Examples:**
```tsx
// ✅ Correct (v4)
className="shrink-0"
className="grow"

// ❌ Wrong (v3)
className="flex-shrink-0"
className="flex-grow"
```

---

### 5. @supports Variant (Simplified Syntax)
For common CSS feature checks, use simplified syntax without brackets.

- ✅ Use: `supports-backdrop-filter:className`
- ❌ Never use: `supports-[backdrop-filter]:className`

**Examples:**
```tsx
// ✅ Correct (v4)
className="supports-backdrop-filter:bg-background/60"
className="supports-backdrop-filter:backdrop-blur"

// ❌ Wrong (v3)
className="supports-[backdrop-filter]:bg-background/60"

// Note: For complex @supports queries, use arbitrary syntax:
className="[@supports(display:grid)]:grid"
```

---

### 6. Shadow/Radius/Blur Scale Renames
The default shadow, radius, and blur scales were renamed for consistency.

#### Shadow Scales
- `shadow-xs` (was `shadow-sm` in v3)
- `shadow-sm` (was `shadow` in v3)
- `shadow` → `shadow-md` (recommended)

#### Border Radius Scales
- `rounded-xs` (was `rounded-sm` in v3)
- `rounded-sm` (was `rounded` in v3)

#### Blur Scales
- `blur-xs` (was `blur-sm` in v3)
- `blur-sm` (was `blur` in v3)

**Examples:**
```tsx
// ✅ Correct (v4)
className="shadow-xs"  // subtle shadow
className="shadow-sm"  // default shadow
className="rounded-xs" // small radius
className="blur-xs"    // subtle blur

// ❌ Wrong (treating as v3)
// Using old v3 naming conventions
```

---

### 7. Important Modifier (End Position)
The `!` important modifier now goes at the **end** of the class name.

- ✅ Use: `flex!`, `bg-red-500!`, `hover:bg-red-600/50!`
- ❌ Never use: `!flex`, `!bg-red-500` (v3 syntax)

**Examples:**
```tsx
// ✅ Correct (v4)
className="flex! bg-red-500! hover:bg-red-600/50!"

// ❌ Wrong (v3)
className="!flex !bg-red-500 hover:!bg-red-600/50"
```

---

### 8. Outline Utility Rename
- ✅ Use: `outline-hidden` (explicitly hides outline)
- ❌ Never use: `outline-none` for hiding outlines (now means `outline: none` in CSS)

**Examples:**
```tsx
// ✅ Correct (v4)
className="focus:outline-hidden"

// ❌ Wrong (v3 behavior)
className="focus:outline-none"  // This now sets outline: none in CSS
```

---

## Resources
- [Tailwind v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Linear Gradients](https://tailwindcss.com/docs/background-image)
- [CSS Variables in Arbitrary Values](https://tailwindcss.com/docs/adding-custom-styles)
- [Translate Utilities](https://tailwindcss.com/docs/translate)
- [Position Utilities](https://tailwindcss.com/docs/top-right-bottom-left)

---

## Quick Reference Table

| v3 Syntax | v4 Syntax | Category |
|-----------|-----------|----------|
| `bg-gradient-to-r` | `bg-linear-to-r` | Gradients |
| `bg-[--color]` | `bg-(--color)` | CSS Variables |
| `translate-x-[100%]` | `translate-x-full` | Translation |
| `translate-x-[-100%]` | `-translate-x-full` | Translation |
| `translate-x-[50%]` | `translate-x-1/2` | Translation |
| `top-[50%]` | `top-1/2` | Positioning |
| `flex-shrink-0` | `shrink-0` | Flex |
| `flex-grow` | `grow` | Flex |
| `supports-[backdrop-filter]` | `supports-backdrop-filter` | Supports |
| `shadow-sm` | `shadow-xs` | Shadows |
| `shadow` | `shadow-sm` | Shadows |
| `rounded-sm` | `rounded-xs` | Border Radius |
| `blur-sm` | `blur-xs` | Blur |
| `!flex` | `flex!` | Important |
| `outline-none` | `outline-hidden` | Outline |
