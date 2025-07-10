const path = require('path');

module.exports = {
  output: 'standalone',

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
