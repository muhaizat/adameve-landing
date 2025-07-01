'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import Heading from './Heading';

const features = [
  'Integrasi mudah',
  'Rekaan minimalis',
  'Prestasi pantas',
];

export default function Features() {
  return (
    <Section>
      <motion.div
        id="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading level={2}>Ciri-ciri Utama</Heading>
        <ul className="grid md:grid-cols-3 gap-6 text-center">
          {features.map((f) => (
            <li
              key={f}
              className="p-4 rounded-lg bg-white/70 backdrop-blur shadow"
            >
              {f}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
