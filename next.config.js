/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
