import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Sukaina Pasha - Transformational Coach | Navigate Change, Embrace Growth",
  description:
    "Compassionate transformation coaching for women navigating motherhood, identity crisis, relocation, and life transitions. Book your free discovery call today.",
  keywords:
    "transformation coach, life coach, motherhood transition, identity crisis, relocation support, empty nesting, women's coaching",
    generator: 'v0.dev',
  icons: {
    icon: "/images/butterfly.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
