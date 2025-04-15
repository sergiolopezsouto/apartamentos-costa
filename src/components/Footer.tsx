"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 text-white py-64">
      <div className="container mx-auto px-20 sm:px-28 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">Salou Apartments</h3>
            <p className="text-gray-300">
              Your perfect vacation destination on the Costa Dorada
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('navigation.contact')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/34674763789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:your@email.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Salou Apartments. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
} 