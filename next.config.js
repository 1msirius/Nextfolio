module.exports = {
  async rewrites() {
    return [
      {
        source: "/feed.xml",
        destination: "/rss",
      },
    ];
  },
};
