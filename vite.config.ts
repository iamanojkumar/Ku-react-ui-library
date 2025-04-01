import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'packages/react/src'),
      '@ku/react': resolve(__dirname, 'packages/react/src'),
      '@ku/core': resolve(__dirname, 'core/src'),
      '@ku-design-system/core': resolve(__dirname, 'core')
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
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
    target: 'es2018',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'packages/react/src/index.ts'),
      name: 'KuReact',
      fileName: (format) => `ku-react.${format}.js`,
      formats: ['es', 'umd']
    },
    commonjsOptions: {
      include: [/node_modules/]
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@emotion/styled', '@tabler/icons-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': '@emotion/react',
          '@emotion/styled': '@emotion/styled'
        }
      }
    }
  },
  define: {
    'process.env.NODE_ENV': '"development"'
  }
}); 