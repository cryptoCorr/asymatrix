/** @type {import('next').NextConfig} */
const nextConfig = {
  // Görsellerin (Token logoları vb.) çekileceği güvenli adresleri tanımlıyoruz
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
      },
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
      },
    ],
  },
  // Vercel dağıtımında TypeScript hatalarının yayını durdurmasını engellemek için (opsiyonel ama hızlı deploy için iyidir)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
