import React from "react";
import { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
