import { useState } from 'react';
import { Sparkles, FileText, Video, LayoutGrid, CheckCircle2, ChevronRight, RefreshCw, Send, Copy, Laptop } from 'lucide-react';

import orangeImg from '../assets/images/porsche_orange_studio_1779978245477.png';
import monochromeImg from '../assets/images/porsche_monochrome_luxury_1779978265003.png';
import sunsetImg from '../assets/images/porsche_sunset_drive_1779978282347.png';

interface ServicesSectionProps {
  showroomImg: string;
  campaignImg: string;
}

export default function ServicesSection({ showroomImg, campaignImg }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<'showroom' | 'texts' | 'video'>('showroom');
  const [selectedEnv, setSelectedEnv] = useState('showroom-blue');
  const [isApplyingEnv, setIsApplyingEnv] = useState(false);
  const [textVibe, setTextVibe] = useState<'premium' | 'sporty'>('premium');
  const [isGeneratingText, setIsGeneratingText] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const filterConfigs = {
    'showroom-blue': {
      title: 'Neon Showroom (Blå)',
      image: showroomImg,
      style: 'brightness-100 contrast-100 saturate-100',
      description: 'Placerar fordonet i ett utställningsrum i glas med eleganta elektriskblå neonlinjer.'
    },
    'showroom-orange': {
      title: 'Racing Studio (Orange)',
      image: orangeImg,
      style: 'brightness-95 contrast-110 saturate-105',
      description: 'Framhäver detaljer med varma orange racing-ljus för en prestandafokuserad känsla.'
    },
    'monochrome-luxury': {
      title: 'Monokrom Studio',
      image: monochromeImg,
      style: 'brightness-90 contrast-115 grayscale-0',
      description: 'Minimalistisk, lyxig svartsilver studio för den ultimata tidlösa elegansen.'
    },
    'sunset-drive': {
      title: 'Glödande Solnedgång',
      image: sunsetImg,
      style: 'brightness-100 contrast-100 saturate-100',
      description: 'Slår samman bilen med en hisnande glödande kvällshimmel för livsstilsannonsering.'
    }
  };

  const handleEnvChange = (envKey: string) => {
    setIsApplyingEnv(true);
    setSelectedEnv(envKey);
    setTimeout(() => {
      setIsApplyingEnv(false);
    }, 600);
  };

  const adTexts = {
    premium: {
      title: "PORSCHE 911 CARRERA S (992) – SVENSKSÅLD LYX",
      body: `Upplev körupplevelsen i sin renaste form. Vi presenterar en oklanderligt specad Porsche 911 i absolut nyskick. Varje detalj på denna vagn andas tysk ingenjörskonst när den är som allra bäst.

• Modell: Porsche 911 Carrera S Coupe (992)
• Interiör: Utökad helläder i djupsvart med kontraststygn
• Fälgars: RS Spyder Design i satin platina
• Höjdpunkter: Sportavgassystem, Matrix LED-strålkastare & BOSE® Surround Sound
• Historik: 1 ägare, full Auktoriserad Porsche-historik

Denna maskin levererar 450 hästkrafter parat med den snabba 8-växlade PDK-lådan. En tidlös ikon redo att förvandla varje kurva till ren magi. 

Kontakta oss på Anderssons Bil AB för en personlig visning i vårt showroom ordnad av AutoGlam AI.`,
      social: `✨ FÖRE/EFTER: Se hur vi förvandlade denna Porsche 911 från en tråkig grusplan till ett glänsande virtuellt showroom! 

Många bilsäljare tappar upp till 40% av klick på grund av dåliga bilder och stökiga miljöer. Med AutoGlam AI ger vi era premiumobjekt det rampljus de förtjänar på sekunder. 

👉 Swipa för att se skillnaden! Vill du öka engagemanget på dina bilannonser och sälja snabbare? Skicka ett DM eller klicka på länken i vår bio för att boka din exklusiva demo helt kostnadsfritt idag! #porsche #autoglamai #bilhandel`
    },
    sporty: {
      title: "PRESTANDAMONSTRET: PORSCHE 911 – REDO FÖR VÄGEN",
      body: `Det här handlar inte bara om transport – det handlar om ren tillfredsställelse. Denna Porsche 911 Carrera är byggd för prestanda, fart och oförglömliga aktiva stunder bakom ratten.

• Effekt: 450 hk med fantastiskt avgasljud
• Sprint: 0-100 km/h på hisnande 3.5 sekunder
• Prestanda: Sport Chrono-paket inkl. Mode Switch
• Chassi: PASM Sportfjädring (-10 mm) sänkt för optimal väghållning

Sticker ut i mängden med sin kraftfulla hållning och aggressiva ljussignatur. Nybesiktigad och stenskottsfolierad. En äkta kurvsmakare som gör helgerna mycket roligare.

Boka provkörning på Anderssons Bil AB idag!`,
      social: `🏁 Bilar som ser snabba ut säljs snabbare. Denna otroliga Porsche 911 Carrera S fotograferades först på en rörig grusväg bakom verkstaden. Med AutoGlam AI tog det oss 15 sekunder att placera den i en mörk sportstudio med elektriskt blå belysning. 

Resultat? Objektet såldes på bara 48 timmar hos Anderssons Bil AB!

Bilhandlare: Sluta slösa pengar på dyra fotografer och fula presenningar. Låt vår intelligenta AI göra jobbet. Boka ett demomöte nu! 🔗 link i profilen. #porsche911 #bilforhandlare #aiidrotten`
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <section id="services" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>KRAFTFULLA AI-ANPASSADE TJÄNSTER</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Våra Tre Huvudtjänster
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Vi förvandlar amatörmässigt säljmaterial till exklusiva digitala kampanjer. AutoGlam AI hanterar både det visuella, textuella och filmiska på sekunder.
          </p>
        </div>

        {/* Dynamic Tabs Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* TAB 1 */}
          <button
            onClick={() => setActiveTab('showroom')}
            className={`flex flex-col items-start p-5 rounded-xl border text-left transition-all relative overflow-hidden ${
              activeTab === 'showroom'
                ? 'bg-zinc-900 border-blue-500/55 shadow-md neon-glow-blue'
                : 'bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/60'
            }`}
          >
            <div className="p-3 rounded-lg bg-blue-600/15 text-blue-400 mb-4 border border-blue-500/30">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-2 flex items-center gap-2">
              1. AI Virtual Showroom
              {activeTab === 'showroom' && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-1">
              Byter omedelbart ut tråkiga bilbakgrunder till hyper-professionella och anpassade studior.
            </p>
            <span className="text-xs font-mono text-zinc-600 mt-auto pt-3">INTELLIGENT INTEGRATION</span>
          </button>

          {/* TAB 2 */}
          <button
            onClick={() => setActiveTab('texts')}
            className={`flex flex-col items-start p-5 rounded-xl border text-left transition-all relative overflow-hidden ${
              activeTab === 'texts'
                ? 'bg-zinc-900 border-orange-500/55 shadow-md neon-glow-orange'
                : 'bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/60'
            }`}
          >
            <div className="p-3 rounded-lg bg-orange-600/15 text-orange-400 mb-4 border border-orange-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-2 flex items-center gap-2">
              2. Smarta Annonstexter
              {activeTab === 'texts' && <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-1">
              Formulerar vassa, säljande och bilspecifika texter för Blocket, hemsidor och sociala kanaler.
            </p>
            <span className="text-xs font-mono text-zinc-600 mt-auto pt-3">NLP & KOPIERING</span>
          </button>

          {/* TAB 3 */}
          <button
            onClick={() => setActiveTab('video')}
            className={`flex flex-col items-start p-5 rounded-xl border text-left transition-all ${
              activeTab === 'video'
                ? 'bg-zinc-900 border-blue-500/55 shadow-md neon-glow-blue'
                : 'bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/60'
            }`}
          >
            <div className="p-3 rounded-lg bg-blue-600/15 text-blue-400 mb-4 border border-blue-500/30">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-2 flex items-center gap-2">
              3. Cinematic Video Promos
              {activeTab === 'video' && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-1">
              Skapar engagerande, korta videokoncept med röst, dramatisk musik och blickfångande övergångar.
            </p>
            <span className="text-xs font-mono text-zinc-600 mt-auto pt-3">GEN-AI VIDEOREKLAM</span>
          </button>
        </div>

        {/* Dynamic Interactive Showroom Workspace */}
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden p-6 md:p-8">
          
          {/* TAB CONTENT: SHOWROOM VIRTUALIZATION */}
          {activeTab === 'showroom' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Studio Panel Settings */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Interaktiv studio-simulator
                </div>
                <h3 className="text-2xl font-display font-bold text-white leading-tight">
                  Välj virtuell miljö till din Porsche 911
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Vår AI-modell separerar automatiskt fordonet från stökiga bakgrunder, korrigerar skuggorna, justerar lackreflektionerna och placerar den sömlöst i valfri miljö. Prova själv nedan:
                </p>

                {/* Env list buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {Object.entries(filterConfigs).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => handleEnvChange(key)}
                      disabled={isApplyingEnv}
                      className={`p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between h-20 group relative overflow-hidden ${
                        selectedEnv === key
                          ? 'bg-blue-600/10 border-blue-500 text-white'
                          : 'bg-zinc-950/20 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <span className="font-semibold block">{value.title}</span>
                      <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400 flex items-center gap-1">
                        Applicera <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/30 border border-zinc-800 text-xs text-zinc-500 italic">
                  <strong>Vald miljöbeskrivning:</strong> {filterConfigs[selectedEnv as keyof typeof filterConfigs].description}
                </div>
              </div>

              {/* Showroom Interactive Canvas Viewport */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center">
                <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-inner flex items-center justify-center">
                  
                  {/* Applying Overlay spinner */}
                  {isApplyingEnv && (
                    <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-3">
                      <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
                      <p className="text-blue-400 text-xs font-mono tracking-widest uppercase">
                        AI beräknar ytlackreflektioner...
                      </p>
                    </div>
                  )}

                  {/* The Rendered Image with active CSS styles according to selected environmental mock style */}
                  <img
                    src={filterConfigs[selectedEnv as keyof typeof filterConfigs].image}
                    alt="Porsche 911 i rörlig miljö"
                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      filterConfigs[selectedEnv as keyof typeof filterConfigs].style
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Neon Grid Layer in canvas */}
                  <div className="absolute inset-0 bg-transparent pointer-events-none mix-blend-overlay opacity-30 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>
                
                <span className="text-[10px] font-mono text-zinc-500 mt-2 flex items-center gap-1.5 justify-center">
                  <Laptop className="w-3.5 h-3.5" /> Realtidssimulering baserat på {filterConfigs[selectedEnv as keyof typeof filterConfigs].title}
                </span>
              </div>

            </div>
          )}

          {/* TAB CONTENT: SMART AD TEXT COPY */}
          {activeTab === 'texts' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Settings Panel */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Smart Texthantering
                </div>
                <h3 className="text-2xl font-display font-bold text-white leading-tight">
                  Trovärdiga texter anpassade för svenska marknaden
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Tråkiga och intetsägande texter gör att många handlare förlorar förtroende. Vår AI analyserar fordonsspecifikationer och genererar personliga, vassa och grammatiskt fläckfria säljinlägg.
                </p>

                {/* Switcher for tone/vibe */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono text-zinc-400 block">Välj annonston:</span>
                  <div className="flex gap-2 p-1 bg-zinc-950 border border-zinc-800 rounded-lg">
                    <button
                      onClick={() => {
                        setIsGeneratingText(true);
                        setTextVibe('premium');
                        setTimeout(() => setIsGeneratingText(false), 450);
                      }}
                      className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                        textVibe === 'premium'
                          ? 'bg-orange-600 text-white shadow'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Exklusiv & Premium
                    </button>
                    <button
                      onClick={() => {
                        setIsGeneratingText(true);
                        setTextVibe('sporty');
                        setTimeout(() => setIsGeneratingText(false), 450);
                      }}
                      className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                        textVibe === 'sporty'
                          ? 'bg-orange-600 text-white shadow'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Sportig & Prestanda
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 text-xs text-zinc-400 leading-relaxed">
                  ✓ Svenskt säljfokus<br />
                  ✓ Anpassade listpunkter för högsta läsbarhet<br />
                  ✓ Optimerad call-to-action för snabba avslut
                </div>
              </div>

              {/* Right Output Area */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                
                {/* Copy 1: Blocket-annons */}
                <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl p-5 relative">
                  
                  {isGeneratingText && (
                    <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xs z-10 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-orange-400 text-xs font-mono">
                        <RefreshCw className="w-4 h-4 animate-spin" /> Skriver om text med säljartat...
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-3">
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-orange-500" /> BLOCKET & SAMBANDSMATERIAL
                    </span>
                    <button 
                      onClick={() => handleCopy(adTexts[textVibe].body)}
                      className="p-1 px-2.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedText ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copiedText ? 'Kopierat' : 'Kopiera text'}
                    </button>
                  </div>

                  <h4 className="text-sm font-bold text-orange-400 font-mono mb-2">
                    {adTexts[textVibe].title}
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-300 font-sans leading-relaxed whitespace-pre-line font-light">
                    {adTexts[textVibe].body}
                  </p>
                </div>

                {/* Copy 2: Social media Instagram copy */}
                <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-5 relative">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-3">
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-orange-500" /> SOCIALA MEDIER (INSTAGRAM / FB)
                    </span>
                    <button 
                      onClick={() => handleCopy(adTexts[textVibe].social)}
                      className="p-1 px-2.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      Kopiera inlägg
                    </button>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-sans leading-relaxed whitespace-pre-line font-light italic bg-zinc-900/40 p-3 rounded-lg border border-zinc-900">
                    {adTexts[textVibe].social}
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB CONTENT: CINEMATIC VIDEO PROMO PREVIEW */}
          {activeTab === 'video' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    Cinematic Video Promo Concept
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Skapa färdiga videoscripts och koncept på sekunder
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono flex items-center gap-1.5">
                  <Video className="w-4 h-4" /> 30-sekunders Pitch-koncept
                </div>
              </div>

              {/* Embed Interactive Video Player inside Services to act as absolute completeness */}
              <div className="relative p-6 rounded-xl bg-zinc-950 border border-zinc-800/80 max-w-3xl mx-auto shadow-inner">
                <p className="text-zinc-400 text-sm leading-relaxed text-center mb-6">
                  Nedan visas det strukturerade storyboard-flödet för hur AutoGlam AI sätter samman en kort, säljande film på Porsche 911 till bilhandlaren för delning på TikTok/Reels eller hemsidan.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800/70 text-center flex flex-col justify-between h-40">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold block">0 - 5 SEK</span>
                    <p className="text-xs text-zinc-300 my-2 font-medium">Vanlig bild på en rörig parkering.</p>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-950 text-red-400 font-sans mx-auto font-bold">"Tappar dina klick?"</span>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800/70 text-center flex flex-col justify-between h-40">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold block">5 - 15 SEK</span>
                    <p className="text-xs text-zinc-300 my-2 font-medium">AI raderar skräpet och rullar ut showroom-glans.</p>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 font-sans mx-auto font-bold">"Virtual Showroom"</span>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800/70 text-center flex flex-col justify-between h-40">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold block">15 - 25 SEK</span>
                    <p className="text-xs text-zinc-300 my-2 font-medium">Svepande närbilder på eleganta fälgar och glänsande front.</p>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-950 text-orange-400 font-sans mx-auto font-bold">"Känsla av fart"</span>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800/70 text-center flex flex-col justify-between h-40">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold block">25 - 30 SEK</span>
                    <p className="text-xs text-zinc-300 my-2 font-medium">AutoGlam AI-logotyp lyser upp med stark call-to-action.</p>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-sans mx-auto font-bold">"Boka en demo"</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
