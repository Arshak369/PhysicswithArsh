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
    
    const baseStyles = "inline-flex items-center justify-center font-black uppercase text-sm tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0B] disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[#3E63DD] text-white shadow-[4px_4px_0px_0px_#FFFFFF] hover:shadow-none hover:translate-x-1 hover:translate-y-1 rounded-none",
      secondary: "bg-white text-black hover:bg-[#3E63DD] hover:text-white rounded-none",
      outline: "border border-white/20 bg-transparent hover:bg-white text-white hover:text-black rounded-none",
      ghost: "bg-transparent text-white/60 hover:text-white rounded-none",
      accent: "bg-[#3E63DD] text-white shadow-[4px_4px_0px_0px_#FFFFFF] hover:shadow-none hover:translate-x-1 hover:translate-y-1 rounded-none",
    };

    const sizes = {
      sm: "h-9 px-6 text-xs",
      md: "h-12 px-8",
      lg: "h-14 px-10 text-base",
      icon: "h-12 w-12",
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
