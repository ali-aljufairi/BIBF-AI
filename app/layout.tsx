import "../styles/index.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Personal Blog & Tech Notes",
  description: "A personal blog about AWS ML, Cloud Computing, and Tech Insights",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://metrics.aljufairi.org/script.js" data-website-id="52f9f094-7f2d-4e8e-8684-a51eeb8ccb6d" strategy="afterInteractive" />
      </body>
    </html>
  )
}
