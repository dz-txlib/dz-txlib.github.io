import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// src/app/layout.js

export const metadata = {
  title: "Mohammad Talib Uddin - Software Engineer",
  description: "Portfolio of Mohammad Talib Uddin, a Software Engineer specializing in backend development with Java (Spring Boot) and Python (Django REST Framework).",
  keywords: "Mohammad Talib Uddin, Talib Uddin, Talib, Software Developer, Software Engineer, Backend Developer, Java, Spring Boot, Python, Django, RESTful APIs, AWS, Portfolio,",
  author: "Mohammad Talib Uddin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
