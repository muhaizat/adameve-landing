import { ReactNode } from 'react';
import Container from './Container';

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="py-12 md:py-20">
      <Container>{children}</Container>
    </section>
  );
}
