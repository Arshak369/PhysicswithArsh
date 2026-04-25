import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      outline: "border-2 border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900",
      ghost: "bg-transparent hover:bg-slate-100 text-slate-700",
      accent: "bg-accent-500 text-white hover:bg-accent-600 shadow-sm",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg font-semibold",
      icon: "h-11 w-11",
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
