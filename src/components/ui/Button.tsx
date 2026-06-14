import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Кнопка (Button component)
 * Поддерживает несколько вариантов внешнего вида и размеров
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/30': variant === 'primary',
            'bg-primary-light text-primary hover:bg-primary/20': variant === 'secondary',
            'border border-border-light bg-transparent hover:bg-surface-hover text-text-primary': variant === 'outline',
            'hover:bg-surface-hover text-text-primary': variant === 'ghost',
            'h-9 px-5 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
