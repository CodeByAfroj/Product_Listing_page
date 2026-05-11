import React from 'react';

export const SectionTitle= ({ children }) => {
  return (
    <div className="flex justify-center mb-16 relative">
      <div className="relative inline-block">
        <h2 className="text-3xl md:text-4xl font-bold relative z-10 px-6 py-2">{children}</h2>
        <div className="absolute inset-0 border border-yellow-500/40 rounded-lg -z-0"></div>
        <div className="absolute inset-0 border border-yellow-500/20 rounded-lg scale-105 blur-sm -z-0"></div>
      </div>
    </div>
  );
};
