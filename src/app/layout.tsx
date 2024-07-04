import type { Metadata } from "next";
import { Inter } from "next/font/google";

import type { Params } from "./types";
import Providers from "./Providers";
import "./global.css";

import HeroList from "@/modules/hero/components/HeroList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HaHow Recruit Homework",
  description: "This is a website implements homework assigned by Hahow.",
};

export default function RootLayout({
  params,
  children,
}: Readonly<{
  params: Params;
  children: React.ReactNode;
}>) {
  const heroesId = params.heroesId;

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "rgb(245, 247, 249)" }}
      >
        <Providers>
          <HeroList currentId={heroesId} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
