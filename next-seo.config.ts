import { DefaultSeoProps } from "next-seo";

const description = "HOST ANY notes on AWS Machine Learning Services, Tutorials, and Tips.";
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s",
  defaultTitle:
    "Collection of AWS ML Notes",
  description,

  openGraph: {
    type: "website",
    locale: "en_IE",
    title: "AWS Machine Learning Blog ",
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
      type: "image/png",
      href: "/favicon/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
  ],
};

export default config;
