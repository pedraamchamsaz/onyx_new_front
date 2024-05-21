/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**',
          },
          {
            protocol: 'https',
            hostname: 'i.natgeofe.com',
            port: '',
            pathname: '/n/**',
          },
          {
            protocol: 'https',
            hostname: 'dynamic-media-cdn.tripadvisor.com',
            port: '',
            pathname: '/media/**',
          },
        ],
      }
};

export default nextConfig;
