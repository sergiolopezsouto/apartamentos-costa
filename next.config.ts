import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack(config, { isServer }) {
    config.cache = false; 
    return config;
  },
};

export default withNextIntl(nextConfig);
