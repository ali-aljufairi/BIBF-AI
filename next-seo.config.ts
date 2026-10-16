import { DefaultSeoProps } from "next-seo";

const description = "Notes on machine learning, AWS and the cloud by Ali Aljufairi, started during the AWS ML program at BIBF.";
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s",
  defaultTitle:
    "Ali Aljufairi · Notes on ML & Cloud",
  description,

  openGraph: {
    type: "website",
    locale: "en_IE",
    title: "Ali Aljufairi · Notes on ML & Cloud",
    description,
  },
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "/favicon/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
  ],
};

export default config;
