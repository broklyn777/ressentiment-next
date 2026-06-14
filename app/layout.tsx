import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Nietzsche och ressentiment",
  description:
    "En svensk introduktion till Friedrich Nietzsches begrepp ressentiment, med artiklar, begreppskarta och MDX-blogg."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="min-h-screen font-sans antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
