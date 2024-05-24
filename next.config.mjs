/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'i.natgeofe.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'dynamic-media-cdn.tripadvisor.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'media.glamourmagazine.co.uk',
            port: '',
            pathname: '/**',
          },
        ],
      }
};

export default nextConfig;
