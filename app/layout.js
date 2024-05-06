import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onyx",
  description: "World-class experiences from the comfort of your own home",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          rel="icon"
          href="/icon.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
