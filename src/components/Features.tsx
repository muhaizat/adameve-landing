'use client';
import React from 'react';

interface FeatureItem {
  icon: string;
  text: string;
}

export default function Features({ items }: { items: FeatureItem[] }) {
  return (
    <section id="manfaat" className="py-20 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-4 text-[#86efac]">Manfaat Utama</h2>
        <p className="text-white/80 text-lg">Kesihatan holistik dalam setiap kapsul.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#2d4a35]/30 border border-[#86efac]/30 rounded-xl p-6 text-center hover:shadow-xl transition-all"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg text-[#86efac] font-semibold mb-2">{item.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
