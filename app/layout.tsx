import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suleiman Ali - Full Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, Python, and Django. Building scalable web applications with focus on user experience.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Python", "Django", "Web Development", "Kenya"],
  authors: [{ name: "Suleiman Ali" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: '/S.A.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
