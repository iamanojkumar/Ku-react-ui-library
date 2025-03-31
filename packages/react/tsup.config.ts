import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@ku/core'],
  treeshake: true,
  noExternal: ['classnames'],
  esbuildOptions(options) {
    options.globalName = 'React';
    return options;
  }
}); 