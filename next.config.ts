import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

// Turbopack (default in Next.js 16) requires serializable options — no function plugins
const withMDX = createMDX({});

export default withMDX(nextConfig);
