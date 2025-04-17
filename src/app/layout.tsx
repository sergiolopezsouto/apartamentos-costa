import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ErrorBoundary from "@/components/ErrorBoundary";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apartamentos Costa Salou",
  description:
    "Tu destino vacacional perfecto en la Costa Dorada, con preciosos apartamentos para una estancia inolvidable.",
  openGraph: {
    title: "Apartamentos Costa Salou",
    description:
      "Tu destino vacacional perfecto en la Costa Dorada, con preciosos apartamentos para una estancia inolvidable.",
    url: "https://www.apartamentoscostasalou.com",
    type: "website",
    // images: [
    //   {
    //     url: "https://www.apartamentoscostasalou.com/path/to/image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Apartamentos Costa Salou",
    //   },
    // ],
  },
  metadataBase: new URL("https://www.apartamentoscostasalou.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: "Apartamentos Costa Salou",
    description:
      "Tu destino vacacional perfecto en la Costa Dorada, con preciosos apartamentos para una estancia inolvidable.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salou",
      addressRegion: "Tarragona",
      addressCountry: "ES",
    },
    telephone: "+34674763789",
    url: "https://www.apartamentoscostasalou.com",
    image: "https://www.apartamentoscostasalou.com/path/to/image.jpg",
  };

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <ErrorBoundary someProp={{}}>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
