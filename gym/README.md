# SayGym PrimalTraining

A modern, SEO-optimized fitness center website built with Next.js 14+, featuring premium design and comprehensive search engine optimization.

## 🌟 Features

- ✅ **Fully SEO Optimized** - Discoverable by Google, Yahoo, Yandex, and DuckDuckGo
- ✅ **Structured Data** - Rich snippets with Organization, LocalBusiness, and WebSite schemas
- ✅ **Dynamic Sitemap** - Auto-generated sitemap for search engines
- ✅ **Open Graph & Twitter Cards** - Beautiful social media previews
- ✅ **PWA Ready** - Web app manifest for mobile installation
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Clean Code** - Well-structured and maintainable codebase

## 🚀 Getting Started

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
gym/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with SEO metadata
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── reserve/           # Reserve page
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   ├── manifest.ts        # PWA manifest
│   │   └── opengraph-image.tsx # OG image generator
│   ├── components/            # Reusable components
│   ├── sections/              # Page sections
│   ├── config/
│   │   └── metadata.ts        # SEO configuration
│   └── lib/
│       └── structured-data.ts # JSON-LD schemas
├── public/
│   ├── robots.txt            # Search engine crawler rules
│   └── favicon.ico           # Site icon
└── SEO_GUIDE.md              # Comprehensive SEO documentation
```

## 🔍 SEO Implementation

This project includes comprehensive SEO optimization:

- **robots.txt** - Guides search engine crawlers
- **sitemap.xml** - Dynamic sitemap generation
- **Metadata** - Optimized title, description, and keywords for each page
- **Structured Data** - JSON-LD schemas for rich search results
- **Open Graph** - Social media sharing optimization
- **Canonical URLs** - Prevents duplicate content issues
- **Language Tags** - Proper locale configuration (Indonesian)

For detailed SEO documentation, see [SEO_GUIDE.md](./SEO_GUIDE.md).

## ⚙️ Configuration

### Update Business Information

Edit `src/config/metadata.ts` to update:
- Production domain URL
- Business address and contact details
- Social media profiles
- Business hours

### Required Images

Add the following images to `/public`:
- `og-image.jpg` (1200x630px) - Social media preview
- `icon-192.png` (192x192px) - App icon
- `icon-512.png` (512x512px) - App icon
- `apple-touch-icon.png` (180x180px) - iOS icon
- `logo.png` - Company logo

## 🧪 Testing

### SEO Audit
```bash
# Build and run Lighthouse audit
npm run build
npm start
# Open Chrome DevTools > Lighthouse > Run SEO audit
```

### Test URLs
- Sitemap: http://localhost:3000/sitemap.xml
- Robots: http://localhost:3000/robots.txt
- Manifest: http://localhost:3000/manifest.json

### Online Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Open Graph Preview](https://www.opengraph.xyz/)
- [Google Search Console](https://search.google.com/search-console)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)

## 🚢 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

After deployment:
1. Update `src/config/metadata.ts` with your production URL
2. Update `public/robots.txt` with your production sitemap URL
3. Submit sitemap to Google Search Console
4. Monitor SEO performance

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is private and proprietary.

