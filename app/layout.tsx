// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

import { Poppins } from "next/font/google";
const inter = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Feedbox Clone",
  description: "Clone of feedbox.co.in using Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>{children}</body>
    </html>
  );
}
