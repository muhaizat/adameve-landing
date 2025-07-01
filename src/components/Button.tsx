import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-md font-medium transition-colors',
        variant === 'primary'
          ? 'bg-black text-white hover:bg-neutral-800'
          : 'bg-white text-black hover:bg-neutral-200',
        className
      )}
      {...props}
    />
  );
}
