'use client';

import React from 'react';

export const shimmerCss = `
  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes shimmer-spin {
    to {
      --angle: 360deg;
    }
  }
`;

export const shimmerStyle = {
  background: 'conic-gradient(from var(--angle), transparent 25%, #42a5f5, transparent 80%)',
  animation: 'shimmer-spin 2s linear infinite',
};

export default function ShimmerWrapper({ children, className = '' }) {
  return (
    <div className={`relative p-[2px]  overflow-hidden ${className}`}>
      <style>{shimmerCss}</style>
      {/* Shimmer border */}
      <div className="absolute inset-0 z-0 " style={shimmerStyle}></div>

      {/* Inner content with solid background */}
      <div className="relative z-10 bg-white dark:bg-gray-900 rounded-full ">
        {children}
      </div>
    </div>
  );
}
