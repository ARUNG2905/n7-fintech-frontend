import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  // Base styles matching Figma auto-layout button properties exactly
  const baseStyles = "inline-flex items-center justify-center h-[49px] px-[51px] font-mono text-[15px] uppercase transition-all duration-300 rounded-[10px] whitespace-nowrap";
  
  const variants = {
    primary: "bg-primary-gradient text-white hover:opacity-90 shadow-[0_4px_14px_0_rgba(0,180,253,0.39)]",
    secondary: "bg-white text-background hover:bg-gray-100",
    ghost: "border border-[#E9F4F9] text-[#E9F4F9] hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
