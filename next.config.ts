import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    config.cache = false; 
    return config;
  },
};

export default nextConfig;
