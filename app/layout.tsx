import type { Metadata } from "next";
import "./globals.css";
import { Pinyon_Script } from "next/font/google";

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Aiman & Yasmin Wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pinyon.variable}>
      <body>{children}</body>
    </html>
  );
}