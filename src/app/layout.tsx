// src/app/layout.tsx
import type { Metadata } from "next";
import { Hahmlet } from "next/font/google";
import "./globals.css";

// Configure the Hahmlet font
const hahmlet = Hahmlet({ 
  subsets: ["latin"], 
  variable: "--font-hahmlet" 
});

export const metadata: Metadata = {
  title: "Rashedul Islam Ryne | Frontend Developer",
  description: "Portfolio of Rashedul Islam Ryne, Frontend Developer and EEE Student at UIU.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="light">
      {/* Apply the Hahmlet variable and set it as the default font */}
      <body className={`${hahmlet.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;