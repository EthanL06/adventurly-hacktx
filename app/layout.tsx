import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Background from "@/components/ui/background";

const pressStart2P = Press_Start_2P({
  weight: "400",
  preload: true,
  display: "swap",
  subsets: ["latin"],
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
        className={`${pressStart2P.className} relative bg-[#FFE9D9] antialiased`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}