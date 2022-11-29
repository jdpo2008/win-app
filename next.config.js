const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "http://cambiateawin.pe/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
