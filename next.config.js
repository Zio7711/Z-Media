/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["tva4.sinaimg.cn", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
