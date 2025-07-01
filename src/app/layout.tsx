import '../styles/globals.css';
import { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'ADAMËVE - Simply Complements | Supplement Premium Malaysia',
  description: 'ADAMËVE menawarkan supplement premium untuk detox, post-biotics, dan skin brightening. Bantu lancarkan pengkumuhan secara natural dan cerahkan kulit anda.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ms" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}