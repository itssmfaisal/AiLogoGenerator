
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface SelectApiKeyProps {
  onApiKeySelected: () => void;
}

const SelectApiKey: React.FC<SelectApiKeyProps> = ({ onApiKeySelected }) => {
  const handleSelectKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      // Optimistically assume the user selected a key and proceed.
      onApiKeySelected();
    } else {
      alert("This feature requires the AI Studio environment.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <div className="flex items-center justify-center space-x-3 mb-6">
            <SparklesIcon className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white tracking-tight">
              AI Logo Artisan
            </h1>
        </div>
        <h2 className="text-2xl font-semibold mb-3">API Key Required</h2>
        <p className="text-gray-300 mb-6">
          To generate logos with the Gemini API, please select an API key. This ensures you have the necessary quota for your project.
        </p>
        <button
          onClick={handleSelectKey}
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
        >
          Select API Key
        </button>
        <p className="text-xs text-gray-500 mt-4">
          Need to set up billing for your key? See the{' '}
          <a
            href="https://ai.google.dev/gemini-api/docs/billing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Gemini API billing docs
          </a>.
        </p>
      </div>
    </div>
  );
};

export default SelectApiKey;
