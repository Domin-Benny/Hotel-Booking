import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import "./assets/fonts.css";

export const metadata: Metadata = {
  title: "Evita Hotel",
  description: "Hotel Booking App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased scroll-smooth overflow-x-hidden w-screen h-screen `}
      >
        {children}
      </body>
    </html>
  );
}
