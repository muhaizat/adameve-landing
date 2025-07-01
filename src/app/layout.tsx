import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import SEOHead from '../components/SEOHead';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'AdamEve - Simply Complements',
  description: 'Solusi teknologi pintar untuk perniagaan moden',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ms" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <SEOHead />
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
