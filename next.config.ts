import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mont Keys (prototipo de la app de piano): página estática en public/keys/index.html
  async rewrites() {
    return [
      { source: "/keys", destination: "/keys/index.html" },
      { source: "/keys/", destination: "/keys/index.html" },
    ];
  },
};

export default nextConfig;
