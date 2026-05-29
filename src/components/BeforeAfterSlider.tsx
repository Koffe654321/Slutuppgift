import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-1 select-none shadow-2xl neon-glow-blue">
      {/* Background comparison frame wrapper */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-16/10 md:aspect-16/9 rounded-xl overflow-hidden cursor-ew-resize bg-zinc-900"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* BEFORE CAR IMAGE (REAL MUDDY STREET AT INDUSTRIAL PARK) */}
        <div className="absolute inset-0 w-full h-full bg-zinc-950">
          <img 
            src={beforeImage} 
            alt="Porsche 911 på stökig industri-grusplan" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overcast vignette */}
          <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_60%,rgba(0,0,0,0.35)_100%]" />
          
          {/* Dull bad text badge */}
          <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-md bg-black/75 border border-red-500/20 text-red-400 text-xs font-mono flex items-center gap-1.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            FÖRE: Rörig industrigata & platt grått ljus
          </div>
        </div>

        {/* AFTER CAR IMAGE (EXQUISITE SHOWROOM) - CLIPPED */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          {/* Beautiful vivid original AI Showroom graphic */}
          <img 
            src={afterImage} 
            alt="Porsche 911 i exklusivt AI Studio Showroom" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
            referrerPolicy="no-referrer"
          />
          
          {/* Premium lighting reflections / highlights */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/5 mix-blend-color-dodge pointer-events-none" />

          {/* Premium success badge */}
          <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-md bg-blue-950/90 border border-blue-500/40 text-blue-400 text-xs font-mono flex items-center gap-1.5 shadow-md text-glow-blue">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            EFTER: AutoGlam AI Virtual Showroom
          </div>
        </div>

        {/* DRAGGABLE SLIDER BAR */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-white to-orange-500 cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider button handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-900 border-2 border-white text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-150">
            <div className="flex flex-col gap-0.5 items-center">
              <span className="text-[10px] uppercase tracking-widest font-bold leading-none select-none text-zinc-400">Drag</span>
              <div className="flex gap-1 text-zinc-300">
                <span>◀</span>
                <span>▶</span>
              </div>
            </div>
          </div>
          
          {/* Vertical line accents */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 animate-ping opacity-25" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 animate-ping opacity-25" />
        </div>
      </div>
      
      {/* Visual Cue Description Helper */}
      <div className="p-3 text-center bg-zinc-900/40 rounded-b-xl border-t border-zinc-900">
        <p className="text-zinc-400 text-sm font-sans flex items-center justify-center gap-2">
          <ImageIcon className="w-4 h-4 text-zinc-500" />
          <span>Dra i reglaget för att se före/efter-förvandlingen på en <strong>Porsche 911 Coupe</strong></span>
        </p>
      </div>
    </div>
  );
}
