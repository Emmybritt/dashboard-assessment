import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    reactCompiler: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
