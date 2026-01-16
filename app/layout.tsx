import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauty Solutions — Where ideas meet excellence",
  description:
    "Beauty Solutions (HK) Limited — sourcing, branding, customization, and production controls for global brands.",
  icons: {
    icon: [
      { url: '/new logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/new logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/new logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/new logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>{children}</body>
    </html>
  );
}

