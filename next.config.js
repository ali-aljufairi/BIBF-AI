const path = require('path');

module.exports = {
  output: 'standalone',
  outputFileTracingRoot: path.join(__dirname, '/'),
  outputFileTracingExcludePatterns: [
    'node_modules',
    '.next',
    'out',
    '.git',
    '.gitignore'
  ],

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