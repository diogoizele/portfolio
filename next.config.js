/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["i.scdn.co", "images.ctfassets.net"],
  },
};

module.exports = nextConfig;
