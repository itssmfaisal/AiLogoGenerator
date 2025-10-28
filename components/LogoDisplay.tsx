
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface LogoDisplayProps {
  image: string | null;
  isLoading: boolean;
  error: string | null;
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ image, isLoading, error }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="aspect-square bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center overflow-hidden transition-all">
        {isLoading && (
          <div className="text-center text-gray-400">
            <svg className="animate-spin mx-auto h-12 w-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-4 font-semibold">Creating your masterpiece...</p>
            <p className="text-sm">This may take a moment.</p>
          </div>
        )}

        {!isLoading && error && (
          <div className="p-4 text-center text-red-400">
            <h3 className="font-bold">An error occurred</h3>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {!isLoading && !error && image && (
          <img src={image} alt="Generated logo" className="object-contain w-full h-full p-4" />
        )}

        {!isLoading && !error && !image && (
          <div className="text-center text-gray-500 p-8">
            <SparklesIcon className="w-16 h-16 mx-auto" />
            <h2 className="mt-4 text-xl font-semibold text-gray-300">Your logo will appear here</h2>
            <p className="mt-1">Describe your vision above and click "Generate"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoDisplay;
