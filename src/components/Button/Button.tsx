import styles from './Button.module.scss';
import { clsx } from 'clsx';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  size: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

export function Button({
  label,
  onClick,
  size,
  variant = 'primary',
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.btn, {
        [styles[size]]: true,
        [styles[variant]]: true,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
