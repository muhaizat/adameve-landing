'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import Heading from './Heading';

export default function About() {
  return (
    <Section>
      <motion.div
        id="about"
        className="space-y-4 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading level={2}>Tentang Kami</Heading>
        <p>
          AdamEve komited membina solusi berteknologi tinggi yang memudahkan
          perniagaan berkembang.
        </p>
      </motion.div>
    </Section>
  );
}
