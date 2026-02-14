
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Stars, Calendar, MessageCircleHeart, Sparkles, Music, Image as ImageIcon, PenTool, ArrowUp } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import Polaroid from './components/Polaroid';
import { INITIAL_PHOTOS, INITIAL_LETTERS, CUSTOM_WHISPERS } from './constants';

const App: React.FC = () => {
  const [photos] = useState(INITIAL_PHOTOS);
  const [letters] = useState(INITIAL_LETTERS);
  const [whisper, setWhisper] = useState<string>(CUSTOM_WHISPERS[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const galleryRef = useRef<HTMLElement>(null);
  const lettersRef = useRef<HTMLElement>(null);

  const getNewWhisper = () => {
    setIsGenerating(true);
    // 模拟一个小小的切换动画延迟
    setTimeout(() => {
      let nextWhisper = whisper;
      while (nextWhisper === whisper && CUSTOM_WHISPERS.length > 1) {
        nextWhisper = CUSTOM_WHISPERS[Math.floor(Math.random() * CUSTOM_WHISPERS.length)];
      }
      setWhisper(nextWhisper);
      setIsGenerating(false);
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen pb-32 selection:bg-rose-200 bg-gradient-to-b from-[#fff5f7] via-[#fff0f3] to-[#ffe4e9]">
      <FloatingHearts />

      {/* Mobile Floating Menu */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-rose-100 px-6 py-3 rounded-full shadow-2xl shadow-rose-200/50 transition-all duration-300">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2 text-rose-400 hover:text-rose-600 transition-colors"
        >
          <Heart size={20} className="fill-current" />
        </button>
        <div className="w-px h-6 bg-rose-100"></div>
        <button 
          onClick={() => scrollTo(galleryRef)}
          className="p-2 text-rose-400 hover:text-rose-600 transition-colors flex flex-col items-center"
        >
          <ImageIcon size={20} />
        </button>
        <button 
          onClick={() => scrollTo(lettersRef)}
          className="p-2 text-rose-400 hover:text-rose-600 transition-colors"
        >
          <PenTool size={20} />
        </button>
        <div className="w-px h-6 bg-rose-100"></div>
        <button className="p-2 text-rose-300 cursor-not-allowed">
          <Music size={20} />
        </button>
      </nav>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 right-6 z-40 p-3 bg-white border border-rose-100 rounded-full shadow-lg text-rose-400 transition-all duration-500 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <ArrowUp size={20} />
      </button>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden no-select">
        <div className="z-10 mb-8">
          <div className="relative inline-block">
             <Heart className="text-rose-500 w-16 h-16 fill-rose-500 animate-pulse-slow drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]" />
             <div className="absolute -top-4 -right-4 animate-bounce">
                <Sparkles className="text-amber-300 w-6 h-6" />
             </div>
          </div>
        </div>
        <h1 className="z-10 text-5xl md:text-8xl font-handwriting text-rose-600 mb-6 drop-shadow-sm">
          My Love
        </h1>
        <p className="z-10 text-lg md:text-2xl text-rose-400/80 mb-10 max-w-xs md:max-w-lg mx-auto leading-relaxed font-serif tracking-wide">
          愿 2026 年的情人节，<br />
          因为有你而变得格外闪亮。
        </p>
        <div className="z-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full px-6 py-2.5 shadow-sm flex items-center gap-2.5">
          <Calendar className="text-rose-400 w-4 h-4" />
          <span className="text-rose-500 font-bold tracking-widest text-sm md:text-base">2026.02.14</span>
        </div>
        
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <p className="text-[10px] text-rose-300 tracking-[0.2em] uppercase font-bold mb-2">Scroll Down</p>
           <div className="w-0.5 h-12 bg-gradient-to-b from-rose-300 to-transparent mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Custom Love Whisper Section */}
      <section className="max-w-lg mx-auto px-6 mb-32 relative z-10">
        <div className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-2xl border border-white/40 shadow-rose-200/30 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-rose-50 rounded-full">
               <MessageCircleHeart className="text-rose-500 w-6 h-6" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-rose-800 mb-6 flex items-center justify-center gap-2">
            2026 写给宝贝的话
          </h2>
          <div className={`min-h-[100px] flex items-center justify-center transition-all duration-700 ${isGenerating ? 'blur-sm opacity-30 scale-95' : 'blur-0 opacity-100 scale-100'}`}>
            <p className="text-rose-600 text-lg md:text-xl font-medium leading-relaxed font-serif">
              “ {whisper} ”
            </p>
          </div>
          <button 
            onClick={getNewWhisper}
            disabled={isGenerating}
            className="mt-10 w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-rose-500/20 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 no-select"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 animate-spin" /> 正在回味...</span>
            ) : (
              <>
                <span>换一个暖心话语</span>
                <Sparkles className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="max-w-6xl mx-auto px-6 mb-40 relative z-10 no-select">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-rose-300 tracking-[0.3em] uppercase mb-2 block">The Gallery</span>
          <h2 className="text-4xl md:text-5xl font-handwriting text-rose-600">Our Shared Moments</h2>
          <div className="w-16 h-0.5 bg-rose-200 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          {photos.map((photo, index) => (
            <Polaroid key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </section>

      {/* Letters Section */}
      <section ref={lettersRef} className="max-w-2xl mx-auto px-6 mb-32 relative z-10">
        <div className="text-center mb-16">
          <Stars className="inline-block text-rose-300 mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-handwriting text-rose-600">Letters of Love</h2>
        </div>
        
        <div className="space-y-16">
          {letters.map((letter) => (
            <div key={letter.id} className="relative bg-white/70 backdrop-blur-sm p-8 md:p-14 rounded-[2rem] shadow-xl border border-white/50 group transition-all duration-500 hover:shadow-rose-100 hover:-translate-y-1">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-rose-50 rounded-2xl rotate-12 flex items-center justify-center text-rose-300 group-hover:rotate-0 transition-transform">
                <PenTool size={20} />
              </div>
              <h3 className="text-2xl font-bold text-rose-700 mb-8 border-b border-rose-100 pb-4 inline-block">{letter.title}</h3>
              <p className="text-gray-700 leading-loose text-lg mb-8 whitespace-pre-wrap font-serif">
                {letter.content}
              </p>
              <div className="flex justify-end text-rose-400 font-handwriting text-2xl italic pr-2">
                {letter.date}
              </div>
              <div className="absolute bottom-6 right-6 text-rose-50/50 pointer-events-none">
                <Heart size={80} className="fill-current" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-20 px-6 opacity-40 no-select">
        <div className="w-12 h-px bg-rose-200 mx-auto mb-6"></div>
        <p className="text-rose-400 font-handwriting text-2xl mb-2">
          Forever & Always
        </p>
        <p className="text-[10px] tracking-[0.2em] text-rose-300 uppercase font-bold">Celebrating Valentine's 2026</p>
      </footer>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default App;
