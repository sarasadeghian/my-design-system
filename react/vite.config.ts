import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyDesignSystem',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['lit', 'react', 'react-dom', '@lit/react'],
      output: {
        globals: {
          lit: 'Lit',
          react: 'React',
          'react-dom': 'ReactDOM',
          '@lit/react': 'LitReact'
        }
      }
    },
    emptyOutDir: false
  }
});