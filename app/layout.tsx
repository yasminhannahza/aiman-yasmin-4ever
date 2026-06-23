import "./globals.css";
import { Pinyon_Script } from "next/font/google";
import { LangProvider } from "@/context/LangContext";

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pinyon.variable}>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}