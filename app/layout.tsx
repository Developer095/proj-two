import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whatever",
  description: "A freakin Stack Overflow Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#020817] text-[#f8fafc] antialiased dark:bg-[#dce4c9]",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
