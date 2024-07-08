/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  }
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
