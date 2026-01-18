/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/msgsndr/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index.html',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
