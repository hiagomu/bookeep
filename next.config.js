/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  disable: isDev,
  register: true
})

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
})

module.exports = nextConfig