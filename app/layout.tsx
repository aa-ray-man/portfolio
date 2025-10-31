import type React from "react"
import type { Metadata } from "next"
import { Caveat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aryaman | Developer",
  description: "Portfoliio of an epic coder",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
