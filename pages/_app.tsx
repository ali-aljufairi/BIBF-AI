import { AppProps } from "next/app";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { Analytics } from "@vercel/analytics/react";

// Archivo's width axis gives the wide, heavy headlines.
const display = Archivo({ subsets: ["latin"], variable: "--font-display", axes: ["wdth"] });
const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
