"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentLocale = pathname.split('/')[1] || 'en';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'es' : 'en';
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/#apartments', label: t('navigation.apartments') },
    { href: '/#activities', label: t('navigation.activities') },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-center items-center">
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors text-base font-bold ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="relative group flex items-center justify-center w-7 h-7 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-110"
              title={currentLocale === 'en' ? 'Switch to Spanish' : 'Switch to English'}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
              <Image 
                src={currentLocale === 'en' ? "/images/es-flag.png" : "/images/uk-flag.png"}
                alt={currentLocale === 'en' ? "Spanish flag" : "UK flag"}
                width={18}
                height={18}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 ring-2 ring-white/50 rounded-full group-hover:ring-blue-400 transition-all duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600`}
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-center text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Image 
                src={currentLocale === 'en' ? "/images/es-flag.png" : "/images/uk-flag.png"}
                alt={currentLocale === 'en' ? "Spanish flag" : "UK flag"}
                width={16}
                height={16}
                className="rounded-full border border-gray-200"
              />
              <span>
                {currentLocale === 'en' ? 'Español' : 'English'}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 