import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { defaultMetadata } from "@/config/metadata";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
  renderJsonLd
} from "@/lib/structured-data";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

/**
 * Root metadata configuration
 * This provides default SEO settings for all pages
 */
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data schemas
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="id">
      <head>
        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLd(organizationSchema)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLd(localBusinessSchema)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLd(webSiteSchema)}
        />
      </head>
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

