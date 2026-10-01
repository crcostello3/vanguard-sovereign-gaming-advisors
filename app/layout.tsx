import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanguard Sovereign Gaming Advisors | Casino Management Advisory",
  description:
    "Executive casino management advisory services for tribal, commercial, and international gaming properties.",
  keywords: [
    "casino management consulting",
    "gaming advisory",
    "casino operations",
    "tribal gaming",
    "commercial casino",
    "integrated resort strategy"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}