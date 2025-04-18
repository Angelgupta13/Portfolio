import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/shared/View/Header";
import Footer from "@/components/shared/View/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/config/site";
import type { Viewport } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Welcome to Aradhya Shukla's portfolio! I am a passionate full-stack developer and AI enthusiast, specializing in creating scalable, efficient, and user-friendly web applications.",
  category: "portfolio",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "ShadCn",
    "Portfolio",
    "Full-stack Developer",
    "AI Enthusiast",
    "Web Development",
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Aradhya Shukla - Portfolio",
    description:
      "Showcasing projects, skills, and experiences of Aradhya Shukla, a full-stack developer and AI enthusiast.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/social-preview-image.png",
        width: 1200,
        height: 630,
        alt: "Aradhya Shukla Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aradhya Shukla - Portfolio",
    description:
      "Discover the projects, skills, and experiences of Aradhya Shukla, a full-stack developer and AI enthusiast.",
    images: "https://aradhya.site/assets/social-preview-image.png",
    creator: siteConfig.author,
  },
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={`${poppins.className} bg-color relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="wrapper flex-center flex-col content-z-index">
            {children}
            <Analytics />
          </main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
