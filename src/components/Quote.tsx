import React from 'react';

export default function Quote({ text, author }: { text: string; author: string }) {
  return (
    <section className="py-20 bg-black text-center px-4">
      <blockquote className="text-3xl sm:text-4xl italic font-semibold text-white max-w-3xl mx-auto mb-4">
        “{text}”
      </blockquote>
      <cite className="text-[#86efac] text-base">{author}</cite>
    </section>
  );
} 