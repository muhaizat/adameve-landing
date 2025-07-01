import React from 'react';

export default function FinalCTA({ title, subtitle, price, whatsappNo, productName }: {
  title: string;
  subtitle: string;
  price: number;
  whatsappNo: string;
  productName: string;
}) {
  const msg = `Hi, saya nak order ${productName}\nNama: [Nama Anda]\nNo Telefon: [Nombor Anda]\nKuantiti: 1`;
  const link = `https://wa.me/${whatsappNo}?text=${encodeURIComponent(msg)}`;

  return (
    <section className="py-24 text-center bg-gradient-to-b from-[#2d4a35] to-black px-4">
      <h2 className="text-4xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-white/80 mb-6">{subtitle}</p>
      <p className="text-xl font-bold text-[#86efac] mb-6">RM {price.toFixed(2)}</p>
      <a
        href={link}
        target="_blank"
        className="inline-block bg-[#2d4a35] hover:bg-[#22543d] text-white px-8 py-3 rounded-full text-base font-medium transition-all"
      >
        Order Sekarang via WhatsApp
      </a>
    </section>
  );
} 