import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HaHow Recruit Homework",
  description: "This is a website implements homework assigned by Hahow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "rgb(245, 247, 249)" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
