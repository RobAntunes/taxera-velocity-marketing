// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
// import tailwind from '@astrojs/tailwind'; // Temporarily commented out

// https://astro.build/config
export default defineConfig({
  // Temporarily commented out
  integrations: [svelte(), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});