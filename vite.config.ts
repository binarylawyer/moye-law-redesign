import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from 'vite-plugin-sitemap';

// List of static routes extracted from App.tsx
const staticRoutes = [
  '/',
  '/practice',
  '/services',
  '/practice/intellectual-property',
  '/practice/estate-legacy',
  '/practice/arts-media-law',
  '/practice/real-estate-hub',
  '/practice/emerging-technology-hub',
  '/practice/ip-licensing',
  '/practice/elder-law',
  '/practice/entertainment-law',
  '/practice/emerging-tech',
  '/practice/ip-asset-protection',
  '/practice/real-estate',
  '/practice/trusts-estates',
  '/practice/software-licensing',
  '/practice/ip-consulting',
  '/practice/digital-asset-protection',
  '/practice/probate-administration',
  '/practice/art-law',
  '/practice/real-estate-consulting',
  '/practice/innovation-patent-law',
  '/practice/ai-machine-learning',
  '/practice/blockchain-digital-assets',
  '/practice/real-estate-transactions',
  '/practice/digital-media-law',
  '/about',
  '/team',
  '/contact',
  '/resources',
  '/resources/articles',
  '/resources/podcasts',
  '/resources/podcasts/estate-planning',
  '/resources/podcasts/tech-ip',
  '/books',
  '/research',
  '/resources/faq',
  '/resources/how-we-work', // Route defined under /resources
  '/resources/technology-approach',
  '/resources/case-studies',
  '/client-chat',
  '/services/estate-planning',
  '/services/elder-law',
  '/services/probate-administration',
  '/services/ip-consulting-strategy',
  '/services/digital-asset-tech-protection',
  '/services/licensing-transactions',
  '/services/art-entertainment-law',
  '/how-we-work', // Direct route also defined
  '/experience-the-difference',
  '/error-test',
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: '/',
  plugins: [
    react(),
    sitemap({ 
      hostname: 'https://moye.law',
      dynamicRoutes: staticRoutes // Add the list of routes here
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-navigation-menu',
      'lucide-react',
      'zod',
      'react-hook-form',
      '@hookform/resolvers/zod',
      'dompurify',
      'react-helmet',
    ],
  },
}));
