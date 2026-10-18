const path = require('path');

// Every route rendered from Markdown has a generated "<route>.md" twin in public/
// (see lib/modules/generate-agent-files.mjs). This matches those routes: no dot
// in the path, and not a Next.js internal or a static asset folder.
const PAGE = '/:path((?!_next/|api/|md_assets/|favicon/)[^.]+)';

const SITE_LINKS = [
  '</llms.txt>; rel="describedby"; type="text/markdown"',
  '</feed.xml>; rel="alternate"; type="application/rss+xml"; title="Ali Aljufairi: Notes on ML and Cloud"',
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
].join(', ');

const markdownLink = (href) => `<${href}>; rel="alternate"; type="text/markdown"`;

// Agents that ask for Markdown and not HTML get the .md source of the page.
const wantsMarkdown = {
  has: [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }],
  missing: [{ type: 'header', key: 'accept', value: '(.*)text/html(.*)' }],
};

module.exports = {
  output: 'standalone',
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, './');
    return config;
  },
  async headers() {
    // When several rules set the same header, the last match wins, so the
    // page rules repeat the site-wide links.
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Link', value: SITE_LINKS },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none'" },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/',
        headers: [
          { key: 'Link', value: `${SITE_LINKS}, ${markdownLink('/index.md')}` },
          { key: 'Vary', value: 'Accept' },
        ],
      },
      {
        source: PAGE,
        headers: [
          { key: 'Link', value: `${SITE_LINKS}, ${markdownLink('/:path.md')}` },
          { key: 'Vary', value: 'Accept' },
        ],
      },
      { source: '/', ...wantsMarkdown, headers: [{ key: 'Content-Location', value: '/index.md' }] },
      { source: PAGE, ...wantsMarkdown, headers: [{ key: 'Content-Location', value: '/:path.md' }] },
      {
        source: '/:file((?:.*\\.md)|llms\\.txt|llms-full\\.txt)',
        headers: [{ key: 'Content-Type', value: 'text/markdown; charset=utf-8' }],
      },
      { source: '/feed.xml', headers: [{ key: 'Content-Type', value: 'application/rss+xml; charset=utf-8' }] },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', ...wantsMarkdown, destination: '/index.md' },
        { source: PAGE, ...wantsMarkdown, destination: '/:path.md' },
      ],
    };
  },
};
