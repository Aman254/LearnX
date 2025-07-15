import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnX",
  description: "Bite-sized expert courses to help you grow, anytime.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className={sora.className} suppressHydrationWarning>
      <SessionProvider session={session}>
        <body>
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
