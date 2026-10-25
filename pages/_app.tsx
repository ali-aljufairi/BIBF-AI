import { AppProps } from "next/app";
import Script from "next/script";
import { Geist, JetBrains_Mono } from "next/font/google";
import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { Analytics } from "@vercel/analytics/react";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sans.variable} ${mono.variable} font-sans`}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
      <Script src="https://metrics.aljufairi.org/script.js" data-website-id="52f9f094-7f2d-4e8e-8684-a51eeb8ccb6d" strategy="afterInteractive" />
    </div>
  );
}
