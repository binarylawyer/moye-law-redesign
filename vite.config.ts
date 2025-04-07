import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
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
    const booksDataModule = await import('./src/data/booksData'); // Dynamically import book data
    if (booksDataModule && Array.isArray(booksDataModule.books)) {
      books = booksDataModule.books;
    } else {
      console.warn("\nWARN: Imported './src/data/booksData.ts' but it does not export an array named 'books'. Book URLs will NOT be added to the sitemap.\n");
    }
  } catch (e) {
    console.warn(`\nWARN: Could not dynamically import book data from './src/data/booksData.ts' (Error: ${e instanceof Error ? e.message : e}). Book URLs will NOT be added to the sitemap. Please create/fix this file and ensure it exports an array named 'books' containing objects with at least a 'slug: string' property.\n`);
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
      imagetools(),
      react(),
      sitemap({ 
        hostname: 'https://moye.law',
        dynamicRoutes: allRoutes
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
  };
  // --- End Return Vite Config Object ---
});
