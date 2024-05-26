import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  swcMinify: true, // 최신 버전에서 swc 기반의 빠른 빌드 및 축소 지원
  webpack(config, { dev, isServer }) {
    // 프로덕션 환경에서 React DevTools 제거
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-devtools-shared": false,
        "react-debug-tools": false,
      };
    }

    return config;
  },
};

export default bundleAnalyzer(nextConfig);
