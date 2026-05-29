import { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Pause, Music, Settings, Radio, Sparkles } from 'lucide-react';

export default function AudioVoiceoverConcept() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVoice, setActiveVoice] = useState(true);
  const [activeMusic, setActiveMusic] = useState(true);
  const [synthWaveform, setSynthWaveform] = useState<number[]>(new Array(25).fill(2));
  const [speechInstance, setSpeechInstance] = useState<SpeechSynthesisUtterance | null>(null);
  const animationRef = useRef<number | null>(null);

  // Initialize browser speech synthesis if supported
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(
        "Dina bilar förtjänar mer än en mörk parkeringsbild. Med AutoGlam AI får varje fordon premiumkänsla, bättre annonser och fler klick."
      );
      utter.lang = "sv-SE";
      utter.rate = 0.95; // Slightly slower for formal corporate voiceover effect
      utter.pitch = 0.9; // Masculine/deeper corporate announcer voice
      
      utter.onend = () => {
        setIsPlaying(false);
      };
      utter.onerror = () => {
        setIsPlaying(false);
      };
      setSpeechInstance(utter);
    }
  }, []);

  // Animate waveform
  useEffect(() => {
    if (isPlaying) {
      const updateWave = () => {
        setSynthWaveform((prev) =>
          prev.map(() => {
            const multiplier = activeMusic ? (activeVoice ? 24 : 12) : 4;
            return Math.floor(Math.random() * multiplier) + 2;
          })
        );
        animationRef.current = requestAnimationFrame(updateWave);
      };
      animationRef.current = requestAnimationFrame(updateWave);
    } else {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setSynthWaveform(new Array(25).fill(2));
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, activeMusic, activeVoice]);

  const togglePlayback = () => {
    if (typeof window === 'undefined') return;
    
    if (isPlaying) {
      // Pause
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      // Play
      setIsPlaying(true);
      if (speechInstance && activeVoice) {
        window.speechSynthesis.cancel(); // Clear any queued speech
        window.speechSynthesis.speak(speechInstance);
      } else {
        // Fallback or purely music, auto-paues after 10s
        setTimeout(() => {
          setIsPlaying(false);
        }, 12000);
      }
    }
  };

  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        
        {/* LEFT AUDIO DETAILS */}
        <div className="space-y-4 max-w-md w-full">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
            <Radio className="w-4 h-4 animate-pulse text-blue-500" />
            Ljud & Voiceover-koncept
          </div>
          <h3 className="text-2xl font-display font-medium text-white leading-tight">
            Premium Reklamslinga
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Dina annonser säljer inte bara med bilder, utan med rätt tempo och röst i sociala flöden. Lyssna och läs manus för vår AI-annonsörsröst:
          </p>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2 relative">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Voiceover-manus (Sv)</span>
            <p className="text-xs text-white italic font-light leading-relaxed select-text">
              "Dina bilar förtjänar mer än en mörk parkeringsbild. Med <span className="text-blue-400 font-medium">AutoGlam AI</span> får varje fordon premiumkänsla, bättre annonser och fler klick."
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-blue-950/40 border border-blue-500/10 text-blue-400">
              Röst: AI-Kompilerad Svenska
            </span>
            <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-orange-950/40 border border-orange-500/10 text-orange-400">
              Tempo: Upptempo snabb (~125 bpm)
            </span>
          </div>
        </div>

        {/* RIGHT INTERACTIVE player deck */}
        <div className="w-full max-w-sm bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between h-72 relative overflow-hidden">
          <div className="absolute top-3 right-3 text-zinc-600">
            <Settings className="w-4 h-4 animate-spin-slow" />
          </div>

          {/* AUDIO VISUALIZER OSCILLOSCOPE */}
          <div className="h-24 bg-zinc-950/80 border border-zinc-850 rounded-xl relative overflow-hidden flex items-center justify-center p-4">
            
            {/* Pulsing signal background */}
            {isPlaying && (
              <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(59,130,246,0.06)_10%,transparent_70%]" />
            )}

            {/* Simulated bouncing frequency bands */}
            <div className="flex items-end gap-1.5 h-16 w-full justify-center">
              {synthWaveform.map((height, idx) => (
                <div 
                  key={idx}
                  className={`w-1 rounded-full transition-all duration-75 ${
                    idx % 2 === 0 
                      ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]' 
                      : 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.3)]'
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            {!isPlaying && (
              <p className="absolute text-zinc-500 text-[10px] font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> KLICKA SPELA FÖR ATT LYSSNA
              </p>
            )}
          </div>

          {/* MIXER TRACK CHANNELS */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setActiveVoice(!activeVoice)}
              className={`py-2 px-3 rounded-xl border text-[11px] font-mono flex items-center gap-2 justify-center cursor-pointer select-none transition-all ${
                activeVoice 
                  ? 'bg-zinc-800 border-blue-500 text-white font-medium' 
                  : 'bg-zinc-950/40 border-zinc-800 text-zinc-500'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5 shrink-0" />
              <span>RÖST: {activeVoice ? 'PÅ' : 'AV'}</span>
            </button>

            <button
              onClick={() => setActiveMusic(!activeMusic)}
              className={`py-2 px-3 rounded-xl border text-[11px] font-mono flex items-center gap-2 justify-center cursor-pointer select-none transition-all ${
                activeMusic 
                  ? 'bg-zinc-800 border-orange-500 text-white font-medium' 
                  : 'bg-zinc-950/40 border-zinc-800 text-zinc-500'
              }`}
            >
              <Music className="w-3.5 h-3.5 shrink-0" />
              <span>MUSIK: {activeMusic ? 'PÅ' : 'AV'}</span>
            </button>
          </div>

          {/* BIG PLAY DECK BUTTON */}
          <button
            onClick={togglePlayback}
            className={`w-full py-3.5 rounded-xl font-bold font-sans text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer ${
              isPlaying 
                ? 'bg-red-500 hover:bg-red-400 text-white' 
                : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-white" />
                <span>PAUSA PROVSLÄPP</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>SPELA LJUDSLINGA (SVENSKA)</span>
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
}
