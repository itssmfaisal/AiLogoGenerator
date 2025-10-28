
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

const Header: React.FC = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4 flex items-center justify-center space-x-3">
        <SparklesIcon className="w-8 h-8 text-blue-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          AI Logo Artisan
        </h1>
      </div>
    </header>
  );
};

export default Header;
