/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images:{
    formats:['image/webp']
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
};
module.exports = nextConfig
