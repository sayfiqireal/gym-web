import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/metadata'

/**
 * Dynamic Open Graph Image Generator
 * This creates a beautiful OG image for social media sharing
 * Size: 1200x630px (recommended for Open Graph)
 */

export const runtime = 'edge'
export const alt = `${siteConfig.name} - Premium Fitness Center`
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '80px',
                    position: 'relative',
                }}
            >
                {/* Accent bar */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '8px',
                        background: 'linear-gradient(90deg, #FF4500 0%, #FF6347 100%)',
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    {/* Title */}
                    <h1
                        style={{
                            fontSize: '72px',
                            fontWeight: 'bold',
                            color: '#FFFFFF',
                            margin: '0 0 20px 0',
                            letterSpacing: '-2px',
                        }}
                    >
                        {siteConfig.name}
                    </h1>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: '32px',
                            color: '#CCCCCC',
                            margin: '0 0 40px 0',
                            maxWidth: '900px',
                            lineHeight: '1.4',
                        }}
                    >
                        Transform Your Body & Mind
                    </p>

                    {/* Features */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '40px',
                            marginTop: '20px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#FF4500',
                                fontSize: '24px',
                            }}
                        >
                            ✓ Personal Training
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#FF4500',
                                fontSize: '24px',
                            }}
                        >
                            ✓ Group Classes
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#FF4500',
                                fontSize: '24px',
                            }}
                        >
                            ✓ Expert Trainers
                        </div>
                    </div>
                </div>

                {/* Bottom accent */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '8px',
                        background: 'linear-gradient(90deg, #FF4500 0%, #FF6347 100%)',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
