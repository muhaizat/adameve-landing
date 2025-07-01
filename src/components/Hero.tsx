import { motion } from 'framer-motion';
import Button from './Button';
import Heading from './Heading';
import Section from './Section';

export default function Hero() {
  return (
    <Section>
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading level={1}>AdamEve</Heading>
        <p className="text-xl text-gray-600">
          Solusi teknologi pintar untuk perniagaan moden.
        </p>
        <Button variant="primary">Mulakan Sekarang</Button>
      </motion.div>
    </Section>
  );
}
