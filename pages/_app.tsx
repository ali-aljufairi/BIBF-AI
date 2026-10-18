import { AppProps } from "next/app";
import { Geist, JetBrains_Mono } from "next/font/google";
import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { Analytics } from "@vercel/analytics/react";
import DiscoveryLinks from "../components/misc/discovery-links";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sans.variable} ${mono.variable} font-sans`}>
      <DefaultSeo {...SEO} />
      <DiscoveryLinks />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
