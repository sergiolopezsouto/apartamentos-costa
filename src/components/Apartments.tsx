"use client";

import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaBed, FaUsers } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface Apartment {
  id: string;
  name: string;
  address: string;
  capacity: number;
  beds: number;
  images: string[];
  airbnbLink: string;
  whatsappLink: string;
}

const apartments: Apartment[] = [
  {
    id: '1',
    name: 'Apartment 1',
    address: 'Calle Example 123, Salou',
    capacity: 4,
    beds: 2,
    images: ['/images/apartment1-1.jpg', '/images/apartment1-2.jpg'],
    airbnbLink: 'https://airbnb.com/your-apartment-1',
    whatsappLink: 'https://wa.me/YOUR_WHATSAPP_NUMBER',
  },
  // Add more apartments here
];

export default function Apartments() {
  const t = useTranslations();

  return (
    <section id="apartments" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('apartments.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="h-64"
              >
                {apartment.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{apartment.name}</h3>
                <p className="text-gray-600 mb-4">{apartment.address}</p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <FaBed className="text-blue-600 mr-2" />
                    <span>{apartment.beds} {t('apartments.beds')}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="text-blue-600 mr-2" />
                    <span>{apartment.capacity} {t('apartments.capacity')}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={apartment.airbnbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-pink-600 text-white py-2 px-4 rounded-md text-center hover:bg-pink-700 transition-colors"
                  >
                    {t('apartments.viewOnAirbnb')}
                  </a>
                  <a
                    href={apartment.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md text-center hover:bg-green-700 transition-colors"
                  >
                    {t('apartments.contactWhatsapp')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 