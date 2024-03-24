/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img10.360buyimg.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

module.exports = nextConfig;
