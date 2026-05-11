import React from 'react';

export const TestimonialCard = () => {
  return (
    <div className="glass-panel rounded-4xl p-4 max-w-[280px]">
      <div className="flex items-center gap-3 mb-3">
        <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border border-white/20" />
        <div>
          <h4 className="text-sm font-medium">Ronnie Hamill</h4>
          <div className="flex text-yellow-500 text-[10px]">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 leading-relaxed">
        I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
      </p>
    </div>
  );
};
