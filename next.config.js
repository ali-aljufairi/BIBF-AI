const path = require('path');

module.exports = {
  output: 'standalone',
  outputFileTracing: {
    root: path.join(__dirname, '/'),
    includeRoot: true,
    globDirectory: '.',
    externalDirectories: [
      'node_modules',
      '.next',
      'out',
      '.git',
      '.gitignore',
      '.github/images/logo.gif',
      '.obsidian/icons/font-awesome-brands.zip',
      'common_md/attachments',
      // Add any other directories or files you want to exclude
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