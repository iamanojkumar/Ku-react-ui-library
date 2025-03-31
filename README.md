# KU React Design System

A comprehensive React component library with a focus on accessibility, performance, and developer experience.

## Features

- 🎨 Modern and consistent design
- ♿️ Accessible components following WAI-ARIA guidelines
- 📱 Responsive and mobile-friendly
- 🌙 Dark mode support
- 🎯 TypeScript support
- 📚 Storybook documentation
- 🎭 Multiple component variants
- 🎨 Customizable theming

## Installation

```bash
npm install @ku-design-system/react
# or
yarn add @ku-design-system/react
```

## Quick Start

```jsx
import { Button, TextField, Tooltip } from '@ku-design-system/react';
import '@ku-design-system/react/dist/index.css';

function App() {
  return (
    <div>
      <Tooltip content="This is a tooltip">
        <Button>Hover me</Button>
      </Tooltip>
      <TextField label="Username" />
    </div>
  );
}
```

## Components

### Tooltip
A tooltip component that provides additional information on hover or focus.

```jsx
<Tooltip content="This is a tooltip">
  <button>Hover me</button>
</Tooltip>
```

Props:
- `content`: The content to display in the tooltip
- `position`: Position of the tooltip ('top' | 'right' | 'bottom' | 'left')
- `showIcon`: Whether to show an info icon
- `delay`: Delay in milliseconds before showing the tooltip
- `className`: Custom className for the tooltip
- `triggerClassName`: Custom className for the trigger element

Features:
- Automatic positioning based on viewport
- Keyboard accessibility
- Delayed appearance
- Dark mode support
- High contrast mode support
- Reduced motion support

### Other Components
- Button
- TextField
- TextArea
- Toast
- Modal
- Dropdown
- And many more...

## Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build

# Run tests
npm test
```

### Project Structure
```
src/
  components/     # React components
  styles/        # Global styles and tokens
  utils/         # Utility functions
  types/         # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Tabler Icons](https://tabler-icons.io/) 