import type { Metadata } from "next";
import { Old_Standard_TT } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const oldStandardTT = Old_Standard_TT ({
  variable: "--font-old-standard-tt",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="pt-BR">
      <body className={`${oldStandardTT}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
