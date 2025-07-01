import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-5xl px-4 md:px-8">{children}</div>;
}
