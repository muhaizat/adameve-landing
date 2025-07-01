import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <main className="bg-[#1a1a1a] text-[#f5f5f7]">
      <Hero
        title="Post-Biotic + 8"
        tagline="Kesihatan menyeluruh. Kecantikan dari dalam."
        heroImage="/images/products/postbiotic8.jpg" // Gantikan dengan path sebenar jika ada
      />
      <Features
        items={[
          { icon: '🌿', text: 'Usus Sihat' },
          { icon: '✨', text: 'Kulit Bercahaya' },
          { icon: '🛡️', text: 'Imuniti Kuat' },
          { icon: '⚡', text: 'Tenaga Berterusan' },
        ]}
      />
      <Gallery
        images={[
          '/images/products/postbiotic8-1.jpg',
          '/images/products/postbiotic8-2.jpg',
          '/images/products/postbiotic8-3.jpg',
        ]}
      />
      <Quote
        text="Perubahan yang saya rasai dalam 30 hari pertama sungguh luar biasa. Sistem pencernaan lebih baik, kulit lebih cerah."
        author="— Dr. Siti Aminah, KL"
      />
      <FinalCTA
        title="Mulakan transformasi anda hari ini."
        subtitle="Rasai perbezaan Post-Biotic + 8 untuk kesihatan dan kecantikan holistik."
        price={129.00}
        whatsappNo="601154054882"
        productName="Post-Biotic + 8"
      />
    </main>
  );
}