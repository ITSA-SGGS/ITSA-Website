import { useEffect, useState } from 'react';

const greetings = [
  { text: 'Hello' },
  { text: 'नमस्ते' },
  { text: 'Hola' },
  { text: 'Bonjour' },
  { text: 'こんにちは' },
];

export default function Preloader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 500);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-mono text-green-500 mb-2 animate-pulse">
          {greetings[currentIndex].text}
        </h1>
        <div className="mt-4">
          <div className="w-64 h-2 bg-gray-800 rounded-full">
            <div className="w-full h-full bg-green-500 rounded-full animate-loading"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
