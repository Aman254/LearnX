import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnX",
  description: "Bite-sized expert courses to help you grow, anytime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.className}>
      <body>{children}</body>
    </html>
  );
}
