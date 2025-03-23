import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Detecta se está rodando no GitHub Pages ou em outro ambiente
const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.VERCEL === undefined;

export default defineConfig({
  base: isGitHubPages ? '/meuprimeiroprojetoreactvite/' : '/',
  plugins: [react()],
});
