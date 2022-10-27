/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["tva4.sinaimg.cn"],
  },
};

module.exports = nextConfig;
