const MAINTENANCE_MODE = true;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false, // 圧縮を無効にする設定
          },
        },
      ],
    });

    return config;
  },
  images: {
    disableStaticImages: true, // importした画像の型定義設定を無効にする設定
  },
  async redirects() {
    return MAINTENANCE_MODE === true
      ? [
          {
            source: "/((?!maintenance$).*$)",
            destination: "/maintenance",
            permanent: false,
          },
        ]
      : [
        {
          source: "/maintenance",
          destination: "/",
          permanent: false,
        }
      ];
  },
};

export default nextConfig;
