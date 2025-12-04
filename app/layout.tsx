import "../styles/index.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"

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
      </body>
    </html>
  )
}
