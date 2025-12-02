# GooeyNav Component Usage

The GooeyNav is a navigation component with a unique gooey effect and animated particles when switching between tabs.

## Features

- Gooey animation effect with SVG filters
- Particle effects when switching between tabs
- Smooth scrolling to sections
- Responsive design
- Accessible keyboard navigation

## Installation

The required dependencies should already be installed in your project:

```bash
npm install lucide-react
```

## Usage

The GooeyNav component is already integrated into the application in `src/App.tsx`.

To modify the navigation items, update the `navItems` array in `src/App.tsx`:

```tsx
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
]
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| items | `GooeyNavItem[]` | Array of navigation items |
| animationTime | `number` (optional) | Animation duration in milliseconds (default: 600) |
| particleCount | `number` (optional) | Number of particles to generate (default: 15) |
| particleDistances | `[number, number]` (optional) | Particle start and end distances (default: [90, 10]) |
| particleR | `number` (optional) | Particle rotation factor (default: 100) |
| timeVariance | `number` (optional) | Variance in particle animation times (default: 300) |
| colors | `number[]` (optional) | Color indices for particles (default: [1, 2, 3, 1, 2, 3, 1, 4]) |
| initialActiveIndex | `number` (optional) | Initially active tab index (default: 0) |

### GooeyNavItem Interface

```ts
interface GooeyNavItem {
  label: string
  href: string
}
```

## Customization

You can customize the GooeyNav by passing additional props:

```tsx
<GooeyNav 
  items={navItems} 
  animationTime={800}
  particleCount={20}
  particleDistances={[100, 15]}
/>
```

## Integration Example

See `src/App.tsx` for the complete integration example that's currently used in the application.

## Demo

To view the component in isolation, you can create a demo component using the GooeyNav.