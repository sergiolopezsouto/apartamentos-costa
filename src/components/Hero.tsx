"use client";

import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  '/images/salou-beach.jpg',
  '/images/portaventura.jpg',
  '/images/mediterranean.jpg',
  '/images/salou-town.jpg',
];

export default function Hero() {
  const t = useTranslations();

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </div>
  );
} 