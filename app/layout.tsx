import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { CustomCursor } from "@/components/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Rahul Arora",
  description:
    "Portfolio of Rahul Arora - Software Developer specializing in modern web technologies",
  keywords: [
    "Rahul Arora",
    "Rahul",
    "Arora",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Portfolio of Rahul Arora",
    description:
      "Portfolio of Rahul Arora - Software Developer specializing in modern web technologies",
    type: "website",
    url: "https://www.iam-rahularora.me/",
    siteName: "Rahul Arora",
    locale: "en_US",
    images: [
      {
        url: "https://www.iam-rahularora.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Arora - Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Rahul Arora - Full Stack Developer",
    description:
      "Portfolio of Rahul Arora - Software Developer specializing in modern web technologies",
    card: "summary_large_image",
    site: "@CreatesRahul",
    creator: "@CreatesRahul",
    images: [
      {
        url: "https://www.iam-rahularora.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Arora - Full Stack Developer",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <CustomCursor />
            {children}
            <Analytics />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
