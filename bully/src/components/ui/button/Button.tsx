// components/ui/Button/Button.tsx
import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'outline',
  className = '',
  onClick,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
