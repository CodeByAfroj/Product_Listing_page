import React from 'react';

export const SectionTitle= ({ children }) => {
  return (
    <div className="flex justify-center mb-16 relative">
      <div className="relative inline-block">
        <h2 className="text-3xl md:text-4xl font-bold relative z-10 p-2">{children}</h2>
        <div className="absolute top-0 left-0  w-10 h-10 border-t border-l border-yellow-500 rounded-tl-lg"></div>
        <div className="absolute bottom-0 right-0  w-10 h-10 border-b border-r border-yellow-500 rounded-br-lg"></div>
      </div>
    </div>
  );
};
