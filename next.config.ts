import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL(
        "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/**"
      ),
    ],
  },
};

export default nextConfig;
