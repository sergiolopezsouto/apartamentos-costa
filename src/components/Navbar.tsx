"use client";

import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: 'apartments', label: 'Apartamentos' },
    { href: 'activities', label: 'Actividades' },
    { href: 'testimonials', label: 'Testimonios' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-5' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-center items-center">
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleScrollToSection(item.href); // Scroll to the section
                }}
                className={`transition-colors text-base font-bold ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
              >
                {item.label}
              </Link>
            ))}
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
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleScrollToSection(item.href); // Scroll to the section
                  setIsMenuOpen(false); // Close the mobile menu
                }}
                className="block px-3 py-2 text-center text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}