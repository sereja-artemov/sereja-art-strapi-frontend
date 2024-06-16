/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sereja-art.ru',
      },
      {
        protocol: 'http',
        hostname: 'tech.sereja-art.ru',
      },
      {
        protocol: 'https',
        hostname: 'api.sereja-art.ru',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        // pathname: '/uploads/**'
      },
    ],
  },
  async redirects() {
    return [
        {
            // What the user typed in the browser
            source: '/blogs/:path*',
            // Where the user will be redirected to
            destination: '/blog/:path*',
            // If the destination is a permanent redirect (308)
            permanent: true
        }
    ];
  }
};

export default nextConfig;
