'use-client'
import React from "react";
import { Metadata } from "next";
import "./globals.css";
import Header from "./components/atoms/header/Header";
import AppTemplate from "./components/templates/App";

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
      <body>
        <AppTemplate children={children}/>
      </body>
    </html>
  );
}
