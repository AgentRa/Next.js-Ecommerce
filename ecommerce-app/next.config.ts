import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["next-auth", 'geist/components'],
  },
};

export default nextConfig;
