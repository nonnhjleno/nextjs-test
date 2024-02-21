import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CounterProvider } from "./context/CounterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CounterProvider>{children}</CounterProvider>
        <div>
          <ul>
            <li>
              <Link href="/" className="underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/users" className="underline">
                Users
              </Link>
            </li>
          </ul>
        </div>
        <div>{team}</div>
        <div>{analytics}</div>
      </body>
    </html>
  );
}
