# SEO Implementation Guide for SayGym PrimalTraining

## 📋 Overview

This document provides a comprehensive guide to the SEO implementation for the SayGym PrimalTraining website. The implementation follows Next.js 14+ best practices and ensures discoverability by major search engines (Google, Yahoo, Yandex, DuckDuckGo).

## ✅ What Has Been Implemented

### 1. Core SEO Files

#### robots.txt
- **Location**: `/public/robots.txt`
- **Purpose**: Guides search engine crawlers
- **Status**: ✅ Implemented
- **Action Required**: Update the sitemap URL with your production domain

#### sitemap.xml
- **Location**: `/src/app/sitemap.ts`
- **Purpose**: Dynamic sitemap generation for all pages
- **Status**: ✅ Implemented
- **Features**:
  - Automatic generation on build
  - Priority and change frequency configured
  - All routes included (home, about, reserve)
- **Action Required**: Update `baseUrl` with your production domain

#### Web App Manifest
- **Location**: `/src/app/manifest.ts`
- **Purpose**: PWA support and mobile optimization
- **Status**: ✅ Implemented
- **Action Required**: Add icon files (`icon-192.png`, `icon-512.png`) to `/public`

### 2. Metadata Configuration

#### Centralized Config
- **Location**: `/src/config/metadata.ts`
- **Purpose**: Single source of truth for all SEO metadata
- **Status**: ✅ Implemented
- **Features**:
  - Site-wide configuration
  - Business information
  - Social media profiles
  - Open Graph settings
  - Twitter Card settings
  - Robots configuration

#### Page-Specific Metadata

| Page | Title | Status |
|------|-------|--------|
| Home | "Home - Premium Fitness Center" | ✅ |
| About | "About Us - Our Story & Mission" | ✅ |
| Reserve | "Reserve Your Session - Book Now" | ✅ |

### 3. Structured Data (JSON-LD)

- **Location**: `/src/lib/structured-data.ts`
- **Status**: ✅ Implemented
- **Schemas Included**:
  - ✅ Organization
  - ✅ LocalBusiness (with opening hours)
  - ✅ WebSite (with search action)
  - ✅ BreadcrumbList

### 4. Technical SEO Features

- ✅ Canonical URLs
- ✅ Language and locale configuration (Indonesian - id_ID)
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ Viewport and theme-color
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy

## 🔧 Configuration Required

### Update Business Information

Edit `/src/config/metadata.ts` and update the following:

```typescript
export const siteConfig = {
  // Update production URL
  url: 'https://your-domain.com', // ← CHANGE THIS
  
  // Business information
  business: {
    address: {
      street: 'Jl. Example Street No. 123', // ← CHANGE THIS
      city: 'Jakarta', // ← CHANGE THIS
      state: 'DKI Jakarta', // ← CHANGE THIS
      postalCode: '12345', // ← CHANGE THIS
    },
    phone: '+62 21 1234 5678', // ← CHANGE THIS
    email: 'info@saygym.com', // ← CHANGE THIS
    hours: 'Mon-Fri: 06:00-22:00, Sat-Sun: 08:00-20:00', // ← CHANGE THIS
  },
  
  // Social media
  social: {
    twitter: '@saygym', // ← CHANGE THIS
    instagram: '@saygym', // ← CHANGE THIS
    facebook: 'saygym', // ← CHANGE THIS
  },
}
```

### Update robots.txt

Edit `/public/robots.txt`:

```txt
Sitemap: https://your-domain.com/sitemap.xml  # ← CHANGE THIS
```

### Add Required Images

Create and add the following images to `/public`:

1. **Open Graph Image** (`og-image.jpg`)
   - Dimensions: 1200x630px
   - Format: JPG or PNG
   - Purpose: Social media previews

2. **App Icons**:
   - `icon-192.png` (192x192px)
   - `icon-512.png` (512x512px)
   - `apple-touch-icon.png` (180x180px)

3. **Logo** (`logo.png`)
   - Recommended: Square format
   - Purpose: Structured data

## 🧪 Testing & Verification

### 1. Local Testing

Start the development server:
```bash
npm run dev
```

Test the following URLs:
- http://localhost:3000/sitemap.xml
- http://localhost:3000/robots.txt
- http://localhost:3000/manifest.json

### 2. Metadata Inspection

Open your browser DevTools and check the `<head>` section for:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- JSON-LD structured data

### 3. SEO Audit Tools

#### Google Lighthouse
1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Select "SEO" category
4. Run audit
5. **Target Score**: 90+

#### Rich Results Test
1. Visit: https://search.google.com/test/rich-results
2. Enter your page URL
3. Verify structured data is detected

#### Open Graph Preview
1. Visit: https://www.opengraph.xyz/
2. Enter your page URL
3. Check how it appears on social media

### 4. After Deployment

#### Google Search Console
1. Add your website
2. Submit sitemap: `https://your-domain.com/sitemap.xml`
3. Monitor indexing status
4. Check for crawl errors

#### Bing Webmaster Tools
1. Add your website
2. Submit sitemap
3. Monitor performance

## 📊 SEO Checklist

### Technical SEO
- [x] robots.txt configured
- [x] Sitemap generated
- [x] Canonical URLs set
- [x] Meta descriptions on all pages
- [x] Title tags optimized
- [x] Language attribute set
- [x] Mobile-friendly (responsive)
- [x] HTTPS ready
- [ ] Page speed optimized (run Lighthouse)
- [ ] Images have alt text (verify in components)

### On-Page SEO
- [x] Unique title tags per page
- [x] Unique meta descriptions per page
- [x] Keyword-optimized content
- [x] Proper heading hierarchy (H1, H2, H3)
- [x] Internal linking structure
- [ ] Image optimization (verify file sizes)

### Structured Data
- [x] Organization schema
- [x] LocalBusiness schema
- [x] WebSite schema
- [x] BreadcrumbList schema

### Social Media
- [x] Open Graph tags
- [x] Twitter Card tags
- [ ] Social media profiles linked

## 🎯 Keywords Targeting

### Home Page
- gym near me
- fitness center
- personal training
- group fitness classes
- SayGym PrimalTraining

### About Page
- gym mission
- fitness philosophy
- certified trainers
- fitness community

### Reserve Page
- book gym session
- reserve personal training
- gym booking
- fitness class reservation

## 📈 Next Steps

1. **Add Images**: Create and upload required images (og-image.jpg, icons)
2. **Update Configuration**: Fill in actual business details
3. **Content Optimization**: Review and optimize page content with keywords
4. **Image Alt Text**: Add descriptive alt text to all images
5. **Performance**: Optimize images and run Lighthouse audit
6. **Deploy**: Deploy to production
7. **Submit to Search Engines**: Submit sitemap to Google Search Console and Bing
8. **Monitor**: Track rankings and traffic in analytics

## 📚 Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## 🆘 Troubleshooting

### Sitemap not accessible
- Check that `/src/app/sitemap.ts` exists
- Rebuild the project: `npm run build`
- Verify the file is in `.next/server/app/sitemap.xml`

### Metadata not showing
- Clear browser cache
- Check that metadata is exported from page files
- Verify imports are correct

### Structured data errors
- Use Google's Rich Results Test
- Check JSON-LD syntax
- Verify all required fields are present

---

**Last Updated**: January 2, 2026
**Version**: 1.0
**Maintained by**: Development Team
