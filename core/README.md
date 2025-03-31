# @ku-design-system/core

The core design system package that provides the foundation for the Ku React UI Library.

## Features

- 🎨 Design tokens and variables
- 🎭 Theme system
- 🎯 TypeScript support
- 📦 Tree-shakeable exports
- 🎨 Base styles and utilities

## Installation

```bash
npm install @ku-design-system/core
```

## Usage

```typescript
import { tokens } from '@ku-design-system/core';

// Use design tokens
const styles = {
  color: tokens.colors.primary,
  spacing: tokens.spacing.md,
  typography: tokens.typography.body,
};
```

## Design Tokens

The core package provides a comprehensive set of design tokens:

### Colors
```typescript
import { colors } from '@ku-design-system/core/tokens/colors';

// Use color tokens
const primaryColor = colors.primary;
const secondaryColor = colors.secondary;
```

### Typography
```typescript
import { typography } from '@ku-design-system/core/tokens/typography';

// Use typography tokens
const headingStyles = typography.h1;
const bodyStyles = typography.body;
```

### Spacing
```typescript
import { spacing } from '@ku-design-system/core/tokens/spacing';

// Use spacing tokens
const margin = spacing.md;
const padding = spacing.lg;
```

### Breakpoints
```typescript
import { breakpoints } from '@ku-design-system/core/tokens/breakpoints';

// Use breakpoint tokens
const mobile = breakpoints.sm;
const tablet = breakpoints.md;
const desktop = breakpoints.lg;
```

## Theme System

The core package provides a flexible theming system:

```typescript
import { createTheme } from '@ku-design-system/core';

const customTheme = createTheme({
  colors: {
    primary: '#FF0000',
    secondary: '#00FF00',
  },
  // ... other theme customizations
});
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Build the package:
```bash
npm run build
```

3. Run tests:
```bash
npm test
```

## Contributing

Please read our [Contributing Guide](../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details. 