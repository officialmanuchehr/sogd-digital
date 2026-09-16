import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://sogd.digital";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "sogd.digital — разработка сайтов и AI-автоматизация в Худжанде",
  description:
    "Веб-студия sogd.digital в Худжанде: разработка сайтов и AI-автоматизация под ключ. Лендинги, корпоративные сайты, веб-приложения, интернет-магазины и чат-боты для бизнеса в Таджикистане — быстро, чётко, с фокусом на результат.",
  openGraph: {
    title: "sogd.digital — разработка сайтов и AI-автоматизация в Худжанде",
    description:
      "Разработка сайтов и AI-автоматизация в Худжанде: лендинги, корпоративные сайты, веб-приложения, интернет-магазины, чат-боты. Таджикистан — быстро и по делу.",
    url: siteUrl,
    siteName: "sogd.digital",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
