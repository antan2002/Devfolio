import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Antan Roy — Full stack Engineer",
  description:
    "Full Stack Developer and Embedded Engineer, working at cnkbharat. 3rd year Computer Science student, excelling in web development",
  generator: "Next.js",
  applicationName: "portfolio",
  keywords: [
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Antan Roy — Full Stack Engineer",
    description:
      "Full Stack Developer and Embedded Engineer, working at cnkbharat. 3rd year Computer Science student, excelling in web development",
    url: "",
    siteName: "",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Antan Roy — Full stack Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antan Roy — Full stack Engineer",
    description:
      "",
    creator: "Antan",
    creatorId: "12437209778685457",
    images: ["/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#d6d8df] scrollbar-thumb-[#5e80e6]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
