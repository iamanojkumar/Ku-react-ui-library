# KU Design System - Token Guide

## Overview
The KU Design System provides a comprehensive token system that supports multiple themes, accessibility features, and responsive design. This system is designed to work seamlessly across both React and Vue applications while maintaining consistency and accessibility.

## Token Categories

### 1. Color Tokens
- **Base Colors**
  - Primary colors (50-900)
  - Secondary colors
  - Semantic colors (success, warning, error)
  
- **Interactive States**
  ```css
  --ku-color-interactive-focus
  --ku-color-interactive-pressed
  --ku-color-interactive-dragged
  ```

- **Surface Elevation**
  ```css
  --ku-surface-elevation-0
  --ku-surface-elevation-1
  --ku-surface-elevation-2
  --ku-surface-elevation-3
  ```

- **Overlay**
  ```css
  --ku-overlay-background
  --ku-overlay-background-light
  --ku-overlay-background-heavy
  ```

### 2. Typography
- **Font Families**
  ```css
  --ku-font-family-base
  --ku-font-family-heading
  --ku-font-family-mono
  ```

- **Font Sizes**
  - Static sizes (xs through 7xl)
  - Fluid typography
    ```css
    --ku-font-size-fluid-1
    --ku-font-size-fluid-2
    --ku-font-size-fluid-3
    ```

- **Letter Spacing**
  ```css
  --ku-letter-spacing-tight
  --ku-letter-spacing-normal
  --ku-letter-spacing-wide
  --ku-letter-spacing-wider
  ```

### 3. Spacing
- **Component Spacing**
  ```css
  --ku-component-padding-small
  --ku-component-padding-medium
  --ku-component-padding-large
  ```

- **Layout Spacing**
  ```css
  --ku-layout-gap-small
  --ku-layout-gap-medium
  --ku-layout-gap-large
  ```

### 4. Animation
- **Easing**
  ```css
  --ku-ease-in-out
  --ku-ease-out
  --ku-ease-in
  ```

- **Duration**
  ```css
  --ku-duration-instant
  --ku-duration-fast
  --ku-duration-normal
  --ku-duration-slow
  ```

### 5. Focus Management
```css
--ku-focus-ring-style
--ku-focus-ring-width-small
--ku-focus-ring-width-medium
--ku-focus-ring-width-large
--ku-focus-ring-offset-small
--ku-focus-ring-offset-medium
```

### 6. Border System
```css
--ku-border-style-solid
--ku-border-style-dashed
--ku-border-width-thin
--ku-border-width-medium
--ku-border-width-thick
```

### 7. Z-index System
```css
--ku-z-index-dropdown: 1000
--ku-z-index-sticky: 1020
--ku-z-index-modal: 1030
--ku-z-index-popover: 1040
--ku-z-index-tooltip: 1050
```

### 8. Component-Specific
```css
--ku-input-height
--ku-button-min-width
--ku-toolbar-height
--ku-header-height
```

### 9. Breakpoints
```css
--ku-breakpoint-mobile
--ku-breakpoint-tablet
--ku-breakpoint-desktop
--ku-breakpoint-wide
```

## Usage

### React Implementation
```tsx
import { useTheme } from '@ku/react';

function Component() {
  const { tokens } = useTheme();
  
  return (
    <div style={{ 
      padding: tokens.spacing[4],
      color: tokens.colors.primary[500]
    }}>
      Content
    </div>
  );
}
```

### CSS Implementation
```css
.component {
  padding: var(--ku-component-padding-medium);
  color: var(--ku-color-primary-500);
  transition: all var(--ku-duration-normal) var(--ku-ease-out);
}

.component:hover {
  background: var(--ku-surface-elevation-1);
}

/* Responsive Design */
@media (min-width: var(--ku-breakpoint-tablet)) {
  .component {
    font-size: var(--ku-font-size-fluid-1);
  }
}
```

## Adding New Tokens

1. Define TypeScript tokens in appropriate files:
   - Color tokens in `colors.ts`
   - Typography tokens in `typography.ts`
   - Semantic tokens in `semantic.ts`

2. Add CSS custom properties in `tokens.css`:
   ```css
   :root {
     --ku-new-token: value;
   }
   ```

3. Add theme variations if needed:
   ```css
   [data-theme="dark"] {
     --ku-new-token: dark-value;
   }
   ```

4. Document the new tokens in this README

## Best Practices

1. **Naming Convention**
   - Use `--ku-` prefix for all tokens
   - Use kebab-case for CSS custom properties
   - Use descriptive, semantic names

2. **Theme Support**
   - Always provide dark theme values
   - Consider high contrast needs
   - Test with color blindness simulators

3. **Accessibility**
   - Ensure color contrast meets WCAG guidelines
   - Provide reduced motion alternatives
   - Support high contrast mode

4. **Responsive Design**
   - Use fluid typography where appropriate
   - Define breakpoint-specific values
   - Test across device sizes

## Contributing

When adding new tokens:

1. Follow the established naming convention
2. Add TypeScript types and values
3. Add CSS custom properties
4. Update documentation
5. Add usage examples
6. Test across themes and contexts

## Future Enhancements

1. **Token Generation**
   - Automated token generation pipeline
   - Design tool integration (Figma, Sketch)
   - Token documentation generator

2. **Theme Builder**
   - Visual token editor
   - Theme export/import
   - Custom theme creation

3. **Analytics**
   - Token usage tracking
   - Accessibility compliance
   - Performance monitoring

## Theme Configuration

### CSS Variables
All theme values are exposed as CSS custom properties:

```css
:root {
  /* Colors */
  --ku-primary-500: #0066ff;
  --ku-background-default: #ffffff;
  --ku-text-primary: #212121;

  /* Transitions */
  --ku-transition-duration: 200ms;
  --ku-transition-timing: ease-out;
}
```

### Helper Functions

```typescript
// Check theme types
import { isHighContrastTheme, isColorBlindTheme } from '@ku/core';

const isHighContrast = isHighContrastTheme('high-contrast-dark'); // true
const isColorBlind = isColorBlindTheme('deuteranopia'); // true

// Get theme variant
import { getThemeVariant } from '@ku/core';
const theme = getThemeVariant('high-contrast-light');
```

## Accessibility Features

1. **High Contrast Modes**
   - Meets WCAG 2.1 Level AAA contrast requirements
   - Enhanced text readability
   - Clear component boundaries

2. **Color Blind Support**
   - Alternative color schemes for common color vision deficiencies
   - Non-color dependent status indicators
   - Enhanced visual separation

3. **Motion Sensitivity**
   - Respects `prefers-reduced-motion` setting
   - Disables transitions when necessary
   - Maintains functionality without animations

## Best Practices

1. **Theme Switching**
   - Always provide a visible theme toggle
   - Persist user preferences
   - Respect system preferences by default

2. **Component Development**
   - Use CSS variables for theme-dependent styles
   - Test components in all theme variants
   - Ensure sufficient contrast ratios

3. **Accessibility**
   - Test with screen readers
   - Verify color contrast
   - Support keyboard navigation

## Future Enhancements

1. **Theme Presets**
   - Custom theme creation
   - Theme export/import
   - Organization-specific themes

2. **Advanced Features**
   - Time-based theme switching
   - Location-based themes
   - Event-driven themes

3. **Analytics Integration**
   - Theme usage tracking
   - Accessibility metrics
   - User preference analytics

## Contributing

We welcome contributions to enhance the theming system. Please refer to our contribution guidelines for more information.

## Theme Presets

### Theme Preset System

```typescript
// Theme preset system
interface ThemePreset {
  name: string;
  description: string;
  colors: DeepPartial<typeof lightColors>;
  typography?: DeepPartial<typeof typography>;
  effects?: DeepPartial<typeof effects>;
}

// Save and load presets
export function saveThemePreset(preset: ThemePreset): void;
export function loadThemePreset(presetName: string): ThemePreset;
```

## Seasonal Themes

interface SeasonalTheme extends ThemeVariant {
  startDate: Date;
  endDate: Date;
  priority: number;
}

// Seasonal theme manager
export class SeasonalThemeManager {
  addSeasonalTheme(theme: SeasonalTheme): void;
  getCurrentSeasonalTheme(): ThemeVariant;
  scheduleThemeChanges(): void;
}

interface ThemeAnalytics {
  trackThemeChange(from: string, to: string): void;
  trackVariantUsage(variant: string, duration: number): void;
  getPopularThemes(): Promise<Array<{theme: string, usage: number}>>;
  getAccessibilityMetrics(): Promise<{
    contrastViolations: number;
    motionPreferences: {reduced: number, normal: number};
  }>;
}

interface ComponentTheme {
  component: string;
  overrides: DeepPartial<ThemeVariant>;
  conditions?: {
    media?: string;
    state?: string;
    parent?: string;
  };
}

// Component theme manager
export function setComponentTheme(theme: ComponentTheme): void;
export function getComponentTheme(component: string): ComponentTheme; 
```

## Theme Export/Import

interface ThemeExport {
  version: string;
  themes: Record<string, ThemeVariant>;
  presets: Record<string, ThemePreset>;
  components: Record<string, ComponentTheme>;
}

export function exportThemeConfiguration(): ThemeExport;
export function importThemeConfiguration(config: ThemeExport): void; 
```

## Theme Preview

interface ThemePreview {
  variant: string;
  component: string;
  props: Record<string, any>;
  states: Array<'hover' | 'focus' | 'active' | 'disabled'>;
}

export function generateThemePreview(config: ThemePreview): string; 
```

interface ThemeTransition {
  type: 'fade' | 'slide' | 'zoom' | 'custom';
  duration: number;
  easing: string;
  properties: string[];
  conditions?: {
    motion: 'reduced' | 'normal';
    performance: 'high' | 'low';
  };
}

export function setThemeTransition(transition: ThemeTransition): void; 