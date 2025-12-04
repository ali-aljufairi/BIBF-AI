const path = require('path');

module.exports = {
  output: 'standalone',
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, './');
    return config;
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
