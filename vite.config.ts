import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    })
  ],
  resolve: {
    alias: {
      '@ku/core': resolve(__dirname, './packages/core/src'),
      '@ku/react': resolve(__dirname, './packages/react/src')
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@storybook/addon-docs/preview.js',
      '@storybook/addon-actions/preview.js',
      '@storybook/addon-links/preview.js',
      '@storybook/addon-essentials/preview.js',
      '@storybook/addon-interactions/preview.js',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      '@mdx-js/react',
      '@storybook/blocks',
      '@storybook/components',
      '@storybook/react',
      '@storybook/testing-library',
      '@storybook/theming',
      'classnames'
    ],
    exclude: ['@ku/core', '@ku/react']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@ku/core'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  define: {
    'process.env.NODE_ENV': '"development"'
  }
}); 