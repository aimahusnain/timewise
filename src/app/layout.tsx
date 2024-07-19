import { cn } from "@/lib/utils";
import NextThemeProvider from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/next-auth-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeWise",
  description: "Let's manage your tasks!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-white dark:bg-black")}>
        <NextThemeProvider>
        <Toaster />
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
