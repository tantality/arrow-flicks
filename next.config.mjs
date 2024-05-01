/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
