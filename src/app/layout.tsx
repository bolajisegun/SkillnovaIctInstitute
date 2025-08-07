import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skillnova e-Learn",
  description:
    "Skillnova’s all-in-one learning platform empowers students to study any course of their choice — from secondary school subjects to ICT, entrepreneurship, business, and more. Whether you're preparing for exams or building job-ready skills, access expert-led virtual classes through our in-app video learning system. Learn anytime, anywhere, and gain practical knowledge from real instructors to succeed in today’s digital world.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
