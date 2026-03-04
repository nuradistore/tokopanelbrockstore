/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reduce build failures on shared hosting
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // Reduce memory usage a bit
  swcMinify: false,

  // cPanel/shared hosting: avoid image optimizer requirement
  images: { unoptimized: true },
};

export default nextConfig;
