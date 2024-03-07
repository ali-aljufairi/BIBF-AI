module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/BIBF-AI",
        permanent: true,
      },
    ];
  },
};
