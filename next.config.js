const path = require('path');

module.exports = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingExcludes: {
      '/.github': true,
    },
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/BIBF-AI',
        permanent: true,
      },
    ];
  },
};