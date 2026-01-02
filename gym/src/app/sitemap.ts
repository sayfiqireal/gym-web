import { MetadataRoute } from 'next'

/**
 * Dynamic sitemap for SayGym PrimalTraining
 * This helps search engines discover all pages on the website
 * 
 * Priority: 1.0 = highest, 0.0 = lowest
 * Change Frequency: how often the page content changes
 */
export default function sitemap(): MetadataRoute.Sitemap {
    // TODO: Update this with your production domain
    const baseUrl = 'https://your-domain.com'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/reserve`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}
