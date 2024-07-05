import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { colors } from '@/modules/app/constants/theme';
import HeroList from '@/modules/hero/components/HeroList';

import Providers from './Providers';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HaHow Recruit Homework',
  description: 'This is a website implements homework assigned by Hahow.',
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
        style={{ backgroundColor: colors.background }}
      >
        <Providers>
          <HeroList />
          {children}
        </Providers>
      </body>
    </html>
  );
}
