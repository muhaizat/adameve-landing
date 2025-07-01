'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from './Container';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 backdrop-blur border-b border-neutral-200 transition-colors ${scrolled ? 'bg-white/70' : 'bg-white/30'}`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold">
            AdamEve
          </Link>
          <nav className="space-x-4">
            <Link href="#features" className="hover:underline">
              Features
            </Link>
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#cta" className="hover:underline">
              Get Started
            </Link>
          </nav>
        </div>
      </Container>
    </div>
  );
}
