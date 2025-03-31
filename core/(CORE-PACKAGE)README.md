# KU Design System - Core Package

## Overview
The core package of the KU Design System provides the foundation for building consistent and accessible user interfaces. It includes design tokens, theme management, CSS variables, and utility functions that can be used across different frameworks.

## Features

### 1. Design Tokens
- **Colors**: Semantic color system with light/dark theme support
- **Typography**: Flexible typography system with Roboto Flex as primary font
- **Spacing**: Consistent spacing scale
- **Effects**: Shadows, transitions, and other visual effects
- **Breakpoints**: Responsive design breakpoints

### 2. Theme System
- Light/Dark mode support
- High contrast theme
- System preference detection
- Theme switching utilities
- CSS variable generation

### 3. CSS Variables
- Framework-agnostic CSS custom properties
- Dynamic variable generation
- Theme-aware variables
- Utility functions for variable access

### 4. Icons
The core package includes a comprehensive set of icons from [Tabler Icons](https://tabler-icons.io/). Icons are organized into categories for easy use:

```typescript
// Import specific icons
import { SearchIcon, HeartIcon } from '@ku/core';

// Usage
<SearchIcon />
<HeartIcon color="red" size={32} stroke={1} />
```

#### Icon Categories
- **Navigation**: ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ExternalLink
- **Action**: Close, Check, Plus, Minus, Search, Menu, Settings, Edit, Trash, Refresh, Copy, Filter, Download, Upload
- **Status**: Error, Info, Warning, Success
- **User Interface**: User, Logout, Home, Bell, More, Show, Hide, Star, Heart
- **Communication**: Mail, Calendar, Clock, Map, Phone

#### Icon Props
All icons accept the following props:
- `size`: number | string (default: 24) - Size of the icon
- `color`: string - Color of the icon (supports CSS colors)
- `stroke`: number (default: 2) - Stroke width of the icon
- `className`: string - Additional CSS classes

#### Customization
Icons can be customized using CSS:
```css
.custom-icon {
  color: var(--ku-color-primary-500);
  transition: transform 0.2s;
}

.custom-icon:hover {
  transform: scale(1.1);
}
```

## Installation

```bash
npm install @ku/core
```

## Usage

### 1. Basic Setup
```typescript
import { initialize } from '@ku/core';

// Initialize the design system
initialize();
```

### 2. Using Design Tokens
```typescript
import { colors, typography, spacing } from '@ku/core';

// Access color tokens
const primaryColor = colors.light.primary[500];

// Access typography tokens
const fontSize = typography.fontSize.base;

// Access spacing tokens
const padding = spacing[4];
```

### 3. Theme Management
```typescript
import { setTheme, getCurrentTheme } from '@ku/core';

// Set theme
setTheme('dark');

// Get current theme
const currentTheme = getCurrentTheme();
```

### 4. CSS Variables
```typescript
import { getCssVariable } from '@ku/core';

// Get CSS variable value
const primaryColor = getCssVariable('--ku-color-primary-500');
```

## Design Tokens

### Colors
```typescript
// Primary Colors
--ku-color-primary-50: #e6f0ff;
--ku-color-primary-500: #0066ff;
--ku-color-primary-900: #001433;

// Semantic Colors
--ku-color-success-500: #4caf50;
--ku-color-warning-500: #ff9800;
--ku-color-error-500: #f44336;
```

### Typography
```typescript
// Font Family
--ku-font-family-base: 'Roboto Flex', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

// Font Sizes
--ku-font-size-base: 1rem;
--ku-font-size-lg: 1.125rem;
--ku-font-size-xl: 1.25rem;

// Font Weights
--ku-font-weight-normal: 400;
--ku-font-weight-medium: 500;
--ku-font-weight-bold: 700;
```

### Spacing
```typescript
// Spacing Scale
--ku-spacing-1: 0.25rem;
--ku-spacing-2: 0.5rem;
--ku-spacing-4: 1rem;
--ku-spacing-8: 2rem;
--ku-spacing-16: 4rem;
```

### Effects
```typescript
// Shadows
--ku-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--ku-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);

// Transitions
--ku-transition-base: 200ms ease-in-out;
--ku-transition-fast: 100ms ease-in-out;
```

## Theme System

### Light Theme (Default)
```css
:root {
  --ku-color-background-default: #ffffff;
  --ku-color-text-primary: #212121;
  --ku-color-text-secondary: #757575;
}
```

### Dark Theme
```css
[data-theme="dark"] {
  --ku-color-background-default: #121212;
  --ku-color-text-primary: #ffffff;
  --ku-color-text-secondary: #b3b3b3;
}
```

### High Contrast Theme
```css
[data-theme="high-contrast"] {
  --ku-color-primary-500: #0000ff;
  --ku-color-text-primary: #000000;
  --ku-color-background-default: #ffffff;
}
```

## Utility Functions

### CSS Variables
```typescript
// Get CSS variable value
getCssVariable('--ku-color-primary-500');

// Set CSS variable
setCssVariable('--ku-color-primary-500', '#0066ff');

// Get variables by prefix
getCssVariablesByPrefix('--ku-color-primary');
```

### Theme Management
```typescript
// Get current theme
getCurrentTheme();

// Set theme
setTheme('dark');

// Initialize with system preference
initialize();
```

## Development

### 1. Setup
```bash
# Install dependencies
npm install

# Run tests
npm test

# Build package
npm run build
```

### 2. Testing
```typescript
// Theme switching test
import { setTheme, getCurrentTheme } from '@ku/core';

test('theme switching', () => {
  setTheme('dark');
  expect(getCurrentTheme()).toBe('dark');
});
```

### 3. Building
```bash
# Build for production
npm run build

# Build for development
npm run build:dev
```

## Contributing

### 1. Development Process
1. Fork repository
2. Create feature branch
3. Make changes
4. Add tests
5. Submit pull request

### 2. Guidelines
- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation
- Include examples

## Documentation
- [Theme System](./src/tokens/(THEME-SYSTEM)README.md)
- [Design Tokens](./src/tokens/README.md)
- [API Reference](./docs/API.md)

## License
MIT 