// FILE: src/components/Hero.tsx
import React from 'react';

export default function Hero({ title, tagline, heroImage }: { title: string; tagline: string; heroImage: string }) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-[#2d4a35] to-[#1a1a1a] px-4">
      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 animate-fade-in-up">{title}</h1>
        <p className="text-xl sm:text-2xl text-[#86efac] mb-3 animate-fade-in-up delay-200">{tagline}</p>
        <p className="text-base text-white/80 mb-6 animate-fade-in-up delay-400">
          Formula revolusioner untuk usus sihat dan kulit bercahaya.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-600">
          <a href="#beli" className="bg-[#2d4a35] hover:bg-[#22543d] text-white px-6 py-3 rounded-full text-base font-medium transition-all">
            Beli
          </a>
          <a href="#specs" className="text-cyan-400 hover:underline text-base font-medium">
            Ketahui lebih lanjut
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-20" />
      </div>
    </section>
  );
}