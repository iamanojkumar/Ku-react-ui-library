import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: resolve(__dirname, '../../../vite.config.ts'),
      }
    }
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation"
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    }
  },
  core: {
    disableTelemetry: true
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@ku/react': resolve(__dirname, '../src'),
          '@ku/core': resolve(__dirname, '../../../core/src'),
          '@ku-design-system/core': resolve(__dirname, '../../../core')
        }
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          'react',
          'react-dom',
          '@emotion/react',
          '@emotion/styled',
          '@tabler/icons-react'
        ]
      },
      esbuild: {
        loader: 'tsx',
        include: /\.[jt]sx?$/,
        exclude: [],
      },
    };
  }
};

export default config; 