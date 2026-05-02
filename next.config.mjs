/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/kicko-tech-test',
  assetPrefix: '/kicko-tech-test/',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
