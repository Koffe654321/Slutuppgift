import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Film, Music, Volume2, Sparkles, UserCheck } from 'lucide-react';

interface InteractiveVideoConceptProps {
  showroomImg: string;
  beforeImg: string;
  wheelImg: string;
  rearImg: string;
}

export default function InteractiveVideoConcept({ 
  showroomImg, 
  beforeImg, 
  wheelImg, 
  rearImg 
}: InteractiveVideoConceptProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // in seconds, max 30
  const [activeVoiceover, setActiveVoiceover] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 30) {
            setIsPlaying(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 30; // Stop at end
          }
          return Number((prev + 0.1).toFixed(1));
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    setCurrentTime(Number((percentage * 30).toFixed(1)));
  };

  const resetVideo = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Determine active scene based on current time
  const getSceneInfo = (time: number) => {
    if (time >= 0 && time < 5) {
      return {
        id: 1,
        timeRange: "0 - 5 sekunder",
        title: "Introskapande: Problemet",
        visual: "En tråkig, oredigerad mobilbild på en Porsche 911 parkerad på en tom gata i ett rörigt industriområde.",
        textOverlay: "Tappar dina annonser klick?",
        voiceover: "Dina premiumbilar förtjänar mer än en mörk och platt bild i ett industriområde.",
        activeImg: beforeImg,
        imageEffect: "scale-100 saturate-[0.9] brightness-[0.95]",
        audioStatus: "Dramatiskt låg bas, tickande klockljud"
      };
    } else if (time >= 5 && time < 12) {
      return {
        id: 2,
        timeRange: "5 - 12 sekunder",
        title: "Förvandlingen: AI Studio",
        visual: "Den röriga industribakgrunden försvinner gradvis i en digital ljussvep. Bilen flyttas in i ett bländande och färgstarkt virtuellt showroom.",
        textOverlay: "Virtuellt showroom på sekunder",
        voiceover: "AutoGlam AI väver direkt in bilen i ett lyxigt, skräddarsytt showroom med perfekt ljussättning.",
        activeImg: showroomImg,
        imageEffect: "animate-slow-zoom scale-105 duration-[7000ms] transition-all ease-out",
        audioStatus: "Energisk upptempo synth-slinga tar fart"
      };
    } else if (time >= 12 && time < 18) {
      return {
        id: 3,
        timeRange: "12 - 18 sekunder",
        title: "Närvinkel: Gnistrande fälgar",
        visual: "Cinematisk detaljkameravinkel. En mjuk uppåtgående rörelse fokuserar på de exklusivt slipade fälgarna och sportbromsoken.",
        textOverlay: "Blickfångande detaljer & gnistrande fälgar",
        voiceover: "Vår AI genererar knivskarpa närbilder på säljande detaljer, fälgar och lyxiga material.",
        activeImg: wheelImg,
        imageEffect: "animate-subtle-up scale-110 origin-bottom duration-[6000ms] transition-transform ease-out",
        audioStatus: "Fyllig, djupt elektronisk techno-beat med modern basgång"
      };
    } else if (time >= 18 && time < 25) {
      return {
        id: 4,
        timeRange: "18 - 25 sekunder",
        title: "Bakvinkel: Sportig profil med lätt zoom",
        visual: "Kameran klipper till bilens bakdel. En långsam, mjuk zoom-in framhäver den aktiva spoilern och den glödande röda LED-ljusrampen.",
        textOverlay: "Skapa köpsug med dynamiska zoom-effekter",
        voiceover: "Den lilla mjuka zoomen på bilens sportiga bakända håller tittaren engagerad och ökar klickfrekvensen med över 74%.",
        activeImg: rearImg,
        imageEffect: "transition-all duration-[7000ms] scale-[1.03] hover:scale-108 animate-zoom-in-light ease-in-out",
        audioStatus: "Melodier och beats samspelar i ett lyxigt outro-crescendo"
      };
    } else {
      return {
        id: 5,
        timeRange: "25 - 30 sekunder",
        title: "Outro & Call To Action",
        visual: "Grafik och texttoning i lyxiga metalliska och neonfärgade toner som avslutar promovideon.",
        textOverlay: "AutoGlam AI — Gör som Anderssons Bil AB",
        voiceover: "Modernisera dina bilannonser och sälj snabbare redan idag. Besök AutoGlam.ai och boka demo.",
        activeImg: "",
        imageEffect: "brightness-[0.1] scale-95 transition-all duration-1000",
        audioStatus: "Ljudet tonar ut med en ljus, luftig eko-synt"
      };
    }
  };

  const scene = getSceneInfo(currentTime);

  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Header info */}
      <div className="flex items-center justify-between mb-8 border-b border-zinc-900 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-orange-600/10 text-orange-400 border border-orange-500/20">
            <Film className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-display font-medium text-white">
              Svenskt Videokoncept 30s
            </h3>
            <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
              Interaktiv Storyboard-förhandsvisning
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-zinc-400 text-xs hidden sm:inline-block font-mono">Status:</span>
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${
            currentTime >= 30 
              ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400' 
              : isPlaying 
              ? 'bg-blue-950/40 border-blue-500/30 text-blue-400 animate-pulse' 
              : 'bg-zinc-900 border-zinc-800 text-zinc-400'
          }`}>
            {currentTime >= 30 ? 'KLAR' : isPlaying ? 'SPELAR' : 'PAUSAD'}
          </span>
        </div>
      </div>

      {/* Main interactive viewport & controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* WIDESCREEN SIMULATED VIDEO VIEWER */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4">
          <div className="relative aspect-16/9 w-full bg-black rounded-lg overflow-hidden border border-zinc-950 flex items-center justify-center group">
            
            {/* Video content display frame */}
            {scene.activeImg ? (
              <img 
                src={scene.activeImg} 
                alt="Storyboard fiktiv förhandsvy" 
                className={`w-full h-full object-cover select-none transition-all duration-300 ${scene.imageEffect}`}
                referrerPolicy="no-referrer"
              />
            ) : (
              // Outro Frame
              <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center p-6 text-center select-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-blue-500/30 mb-4 animate-bounce">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-xs text-blue-400 font-mono">BOKA EN DEMO</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-blue-400 via-white to-orange-500 bg-clip-text text-transparent">
                  AutoGlam AI
                </h4>
                <p className="text-zinc-500 text-[11px] font-mono mt-2">
                  WWW.AUTOGLAM.AI — EN DEL AV ANDERSSONS BIL AB CASE
                </p>
              </div>
            )}

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* TOP BAR OVERLAYS inside video viewport */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded bg-black/75 border border-zinc-800 text-[10px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>AI_PROMO_RENDER_911.MP4</span>
            </div>

            <div className="absolute top-3 right-3 text-glow-blue text-[11px] font-mono text-blue-400 font-bold bg-black/60 px-2 py-1 rounded">
              {currentTime.toFixed(1)}s / 30.0s
            </div>

            {/* BIG CENTER PLAY BUTTON WHEN PAUSED */}
            {!isPlaying && currentTime < 30 && (
              <button 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xs text-white flex items-center justify-center border border-white/20 scale-100 hover:scale-115 transition-all shadow-lg cursor-pointer"
              >
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </button>
            )}

            {/* REAL-TIME TEXT OVERLAY */}
            <div className="absolute bottom-4 inset-x-4 text-center z-10 px-4">
              <div className="inline-block px-4 py-2 rounded-lg bg-black/80 backdrop-blur-xs border border-zinc-800 text-sm md:text-base text-white font-display font-medium tracking-tight neon-glow-blue">
                "{scene.textOverlay}"
              </div>
            </div>

            {/* SCANNING LASER EFFECT IN SCENE 2 */}
            {scene.id === 2 && isPlaying && (
              <div className="absolute inset-y-0 w-1 bg-gradient-to-r from-blue-500/20 via-blue-400 to-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 animate-[shimmer_2s_infinite]" style={{
                animation: 'scanning 2s infinite linear'
              }} />
            )}

            {/* Audio Waveform Micro overlay */}
            {isPlaying && (
              <div className="absolute bottom-4 right-4 flex gap-0.5 items-end justify-center h-5 w-8">
                <span className="w-1 bg-blue-500 h-3 animate-[pulse_0.4s_infinite]" />
                <span className="w-1 bg-orange-500 h-5 animate-[pulse_0.7s_infinite_0.1s]" />
                <span className="w-1 bg-blue-500 h-2 animate-[pulse_0.5s_infinite_0.2s]" />
                <span className="w-1 bg-orange-500 h-4 animate-[pulse_0.3s_infinite_0.3s]" />
              </div>
            )}
          </div>

          {/* PLAYHEAD CONTROLS */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {isPlaying ? (
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-white text-zinc-300 transition-colors cursor-pointer"
                >
                  <Pause className="w-4 h-4 fill-zinc-300 hover:fill-white" />
                </button>
              ) : (
                <button 
                  onClick={() => {
                    if (currentTime >= 30) {
                      setCurrentTime(0);
                    }
                    setIsPlaying(true);
                  }}
                  className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                </button>
              )}

              <button 
                onClick={resetVideo}
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Återställ video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Timeline track progress */}
            <div 
              onClick={handleProgressClick}
              className="flex-1 h-3 bg-zinc-950 border border-zinc-900 rounded-full overflow-hidden cursor-pointer relative"
            >
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-white to-orange-500 transition-all duration-100 ease-out"
                style={{ width: `${(currentTime / 30) * 100}%` }}
              />
              
              {/* Highlight grid ticks on timeline */}
              <div className="absolute inset-0 flex justify-between px-2 text-[8px] text-zinc-700 pointer-events-none select-none">
                <span>0s</span>
                <span>5s</span>
                <span>15s</span>
                <span>25s</span>
                <span>30s</span>
              </div>
            </div>
          </div>
        </div>

        {/* METADATA ENGINE & TIMELINE INFORMATION */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          {/* Active scene card */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 space-y-4 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-orange-400 font-bold px-2 py-0.5 rounded bg-orange-950/40 border border-orange-500/20">
                SCEN {scene.id} AV 4
              </span>
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                ⏱ {scene.timeRange}
              </span>
            </div>

            <div>
              <h4 className="text-base font-display font-medium text-white mb-1">
                {scene.title}
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {scene.visual}
              </p>
            </div>

            {/* Voiceover details */}
            <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-900 space-y-1">
              <span className="text-[10px] font-mono text-blue-400 tracking-wider flex items-center gap-1">
                <Volume2 className="w-3 h-3" /> SVENSK RÖST / VOICEOVER MANUS
              </span>
              <p className="text-xs text-zinc-200 italic font-light leading-relaxed">
                "{scene.voiceover}"
              </p>
            </div>

            {/* Audio production */}
            <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
              <Music className="w-3.5 h-3.5 text-zinc-600" />
              <span><strong>Musikspår:</strong> {scene.audioStatus}</span>
            </div>
          </div>

          {/* Quick tips note */}
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-950/55 flex items-start gap-3">
            <Sparkles className="text-blue-400 w-5 h-5 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h5 className="text-xs font-bold text-white">Färdigt förproduktion-klipp</h5>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Detta storyboard-stöd hjälper bilsäljare att korta ner produktionsled och publicera premium videomaterial utan dyrt skaparteam.
              </p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes scanning {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        .animate-slow-zoom {
          animation: slowZoom 7s infinite alternate ease-in-out;
        }
        .animate-subtle-up {
          animation: subtleUp 6s infinite alternate ease-in-out;
        }
        .animate-zoom-in-light {
          animation: zoomInLight 7s infinite alternate ease-in-out;
        }
        @keyframes slowZoom {
          0% { transform: scale(1.02) translate(0px, 0px); }
          100% { transform: scale(1.08) translate(-5px, -2px); }
        }
        @keyframes subtleUp {
          0% { transform: scale(1.1) translateY(8px); }
          100% { transform: scale(1.1) translateY(-8px); }
        }
        @keyframes zoomInLight {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.12); }
        }
      `}</style>
    </div>
  );
}
