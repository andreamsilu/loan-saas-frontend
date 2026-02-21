import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoanSaaS Pro",
  description: "Modern multi-tenant lending operations platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background-light text-foreground">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background-light font-sans text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
