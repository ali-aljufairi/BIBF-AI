const path = require('path');

module.exports = {
  output: 'standalone',

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

module.exports.excludeFile = (file) => {
  const excludedFiles = ['.github'];
  const filePath = path.resolve(file);
  const fileName = path.basename(filePath);
  return excludedFiles.includes(fileName);
};