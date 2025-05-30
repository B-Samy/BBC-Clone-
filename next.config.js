const nextConfig = {
  // Remove or comment out this line:
  // output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
