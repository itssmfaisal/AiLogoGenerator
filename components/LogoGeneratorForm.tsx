
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface LogoGeneratorFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const LogoGeneratorForm: React.FC<LogoGeneratorFormProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const examplePrompts = [
    "A minimalist phoenix rising from ashes, geometric style",
    "A playful fox mascot for a tech startup called 'CleverFox'",
    "An elegant letter 'S' intertwined with a leaf for a spa",
    "A retro robot head for a gaming channel"
  ];

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={onSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your logo... e.g., 'A majestic lion head logo in a shield, esports style'"
          className="w-full h-28 p-4 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <SparklesIcon className="w-5 h-5 mr-2" />
              Generate Logo
            </>
          )}
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-400 mb-2">Or try an example:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {examplePrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handleExampleClick(p)}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGeneratorForm;
