import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/metadata'

/**
 * Web App Manifest for SayGym PrimalTraining
 * Enables PWA features and better mobile experience
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        description: siteConfig.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#FF4500',
        orientation: 'portrait',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        categories: ['fitness', 'health', 'lifestyle'],
    }
}
