
import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 110,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 5 + 10,
      delay: Math.random() * 10
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-rose-300 opacity-40 animate-float"
          style={{
            left: `${heart.x}%`,
            bottom: `-20px`,
            fontSize: `${heart.size}px`,
            animation: `floatUp ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
