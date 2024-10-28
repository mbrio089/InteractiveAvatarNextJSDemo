/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'https://digit.cologne',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'X-Requested-With, Content-Type, Authorization',
            },
          ],
        },
      ];
    }
  }
  
module.exports = nextConfig
