import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";


const safira = localFont({ src: '../fonts/safira-march.otf' })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oindrila",
  description: "Portfolio",
  icons: {
    icon: [
      {
          url: "/asset/favicon.png", // /public path
          href: "/asset/favicon.png", // /public path
      },
  ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${safira.className} ${safira.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
