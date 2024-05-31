/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/energieportal",
  images: { unoptimized: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  }
};

export default nextConfig;
