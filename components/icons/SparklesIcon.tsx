
import React from 'react';

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6-10A2 2 0 0 0 4.063 2.5l10 6A2 2 0 0 0 15.5 9.937" />
    <path d="M14 6L9 11" />
    <path d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
  </svg>
);
