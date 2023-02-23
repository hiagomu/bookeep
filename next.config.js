/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV !== "production",
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