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
  title: "sogd.digital — разработка сайтов в Худжанде",
  description:
    "sogd.digital — веб-студия полного цикла по разработке сайтов. Лендинги, корпоративные сайты, веб-приложения и интернет-магазины — современно, быстро, под ключ.",
  openGraph: {
    title: "sogd.digital — разработка сайтов в Худжанде",
    description:
      "Веб-студия полного цикла: лендинги, корпоративные сайты, веб-приложения и интернет-магазины. Современно, быстро, под ключ.",
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
  themeColor: "#0B1020",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        {children}
      </body>
    </html>
  );
}
