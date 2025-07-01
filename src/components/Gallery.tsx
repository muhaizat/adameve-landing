import React from 'react';

export default function Gallery({ images }: { images: string[] }) {
  return (
    <section className="py-20 bg-black">
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </section>
  );
} 