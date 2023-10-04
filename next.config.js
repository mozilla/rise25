const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:slug*',
        destination: 'https://blog.mozilla.org/en/mozilla/rise-25-winners/?source=web-redirect',
        permanent: false,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig