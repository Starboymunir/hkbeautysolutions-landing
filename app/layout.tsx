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
  icons: [
    { rel: "icon", url: "/new logo.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/new logo.png" },
  ],
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

