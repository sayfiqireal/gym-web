import { siteConfig } from '@/config/metadata'

/**
 * Structured Data (JSON-LD) utilities for SEO
 * These schemas help search engines understand your business better
 */

/**
 * Organization schema - Represents the business entity
 */
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.business.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.business.address.street,
            addressLocality: siteConfig.business.address.city,
            addressRegion: siteConfig.business.address.state,
            postalCode: siteConfig.business.address.postalCode,
            addressCountry: siteConfig.business.address.country,
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.business.phone,
            email: siteConfig.business.email,
            contactType: 'customer service',
        },
        sameAs: [
            `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
            `https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`,
            `https://facebook.com/${siteConfig.social.facebook}`,
        ],
    }
}

/**
 * LocalBusiness schema - For gyms and fitness centers
 */
export function getLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': ['HealthAndBeautyBusiness', 'SportsActivityLocation', 'ExerciseGym'],
        name: siteConfig.business.name,
        image: `${siteConfig.url}/og-image.jpg`,
        '@id': siteConfig.url,
        url: siteConfig.url,
        telephone: siteConfig.business.phone,
        priceRange: '$$', // TODO: Update based on your pricing
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.business.address.street,
            addressLocality: siteConfig.business.address.city,
            addressRegion: siteConfig.business.address.state,
            postalCode: siteConfig.business.address.postalCode,
            addressCountry: siteConfig.business.address.country,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '06:00',
                closes: '22:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '08:00',
                closes: '20:00',
            },
        ],
        sameAs: [
            `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
            `https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`,
            `https://facebook.com/${siteConfig.social.facebook}`,
        ],
    }
}

/**
 * WebSite schema - Represents the website itself
 */
export function getWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
            '@type': 'Organization',
            name: siteConfig.business.name,
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    }
}

/**
 * BreadcrumbList schema - For navigation hierarchy
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${siteConfig.url}${item.url}`,
        })),
    }
}

/**
 * Helper function to render JSON-LD script tag
 */
export function renderJsonLd(data: object) {
    return {
        __html: JSON.stringify(data),
    }
}
