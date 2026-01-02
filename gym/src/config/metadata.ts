import { Metadata } from 'next'

/**
 * Centralized SEO configuration for SayGym PrimalTraining
 * This ensures consistent metadata across all pages
 */

export const siteConfig = {
    name: 'SayGym PrimalTraining',
    shortName: 'SayGym',
    description: 'Transform your body and mind at SayGym PrimalTraining. Premium fitness facility offering personal training, group classes, and state-of-the-art equipment in a supportive community environment.',
    url: 'https://your-domain.com', // TODO: Update with your production domain
    ogImage: '/og-image.jpg',
    keywords: [
        'gym',
        'fitness',
        'personal training',
        'workout',
        'strength training',
        'cardio',
        'wellness',
        'health',
        'SayGym',
        'PrimalTraining',
        'fitness center',
        'gym membership',
        'group fitness classes',
    ],
    locale: 'id_ID', // Indonesian locale
    type: 'website' as const,

    // Business information - TODO: Update with actual details
    business: {
        name: 'SayGym PrimalTraining',
        address: {
            street: 'Jl. Example Street No. 123', // TODO: Update
            city: 'Jakarta', // TODO: Update
            state: 'DKI Jakarta', // TODO: Update
            postalCode: '12345', // TODO: Update
            country: 'Indonesia',
        },
        phone: '+62 21 1234 5678', // TODO: Update
        email: 'info@saygym.com', // TODO: Update
        hours: 'Mon-Fri: 06:00-22:00, Sat-Sun: 08:00-20:00', // TODO: Update
    },

    // Social media - TODO: Update with actual profiles
    social: {
        twitter: '@saygym',
        instagram: '@saygym',
        facebook: 'saygym',
    },
}

/**
 * Default metadata configuration
 * Used as base for all pages
 */
export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,

    // Open Graph metadata for social media sharing
    openGraph: {
        type: 'website',
        locale: siteConfig.locale,
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - Premium Fitness Center`,
            },
        ],
    },

    // Twitter Card metadata
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.social.twitter,
    },

    // Robots configuration for search engines
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Icons and manifest
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.json',

    // Additional metadata
    alternates: {
        canonical: siteConfig.url,
    },
    category: 'fitness',
}
