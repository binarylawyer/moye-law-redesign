import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from 'vite-plugin-sitemap';
import { imagetools } from 'vite-imagetools';

// --- Data Imports for Dynamic Routes ---
import { resources as articles, Resource } from './src/data/articlesData'; // Renamed, aliased as articles

// --- Define minimal types for data structure ---
// We only need the slug for the sitemap
interface SitemapEntry { 
  slug: string; 
}

// Use the imported Resource type for stronger typing
interface ResourceStub extends Resource, SitemapEntry {} 

// Define the expected structure for imported research data
interface ResearchPaperData { 
  researchPapers: SitemapEntry[]; 
}

// --- Main Async Config Function ---
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  
  // --- Load Research Data ---
  let researchPapers: SitemapEntry[] = []; // Use let, declare outside
  try {
    // Use dynamic import()
    const researchDataModule: ResearchPaperData = await import('./src/data/researchData'); 
    if (researchDataModule && Array.isArray(researchDataModule.researchPapers)) {
       researchPapers = researchDataModule.researchPapers;
    } else {
      console.warn("\nWARN: Imported './src/data/researchData.ts' but it does not export an array named 'researchPapers'. Research paper URLs will NOT be added to the sitemap.\n");
    }
  } catch (e) {
    console.warn(`\nWARN: Could not dynamically import research paper data from './src/data/researchData.ts' (Error: ${e instanceof Error ? e.message : e}). Research paper URLs will NOT be added to the sitemap. Please create this file and ensure it exports an array named 'researchPapers' containing objects with at least a 'slug: string' property.\n`);
    // researchPapers remains the empty array initialized above
  }
  // --- End Load Research Data ---

  // --- Load Book Data ---
  let books: SitemapEntry[] = []; // Initialize books array
  try {
    // Safely try to import the books data
    // This is just for sitemap generation, so no problem if it fails
    // @ts-ignore - ignore the missing module error
    const booksDataModule = await import('./src/data/booksData').catch(() => ({ books: [] }));
    if (booksDataModule && Array.isArray(booksDataModule.books)) {
      books = booksDataModule.books;
    } else {
      console.warn("\nWARN: Imported './src/data/booksData.ts' but it does not export an array named 'books'. Book URLs will NOT be added to the sitemap.\n");
    }
  } catch (e) {
    console.warn(`\nWARN: Could not dynamically import book data from './src/data/booksData.ts' (Error: ${e instanceof Error ? e.message : e}). Book URLs will NOT be added to the sitemap.\n`);
    // books remains the empty array initialized above
  }
  // --- End Load Book Data ---

  // --- Route Generation ---
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
    '/resources/how-we-work',
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
    '/how-we-work',
    '/experience-the-difference',
    '/error-test',
  ];

  const articleRoutes = (articles as ResourceStub[]).map((article: ResourceStub) => `/resources/${article.slug}`); // Renamed variable
  const researchPaperRoutes = researchPapers.map((paper: SitemapEntry) => `/research/${paper.slug}`);
  const bookRoutes = books.map((book: SitemapEntry) => `/books/${book.slug}`); // Generate book routes

  const allRoutes = [
    ...staticRoutes,
    ...articleRoutes, // Use renamed variable
    ...researchPaperRoutes,
    ...bookRoutes // Add book routes
  ];
  // --- End Route Generation ---

  // --- Return Vite Config Object ---
  return {
    server: {
      host: "::",
      port: 8080,
    },
    base: '/',
    plugins: [
      imagetools({
        // Enhance image optimization
        defaultDirectives: new URLSearchParams([
          ['format', 'webp;avif;original'],
          ['quality', '80'],
          ['stripExif', 'true']
        ])
      }),
      react({
        // Performance optimization for React
        jsxImportSource: mode === 'production' ? undefined : '@emotion/react',
        plugins: []
      }),
      sitemap({ 
        hostname: 'https://moye.law',
        dynamicRoutes: allRoutes
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      minify: 'terser', // Use Terser for better minification
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs
          pure_funcs: ['console.log', 'console.info'], // Remove specific console functions
          passes: 2, // Multiple compression passes for better results
        },
        mangle: {
          properties: {
            regex: /^_/  // Only mangle properties that start with underscore
          }
        }
      },
      cssMinify: true, // Ensure CSS is minified
      cssCodeSplit: true, // Split CSS into chunks that match JS chunks
      reportCompressedSize: false, // Speed up build by skipping size reporting
      // Extract React vendor code into separate chunk
      commonjsOptions: {
        transformMixedEsModules: true, // Better handling of mixed modules
        include: [/node_modules/], // Include all node_modules in the transformation
      },
      // Add source map to better debug performance issues
      sourcemap: mode === 'production' ? 'hidden' : true,
      // Improve chunking strategy
      rollupOptions: {
        output: {
          // Extract CSS into separate files
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            if (assetInfo.name?.match(/\.(png|jpe?g|gif|svg|webp|avif)$/)) {
              return 'assets/img/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
          // Control chunk file names
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          // Enforce a maximum chunk size for better loading
          manualChunks: function(id) {
            // Use a smart chunking strategy
            
            // Critical paths - Always include in the main bundle
            if (id.includes('/src/components/Layout') || 
                id.includes('/src/components/Navbar') ||
                id.includes('/src/components/Logo') ||
                id.includes('/src/pages/Index')) {
              return 'critical';
            }
            
            // Core React dependencies - must load early but separate from app code
            if (id.includes('node_modules/react/') || 
                id.includes('node_modules/react-dom/') || 
                id.includes('node_modules/scheduler/')) {
              return 'react-core';
            }
            
            // Routes and navigation - needed soon after initial render
            if (id.includes('node_modules/react-router') || 
                id.includes('/node_modules/@remix-run/router')) {
              return 'react-router';
            }
            
            // UI libraries (excluding Radix UI, which will go to vendor)
            if (// id.includes('node_modules/@radix-ui/') || // Keep Radix in vendor chunk
                id.includes('node_modules/lucide-react') || 
                id.includes('node_modules/class-variance-authority') || 
                id.includes('node_modules/clsx')) {
              return 'ui-libs';
            }
            
            // Form and validation - only needed on pages with forms
            if (id.includes('node_modules/zod') || 
                id.includes('node_modules/react-hook-form') || 
                id.includes('node_modules/@hookform') || 
                id.includes('node_modules/dompurify')) {
              return 'forms';
            }
            
            // Group pages by section for better code splitting
            if (id.includes('/src/pages/practice/') || id.includes('/src/pages/services/')) {
              return 'section-legal-services';
            }
            
            if (id.includes('/src/pages/Resources') || 
                id.includes('/src/pages/Articles') || 
                id.includes('/src/pages/Books') || 
                id.includes('/src/pages/Research')) {
              return 'section-resources';
            }
            
            if (id.includes('/src/pages/About') || 
                id.includes('/src/pages/Team') || 
                id.includes('/src/pages/Contact')) {
              return 'section-about';
            }
            
            // UI Components by type
            if (id.includes('/src/components/ui/')) {
              return 'components-ui';
            }
            
            // Custom components - separate from UI components
            if (id.includes('/src/components/')) {
              return 'components-custom';
            }
            
            // Common utilities - light and can be loaded early
            if (id.includes('/src/utils/') || id.includes('/src/lib/') || id.includes('/src/hooks/')) {
              return 'common';
            }
            
            // Vendor dependencies - third-party libraries (now includes Radix UI)
            if (id.includes('node_modules/')) {
              return 'vendor';
            }
          }
        }
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
      ]
    },
    // Add top level options to improve module processing
    esbuild: {
      legalComments: 'none', // Remove license comments 
      target: ['es2020'], // Modern target for smaller bundles
      treeShaking: true, // Ensure unused code is removed
      minifySyntax: true,
      minifyIdentifiers: true
    }
  };
  // --- End Return Vite Config Object ---
});
