"use client";

import Image from 'next/image';
import { FaBed, FaUsers, FaDoorOpen, FaBath } from 'react-icons/fa';

interface Apartment {
  id: string;
  name: string;
  address: string;
  capacity: number;
  beds: number;
  dorms: number;
  bathrooms: number;
  images: string[];
  airbnbLink: string;
  whatsappLink: string;
}

const apartments: Apartment[] = [
  {
    id: '1',
    name: 'Apartamento 1',
    address: 'Salou, España',
    capacity: 6,
    beds: 3,
    dorms: 2,
    bathrooms: 1,
    images: ['/images/apartment1-1.jpg', '/images/apartment1-2.jpg'],
    airbnbLink: 'https://www.airbnb.com/l/04LjhAyv',
    whatsappLink: 'https://wa.me/34674763789',
  },
  {
    id: '2',
    name: 'Apartamento 2',
    address: 'Salou, España',
    capacity: 4,
    beds: 2,
    dorms: 1,
    bathrooms: 1,
    images: ['/images/apartment2-1.jpg', '/images/apartment2-2.jpg'],
    airbnbLink: 'https://www.airbnb.com/l/ybv1nAah',
    whatsappLink: 'https://wa.me/34674763789',
  },
  {
    id: '3',
    name: 'Apartamento 3',
    address: 'Salou, España',
    capacity: 4,
    beds: 2,
    dorms: 1,
    bathrooms: 1,
    images: ['/images/apartment3-1.jpg', '/images/apartment3-2.jpg'],
    airbnbLink: 'https://www.airbnb.com/l/iSstM0kd',
    whatsappLink: 'https://wa.me/34674763789',
  },
];

export default function Apartments() {
  return (
    <section id="apartments" className="py-48 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestros Apartamentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {apartments.map((apartment) => (
            <div key={apartment.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={apartment.images[0]}
                  alt={`Image of ${apartment.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{apartment.name}</h3>
                <p className="text-gray-600 mb-4">{apartment.address}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <FaBed className="text-blue-600 mr-2" />
                    <span>{apartment.beds} Camas</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="text-blue-600 mr-2" />
                    <span>{apartment.capacity} Capacidad</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <FaDoorOpen className="text-blue-600 mr-2" />
                    <span>{apartment.dorms} Dormitorios</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="text-blue-600 mr-2" />
                    <span>{apartment.bathrooms} Baños</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-10 mb-4">
                  <a
                    href={apartment.airbnbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-[#FF5A5F] text-white px-6 py-2 rounded-lg hover:bg-[#FF5A5F]/90 transition-colors"
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/airbnb-icon.png"
                        alt="Airbnb logo"
                        width={24}
                        height={24}
                        className="mr-2 object-contain"
                      />
                      <span className="font-bold">Airbnb</span>
                    </div>
                  </a>
                  <a
                    href={apartment.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-[#25D366] text-white px-6 py-2 rounded-lg hover:bg-[#25D366]/90 transition-colors"
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/whatsapp-icon.png"
                        alt="WhatsApp logo"
                        width={24}
                        height={24}
                        className="mr-2 object-contain"
                      />
                      <span className="font-bold">WhatsApp</span>
                    </div>
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