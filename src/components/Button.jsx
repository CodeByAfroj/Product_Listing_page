import React from 'react';

export const Button=({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white/30 text-white hover:bg-white/10",
    ghost: "text-white/70 hover:text-white",
    icon: "p-2 border border-white/20 rounded-full hover:bg-white/10 text-white"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = `${baseStyles} ${variant !== 'icon' ? sizes[size] : ''} ${variants[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
