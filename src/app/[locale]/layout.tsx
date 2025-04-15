import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { locales } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string }; 
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = params;
  let messages;
  
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound(); 
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
