/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) config.externals = [...(config.externals || []), "p5"];
    return config;
  },
};