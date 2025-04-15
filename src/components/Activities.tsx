"use client";

import { useTranslations } from 'next-intl';
import { FaUmbrellaBeach, FaLandmark, FaUtensils, FaMoon, FaShoppingBag, FaWater } from 'react-icons/fa';

const activities = [
  {
    id: 'beaches',
    icon: FaUmbrellaBeach,
    title: 'activities.beaches',
    description: {
      en: 'Enjoy the beautiful Mediterranean beaches with crystal clear waters and golden sand.',
      es: 'Disfruta de las hermosas playas del Mediterráneo con aguas cristalinas y arena dorada.',
    },
  },
  {
    id: 'themeParks',
    icon: FaLandmark,
    title: 'activities.themeParks',
    description: {
      en: 'Visit PortAventura World, one of Europe\'s largest theme parks, just minutes away.',
      es: 'Visita PortAventura World, uno de los parques temáticos más grandes de Europa, a minutos de distancia.',
    },
  },
  {
    id: 'restaurants',
    icon: FaUtensils,
    title: 'activities.restaurants',
    description: {
      en: 'Discover local cuisine and international restaurants along the coast.',
      es: 'Descubre la cocina local y restaurantes internacionales a lo largo de la costa.',
    },
  },
  {
    id: 'nightlife',
    icon: FaMoon,
    title: 'activities.nightlife',
    description: {
      en: 'Experience vibrant nightlife with bars, clubs, and entertainment venues.',
      es: 'Experimenta la vibrante vida nocturna con bares, clubes y lugares de entretenimiento.',
    },
  },
  {
    id: 'shopping',
    icon: FaShoppingBag,
    title: 'activities.shopping',
    description: {
      en: 'Shop at local markets and modern shopping centers.',
      es: 'Compra en mercados locales y centros comerciales modernos.',
    },
  },
  {
    id: 'waterParks',
    icon: FaWater,
    title: 'activities.waterParks',
    description: {
      en: 'Cool off at Costa Caribe Aquatic Park and enjoy thrilling water slides and pools.',
      es: 'Refréscate en el Parque Acuático Costa Caribe y disfruta de emocionantes toboganes y piscinas.',
    },
  },
];

export default function Activities() {
  const t = useTranslations();
  const currentLocale = typeof window !== 'undefined' 
    ? window.location.pathname.split('/')[1] || 'en'
    : 'en';

  return (
    <section id="activities" className="py-64 bg-gray-50">
      <div className="container mx-auto px-20 sm:px-28 lg:px-40">
        <h2 className="text-3xl font-bold text-center mb-20">
          {t('activities.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-blue-600 text-3xl mr-4" />
                  <h3 className="text-xl font-semibold">
                    {t(activity.title)}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {activity.description[currentLocale as keyof typeof activity.description]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 