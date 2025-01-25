import type { Metadata } from "next";
import "./globals.css";
import LayoutProvider from "@common/LayoutProvider";
import { suit, suite } from "./font";

export const metadata: Metadata = {
  title: "Cupfee Deal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${suite.variable} ${suit.variable}`}>
      <body className="h-[100svh] max-w-[440px] mx-auto bg-white">
        <LayoutProvider />
        {children}
      </body>
    </html>
  );
}
