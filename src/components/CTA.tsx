'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import Heading from './Heading';
import Button from './Button';

export default function CTA() {
  return (
    <Section>
      <motion.div
        id="cta"
        className="text-center space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading level={2}>Sedia untuk bermula?</Heading>
        <Button variant="primary">Daftar Sekarang</Button>
      </motion.div>
    </Section>
  );
}
