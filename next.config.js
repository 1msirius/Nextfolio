/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/atom.xml",
        destination: "/feed/atom.xml",
      },
      {
        source: "/feed.json",
        destination: "/feed/feed.json",
      },
      {
        source: "/atom",
        destination: "/feed/atom.xml",
      },
    ];
  },
};

module.exports = nextConfig;
