import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-in-out px-6 py-3 text-sm";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-[0_0_20px_rgba(13,100,255,0.3)] hover:shadow-[0_0_30px_rgba(13,100,255,0.5)]",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm",
    ghost: "text-text-muted hover:text-white bg-transparent hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
