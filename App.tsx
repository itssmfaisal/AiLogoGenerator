
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LogoGeneratorForm from './components/LogoGeneratorForm';
import LogoDisplay from './components/LogoDisplay';
import { generateLogo } from './services/geminiService';
import SelectApiKey from './components/SelectApiKey';

// FIX: To fix the error "Property 'aistudio' must be of type 'AIStudio'",
// the inline type definition is replaced with a named interface `AIStudio`.
// This resolves the conflict with an existing global declaration.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
  interface Window {
    aistudio: AIStudio;
  }
}

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKeyReady, setApiKeyReady] = useState<boolean>(false);

  useEffect(() => {
    const checkApiKey = async () => {
      if (window.aistudio) {
        try {
          const hasKey = await window.aistudio.hasSelectedApiKey();
          setApiKeyReady(hasKey);
        } catch (e) {
          console.error("Error checking for API key:", e);
          setApiKeyReady(false);
        }
      } else {
        console.warn("aistudio object not found on window. Assuming API key is set via environment.");
        setApiKeyReady(true);
      }
    };
    checkApiKey();
  }, []);

  const handleApiKeySelected = () => {
    setApiKeyReady(true);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateLogo(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("RESOURCE_EXHAUSTED")) {
          setError("API key quota exceeded. Please select a different key via the key icon in the top right, or check your billing details.");
        } else if (err.message.includes("Requested entity was not found")) {
            setError("The selected API key is not valid. Please select a new one.");
            setApiKeyReady(false);
        } else {
            setError(err.message);
        }
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!apiKeyReady) {
    return <SelectApiKey onApiKeySelected={handleApiKeySelected} />;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-8">
          Welcome to the future of logo design. Describe the logo you envision, and our AI will craft it for you in seconds. Be as descriptive as you like for the best results.
        </p>
        <LogoGeneratorForm
          prompt={prompt}
          setPrompt={setPrompt}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        <LogoDisplay
          image={generatedImage}
          isLoading={isLoading}
          error={error}
        />
      </main>
    </div>
  );
};

export default App;