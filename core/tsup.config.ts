import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'vue'],
  treeshake: true,
  minify: true,
  esbuildOptions(options) {
    options.define = {
      ...options.define,
      'process.env.NODE_ENV': '"production"'
    };
    return options;
  }
}); 