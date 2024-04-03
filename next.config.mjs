/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/online-beratung',
        permanent: true,
      },
    ]
  },
};



export default nextConfig;
