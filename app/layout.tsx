import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kicko Tech | Smart Digital Solutions",
  description:
    "Kicko Tech builds premium web, mobile, cloud, and AI-powered digital products for ambitious teams."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
