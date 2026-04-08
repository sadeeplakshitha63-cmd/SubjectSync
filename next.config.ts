import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/SubjectSync', 
  assetPrefix: '/SubjectSync',
};

export default nextConfig;
