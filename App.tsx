
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import ImageDisplay from './components/ImageDisplay';
import Footer from './components/Footer';
import { generateGhibliImage } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [displayPrompt, setDisplayPrompt] = useState<string>('');

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);
    setDisplayPrompt(prompt);

    try {
      const generatedImageUrl = await generateGhibliImage(prompt);
      setImageUrl(generatedImageUrl);
    } catch (err) {
      console.error(err);
      setError('The forest spirits are busy. Please try again in a moment.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-ghibli-dark bg-gradient-to-br from-ghibli-cream via-ghibli-green to-ghibli-blue">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl shadow-ghibli-dark/20">
          <PromptInput
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />
          <ImageDisplay
            imageUrl={imageUrl}
            isLoading={isLoading}
            error={error}
            prompt={displayPrompt}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
