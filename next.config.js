/** @type {import{'next'.NextConfig}} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '**',
      },
    ],
    minimumCacheTTL: 15000000,
  },
}

module.exports = nextConfig
