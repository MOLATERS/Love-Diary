
import React from 'react';
import { MemoryPhoto } from '../types';

interface PolaroidProps {
  photo: MemoryPhoto;
  index: number;
}

const Polaroid: React.FC<PolaroidProps> = ({ photo, index }) => {
  const rotations = ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-3'];
  const rotationClass = rotations[index % rotations.length];

  return (
    <div className={`bg-white p-3 pb-8 md:p-4 md:pb-12 shadow-lg inline-block transition-all duration-500 hover:scale-105 active:scale-95 transform ${rotationClass} group cursor-pointer max-w-[90vw] md:max-w-md`}>
      <div className="relative overflow-hidden w-full aspect-square md:aspect-[4/3] bg-gray-100">
        <img 
          src={photo.url} 
          alt={photo.caption} 
          className="object-cover w-full h-full grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-rose-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
      </div>
      <div className="mt-3 md:mt-4 flex flex-col items-center gap-1">
        <p className="font-handwriting text-rose-600 text-lg md:text-xl text-center leading-tight px-2">
          {photo.caption}
        </p>
        <p className="text-gray-400 text-[10px] md:text-xs italic font-serif">{photo.date}</p>
      </div>
    </div>
  );
};

export default Polaroid;
