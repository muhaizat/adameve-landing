import { ReactNode } from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

export default function Heading({ level = 1, children }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className="font-semibold text-gray-900 mb-4 md:mb-6 text-center">
      {children}
    </Tag>
  );
}
