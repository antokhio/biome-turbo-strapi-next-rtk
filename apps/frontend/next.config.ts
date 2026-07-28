import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  async redirects() {
    if (process.env.NODE_ENV === "production")
      return [
        {
          source: "/theme",
          destination: "/404",
          permanent: true,
        },
      ];

    return [];
  },
};

export default nextConfig;
