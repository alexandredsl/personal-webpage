import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexandre | Developer Portfolio",
  description: "Full-stack developer portfolio — navigating the streams of time, one commit at a time. Inspired by Chrono Trigger.",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "typescript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
