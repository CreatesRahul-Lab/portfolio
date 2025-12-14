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
  title: "Rahul Arora - Fullstack Developer",
  description:
    "Fullstack Developer specializing in modern web technologies. Explore my portfolio showcasing innovative projects and expertise in frontend and backend development.",
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
    title: "Rahul Arora - Fullstack Developer",
    description:
      "Fullstack Developer specializing in modern web technologies. Explore my portfolio showcasing innovative projects and expertise in frontend and backend development.",
    type: "website",
    url: "https://www.iam-rahularora.me/",
    siteName: "Rahul Arora",
    locale: "en_US",
    images: [
      {
        url: "https://www.iam-rahularora.me/og-image.png",
        width: 1366,
        height: 768,
        alt: "Rahul Arora - Fullstack Developer",
      },
    ],
  },
  twitter: {
    title: "Rahul Arora - Fullstack Developer",
    description:
      "Fullstack Developer specializing in modern web technologies. Explore my portfolio showcasing innovative projects and expertise in frontend and backend development.",
    card: "summary_large_image",
    site: "@CreatesRahul",
    creator: "@CreatesRahul",
    images: [
      {
        url: "https://www.iam-rahularora.me/og-image.png",
        width: 1366,
        height: 768,
        alt: "Rahul Arora - Fullstack Developer",
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
