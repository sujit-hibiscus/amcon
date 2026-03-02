import type { Metadata, Viewport } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "AMCON Castings - Premier Quality Investment Casting Manufacturer",
  description: "Leading investment casting manufacturer providing high-quality castings for industrial pumps, food & pharma, valves, automotive, agriculture, and instrumentation industries.",
  keywords: "investment casting, metal casting, industrial manufacturing, castings manufacturer",
  openGraph: {
    title: "AMCON Castings - Premier Quality Investment Casting Manufacturer",
    description: "Leading investment casting manufacturer providing high-quality castings for various industries.",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f36421",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
