# Ku React UI Library

A modern, accessible, and customizable React component library built with TypeScript and Vite.

## Features

- 🎨 Modern and clean design
- ♿️ Accessible components following WAI-ARIA guidelines
- 📦 Tree-shakeable components
- 🎯 TypeScript support
- 🎭 Theme customization
- 📱 Responsive design
- 📚 Storybook documentation

## Installation

```bash
npm install @ku-design-system/react
```

## Quick Start

```jsx
import { Button, ThemeProvider } from '@ku-design-system/react';
import '@ku-design-system/react/dist/style.css';

function App() {
  return (
    <ThemeProvider>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

## Documentation

Visit our [Storybook documentation](https://iamanojkumar.github.io/Ku-react-ui-library) to explore all components and their usage.

## Development

1. Clone the repository:
```bash
git clone https://github.com/iamanojkumar/Ku-react-ui-library.git
cd Ku-react-ui-library
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
cd packages/react
npm run storybook
```

4. Build packages:
```bash
npm run build
```

## Project Structure

```
Ku-react-ui-library/
├── core/                 # Core design system package
│   ├── src/
│   │   ├── components/  # Core components
│   │   ├── styles/      # Core styles and tokens
│   │   └── utils/       # Utility functions
│   └── package.json
├── packages/
│   └── react/           # React component package
│       ├── src/         # React components
│       ├── .storybook/  # Storybook configuration
│       └── package.json
└── package.json
```

## License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details. This license prohibits commercial use without explicit permission.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/) 