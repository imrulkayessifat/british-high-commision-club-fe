import type { Metadata } from "next";
import { Inter, Lexend } from 'next/font/google';

import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import SheetProvider from "@/providers/sheet-provider";
import DialogProvider from "@/providers/dialog-provider";
import { Toaster } from "@/components/ui/sonner"


const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lexend',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',

});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className}${inter.className} antialiased`}
      >
        <QueryProvider>
          <SheetProvider />
          <DialogProvider />
          {children}
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
