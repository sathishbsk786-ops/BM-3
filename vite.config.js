import { defineConfig(esbuild: {
  loader: 'jsx',
  include: /src\/.*\.js$/,
},
)} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
