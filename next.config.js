/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
        allowFutureImage: true,
        unoptimized: true
    }
}
}

module.exports = nextConfig;
