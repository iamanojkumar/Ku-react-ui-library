# Theme Variants Guide

## Overview
Theme variants in the KU Design System provide specialized color schemes and visual adjustments for different use cases and accessibility needs. Each variant is carefully designed to maintain consistency while addressing specific requirements.

## Available Variants

### 1. Default Themes

#### Light Theme
```typescript
{
  name: 'Light',
  colors: lightColors,
  isDark: false
}
```
- Primary use: Standard daytime viewing
- Characteristics:
  - White background (#ffffff)
  - Dark text (#212121)
  - Balanced contrast ratios
  - Full color spectrum

#### Dark Theme
```typescript
{
  name: 'Dark',
  colors: darkColors,
  isDark: true
}
```
- Primary use: Low-light environments
- Characteristics:
  - Dark background (#121212)
  - Light text (#ffffff)
  - Reduced eye strain
  - Muted color palette

### 2. High Contrast Themes

#### High Contrast Light
```typescript
{
  name: 'High Contrast Light',
  colors: {
    text: {
      primary: '#000000',
      secondary: '#202020'
    },
    background: {
      default: '#ffffff',
      paper: '#f8f8f8'
    }
  },
  isDark: false
}
```
- Primary use: Visual impairments
- Features:
  - Maximum contrast ratio (21:1)
  - Bold text boundaries
  - Clear component separation
  - Enhanced focus indicators

#### High Contrast Dark
```typescript
{
  name: 'High Contrast Dark',
  colors: {
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0'
    },
    background: {
      default: '#000000',
      paper: '#101010'
    }
  },
  isDark: true
}
```
- Primary use: Low vision in dark environments
- Features:
  - Maximum contrast ratio (21:1)
  - Bright text on dark backgrounds
  - Enhanced border visibility
  - Clear interactive elements

### 3. Color Blind Friendly Themes

#### Deuteranopia Theme
```typescript
{
  name: 'Deuteranopia',
  colors: {
    primary: {
      500: '#0066cc' // Blue-focused
    },
    success: {
      500: '#006699' // Blue instead of green
    },
    error: {
      500: '#cc3300' // Distinguishable red
    }
  },
  isDark: false
}
```
- Primary use: Red-green color blindness
- Features:
  - Blue-focused primary colors
  - Alternative success indicators
  - Enhanced error states
  - Pattern-based differentiation

## Implementation

### Using Theme Variants

1. **React Components**
```tsx
import { useThemeContext } from '@ku/react';

function ThemeControl() {
  const { variant, setVariant } = useThemeContext();
  
  return (
    <select 
      value={variant} 
      onChange={(e) => setVariant(e.target.value)}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="high-contrast-light">High Contrast Light</option>
      <option value="high-contrast-dark">High Contrast Dark</option>
      <option value="deuteranopia">Color Blind Friendly</option>
    </select>
  );
}
```

2. **Vue Components**
```vue
<script setup>
import { useTheme } from '@ku/vue';

const { variant, setVariant } = useTheme();
</script>

<template>
  <select 
    :value="variant" 
    @change="e => setVariant(e.target.value)"
  >
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="high-contrast-light">High Contrast Light</option>
    <option value="high-contrast-dark">High Contrast Dark</option>
    <option value="deuteranopia">Color Blind Friendly</option>
  </select>
</template>
```

### Helper Functions

```typescript
import { 
  getThemeVariant, 
  isHighContrastTheme, 
  isColorBlindTheme 
} from '@ku/core';

// Get theme configuration
const theme = getThemeVariant('high-contrast-light');

// Check theme type
if (isHighContrastTheme(variant)) {
  // Apply high contrast specific logic
}

if (isColorBlindTheme(variant)) {
  // Apply color blind specific logic
}
```

## Best Practices

1. **Variant Selection**
   - Respect system preferences by default
   - Provide easy access to variant switching
   - Remember user preferences
   - Allow system preference override

2. **Component Development**
   - Test components in all variants
   - Use relative color relationships
   - Maintain consistent spacing
   - Ensure keyboard accessibility

3. **Accessibility**
   - Maintain WCAG compliance in all variants
   - Test with screen readers
   - Verify contrast ratios
   - Support keyboard navigation

4. **Performance**
   - Lazy load variant styles
   - Cache user preferences
   - Minimize theme switching flicker
   - Optimize transition animations

## Creating Custom Variants

To create a custom variant:

```typescript
import { ThemeVariant, lightColors } from '@ku/core';

const customVariant: ThemeVariant = {
  name: 'Custom Theme',
  colors: {
    ...lightColors,
    // Override specific colors
    primary: {
      500: '#your-color'
    },
    // Add custom colors
    custom: {
      special: '#special-color'
    }
  },
  isDark: false
};
```

## Testing Variants

1. **Visual Testing**
   - Test in different lighting conditions
   - Verify with color blindness simulators
   - Check contrast ratios
   - Validate component states

2. **Accessibility Testing**
   - Screen reader compatibility
   - Keyboard navigation
   - Focus indicators
   - Touch targets

3. **Integration Testing**
   - Theme switching
   - System preference changes
   - Component transitions
   - State persistence

## Contributing

When contributing new variants:

1. Follow the existing variant structure
2. Provide clear use cases
3. Include accessibility considerations
4. Document color choices
5. Add appropriate tests
6. Update relevant documentation 