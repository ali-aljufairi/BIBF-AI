const path = require('path');

module.exports = {
  output: 'standalone',
  outputFileTracing: {
    root: path.join(__dirname, '/'),
    includeRoot: true,
    globDirectory: '.',
    externalDirectories: [
      // Exclude the following directories from the build
      'node_modules',
      '.next',
      'out',
      '.git', // Exclude the .git directory
      '.gitignore', // Exclude the .gitignore file
    ],
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