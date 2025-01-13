import { defineConfig } from 'tsup'

export default defineConfig((option) => ({
  entry: ['src/extension.ts'],
  external: ['vscode'],
  splitting: false,
  clean: true,
  format: ['cjs'],
  outDir: 'dist',
  sourcemap: true,
  minify: !option.watch,
}))
