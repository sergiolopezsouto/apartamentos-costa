import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ErrorBoundary from '@/components/ErrorBoundary';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    "name": "Apartamentos Costa Salou",
    "description": "Tu destino vacacional perfecto en la Costa Dorada, con preciosos apartamentos para una estancia inolvidable.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Salou",
      "addressRegion": "Tarragona",
      "addressCountry": "ES"
    },
    "telephone": "+34674763789",
    "url": "https://www.apartamentoscostasalou.com",
    "image": "https://www.apartamentoscostasalou.com/path/to/image.jpg"
  };

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/path/to/favicon.ico" />
        <meta name="description" content="Tu destino vacacional perfecto en la Costa Dorada, con preciosos apartamentos para una estancia inolvidable." />
        <meta property="og:title" content="Apartamentos Costa Salou" />
        <meta property="og:description" content="Tu destino vacacional perfecto en la Costa Dorada, con preciosos apartamentos para una estancia inolvidable." />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.apartamentoscostasalou.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundary>
          {children} 
        </ErrorBoundary>        
      </body>
    </html>
  );
}
