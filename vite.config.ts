import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const generateScopedName = '[name]__[local]___[hash:base64:5]';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@pages': `${path.resolve(__dirname, 'src/pages')}`,
      '@pages/*': `${path.resolve(__dirname, 'src/pages/*')}`,
      '@shared': `${path.resolve(__dirname, 'src/shared')}`,
      '@shared/*': `${path.resolve(__dirname, 'src/shared/*')}`,
      '@routes': `${path.resolve(__dirname, 'src/app/routes')}`,
      '@routes/*': `${path.resolve(__dirname, 'src/app/routes/*')}`,
      '@src': `${path.resolve(__dirname, 'src')}`,
      '@src/*': `${path.resolve(__dirname, 'src/*')}`,
    },
  },
  css: {
    modules: {
      //   generateScopedName: (name, filename, css) => {
      //   const relativePath = path.relative(process.cwd(), filename);
      //   const filePath = relativePath
      //     .replace(/\.[^/.]+$/, '')
      //     .replace(/[\\/]/g, '_')
      //     .replace(/src_/, '');
      //   // Добавляем хэш для уникальности
      //   const hash = Buffer.from(css).toString('base64').slice(0, 5);
      //   return `${filePath}_${name}_${hash}`;
      // },
      generateScopedName: '[path][name]_[local]__[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
})
