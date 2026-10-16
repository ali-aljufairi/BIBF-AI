import { AppProps } from "next/app";
import { Bricolage_Grotesque, Geist, JetBrains_Mono } from "next/font/google";
import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { Analytics } from "@vercel/analytics/react";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});
const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
