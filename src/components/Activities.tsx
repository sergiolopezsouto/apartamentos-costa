"use client";

import { FaUmbrellaBeach, FaLandmark, FaUtensils, FaMoon, FaShoppingBag, FaWater } from 'react-icons/fa';

const activities = [
  {
    id: 'beaches',
    icon: FaUmbrellaBeach,
    title: 'Playas',
    description: 'Disfruta de las hermosas playas del Mediterráneo con aguas cristalinas y arena dorada.',
  },
  {
    id: 'themeParks',
    icon: FaLandmark,
    title: 'Parques Temáticos',
    description: 'Visita PortAventura World, uno de los parques temáticos más grandes de Europa, a minutos de distancia.',
  },
  {
    id: 'restaurants',
    icon: FaUtensils,
    title: 'Restaurantes',
    description: 'Descubre la cocina local y restaurantes internacionales a lo largo de la costa.',
  },
  {
    id: 'nightlife',
    icon: FaMoon,
    title: 'Vida Nocturna',
    description: 'Experimenta la vibrante vida nocturna con bares, clubes y lugares de entretenimiento.',
  },
  {
    id: 'shopping',
    icon: FaShoppingBag,
    title: 'Compras',
    description: 'Compra en mercados locales y centros comerciales modernos.',
  },
  {
    id: 'waterParks',
    icon: FaWater,
    title: 'Parques Acuáticos',
    description: 'Refréscate en el Parque Acuático Costa Caribe y disfruta de emocionantes toboganes y piscinas.',
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-64 bg-gray-50">

      {activities.length === 0 && (
        <div className="text-red-500 text-center">No activities available at the moment.</div>
      )}
      
      <div className="container mx-auto px-20 sm:px-28 lg:px-40">
        <h2 className="text-3xl font-bold text-center mb-20">Qué hacer en Salou</h2>

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
                  <h3 className="text-xl font-semibold">{activity.title}</h3>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}