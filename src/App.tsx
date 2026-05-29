/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, ArrowRight, ShieldAlert, Award, ChevronRight, CheckCircle2, MessageSquare, AlertTriangle, Eye, Navigation, Instagram, Facebook } from 'lucide-react';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import ServicesSection from './components/ServicesSection';
import KundCase from './components/KundCase';
import InteractiveVideoConcept from './components/InteractiveVideoConcept';
import AudioVoiceoverConcept from './components/AudioVoiceoverConcept';
import ReportSection from './components/ReportSection';
import DemoModal from './components/DemoModal';

// Vite imports for generated Porsche 911 assets
import showroomImg from './assets/images/porsche_showroom_1779976882005.png';
import campaignImg from './assets/images/porsche_social_campaign_1779976903079.png';
import beforeImg from './assets/images/porsche_industrial_before_1779977738271.png';
import wheelImg from './assets/images/porsche_cinematic_wheel_1779977759888.png';
import rearImg from './assets/images/porsche_cinematic_rear_1779977782799.png';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-600 selection:text-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-[circle_at_center,rgba(59,130,246,0.08)_0%,transparent_75%] pointer-events-none" />

      {/* 1. HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-orange-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/10">
              A
            </div>
            <span className="text-xl font-display font-medium text-white tracking-tight flex items-center gap-1">
              AutoGlam<span className="text-blue-500 font-normal">AI</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-neutral-400 text-xs font-mono font-semibold tracking-wider">
            <a href="#about" className="hover:text-white transition-colors">PRESENTATION</a>
            <a href="#problems" className="hover:text-white transition-colors">UTMANINGAR</a>
            <a href="#services" className="hover:text-white transition-colors">TJÄNSTER</a>
            <a href="#kundcase" className="hover:text-white transition-colors">KUNDCASE</a>
            <a href="#storyboard" className="hover:text-white transition-colors">MEDIA</a>
            <a href="#rapport" className="hover:text-blue-400 text-glow-blue transition-colors">RAPPORT</a>
          </nav>

          {/* CTA header button */}
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            Boka Demo
          </button>

        </div>
      </header>

      {/* 2. STARTSIDA / HERO */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono select-none">
            <Sparkles className="w-3.5 h-3.5 text-glow-blue animate-pulse" />
            <span>FÖR BILSÄLJARE UTAN DYS PROFFSIGA VERKTYG</span>
          </div>

          {/* Slogan & Heading */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight uppercase">
              Från grusplan till rampljus
            </h1>
            <p className="text-xl md:text-2xl font-display font-medium bg-gradient-to-r from-blue-400 via-white to-orange-500 bg-clip-text text-transparent">
              "Proffsiga bilbilder på sekunder."
            </p>
          </div>

          {/* Short Pitch */}
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            AutoGlam AI är din smarta marknadsföringspartner. Vi hjälper bilhandlare att omedelbart förvandla enkla mobilfoton till exklusiva showroom-bilder, författa säljande svenska annonstexter samt skapa färdiga cinematiska videoredigeringar och ljudspår ordnade med generativ AI.
          </p>

          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-500 hover:to-orange-500 font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/10 hover:scale-102 transition-all cursor-pointer"
            >
              <span>Boka en demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 font-semibold text-sm text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-all"
            >
              Se våra tjänster
            </a>
          </div>

          {/* Interactive Before/After slider showcase */}
          <div className="pt-8">
            <BeforeAfterSlider beforeImage={beforeImg} afterImage={showroomImg} />
          </div>

        </div>
      </section>

      {/* 3. PRESENTATION AV AI AGENCY */}
      <section id="about" className="py-24 bg-zinc-900/20 border-t border-zinc-900 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual badge column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] font-mono">
                OM AUTOGLAM AI
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Vem vi hjälper & Varför vi behövs
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                AutoGlam AI är en specialiserad AI-byrå. Vi analyserar det faktum att bilhandlare, mindre bilfirmor och privata säljare förlorar oerhört värdefulla klick och kunder för att deras digitala marknadsföring ser ut som ett hastigt amatörjobb. 
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Genom att tillämpa avancerade visuella modeller och språkliga ramverk låter vi varje bilhandel nå samma lyxiga reklamnivå som tillverkarnas officiella fotografer – utan kostnaden för dyra lokaler eller tunga kamerautrustningar.
              </p>
            </div>

            {/* Structured Value Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl space-y-3">
                <span className="text-[10px] font-mono text-blue-400 font-bold block">01 / SMIDIGHET</span>
                <h4 className="text-base font-semibold text-white">Ingen tung utrustning</h4>
                <p className="text-xs text-zinc-450 leading-relaxed">
                  Ta en enkel bild med din arbetstelefon på asfalten utanför. Vår AI sköter maskeringen, ljuset och bakgrundsbytet automatiskt.
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl space-y-3">
                <span className="text-[10px] font-mono text-orange-400 font-bold block">02 / SPRÅKLIG SPETS</span>
                <h4 className="text-base font-semibold text-white">Säljande svenska</h4>
                <p className="text-xs text-zinc-450 leading-relaxed">
                  Skapa omedelbart anpassade beskrivningar som talar till kundens livsstil och ökar suget efter att provköra.
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl space-y-3">
                <span className="text-[10px] font-mono text-blue-500 font-bold block">03 / SOCIAL SYNlighet</span>
                <h4 className="text-base font-semibold text-white">Klar för sociala medier</h4>
                <p className="text-xs text-zinc-450 leading-relaxed">
                  Kombinera bild, video och rörliga koncept till engagerande kampanjer redo att postas direkt på Instagram Reels eller Facebook.
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl space-y-3">
                <span className="text-[10px] font-mono text-orange-500 font-bold block">04 / DIGITALT ARV</span>
                <h4 className="text-base font-semibold text-white">Trovärdigt helhetsgrepp</h4>
                <p className="text-xs text-zinc-450 leading-relaxed">
                  Eftersom över 90% av bilaffärer inleds på internet, avgör den första digitala blicken om kunden tar en provtur eller scrollar vidare.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. PROBLEM-SEKTION */}
      <section id="problems" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center mb-16 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>MARKNADENS DIAGNOS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              Varför säljare tappar kunder
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm">
              Att lista bilar online kräver högsta visuella trovärdighet. Här är de fyra vanligaste fällorna som gör att bilhandlare förlorar intäkter varje dag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850 space-y-4">
              <div className="p-3 bg-red-950/30 text-red-400 border border-red-500/25 rounded-lg w-fit">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Stökiga bakgrunder</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stängsel, andra fordon, rostiga kontajners och fula presenningar sänker direkt andrahandsvärdet och bilens wow-känsla.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850 space-y-4">
              <div className="p-3 bg-red-950/30 text-red-400 border border-red-500/25 rounded-lg w-fit">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Platt & dåligt ljus</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Mulet svenskt väder ger grå trista konturer, reflexer och saknar den polerade kommersiella glans som lockar premiumköpare.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850 space-y-4">
              <div className="p-3 bg-red-950/30 text-red-400 border border-red-500/25 rounded-lg w-fit">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Torra rullbeskrivningar</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Endast listade fabriksdata utan lockande budskap eller berättande säljcopy sänker engagemanget på Blocket.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850 space-y-4">
              <div className="p-3 bg-red-950/30 text-red-400 border border-red-500/25 rounded-lg w-fit">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Svag social närvaro</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Säljare saknar verktyg för att klippa ihop snabba, rytmiska videokoncept vilket gör att de förlorar den unga köpargenerationen.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. INTERACTIVER SOCIALS & SERVICES REGION */}
      <ServicesSection showroomImg={showroomImg} campaignImg={campaignImg} />

      {/* 6. KUNDCASE (Anderssons Bil AB Porsche 911) */}
      <KundCase showroomImg={showroomImg} />

      {/* 7. AI-GENERERADE BILDER (SHOWROOM + CAMPAIGN PHOTO SHOWCASE) */}
      <section className="py-20 bg-zinc-900/20 border-t border-zinc-900 relative">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">PROMPT-ENGINEERING GALLERI</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Våra AI-genererade Marknadsbilder
            </h2>
            <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase mt-1">
              PRODUKTER SKAPADE PÅ SEKUNDER — SE EXAKTA PROMPTER UNDER BILDERNA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Bild 1: Showroom */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-5 space-y-5">
              <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-zinc-900">
                <img 
                  src={showroomImg} 
                  alt="Porsche 911 i exklusivt AI-showroom" 
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Bild 1: AI Virtual Showroom</span>
                  <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-400 text-[10px] font-mono">16:9 FORMAT</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Porsche 911 i ett exklusivt AI-showroom med mörk bakgrund, blått ljus och premiumkänsla.
                </p>
                
                {/* Visual prompt display */}
                <div className="mt-4 p-3.5 bg-zinc-900 rounded-xl border border-zinc-850">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Använd bild-prompt:</span>
                  <p className="text-[11px] text-zinc-300 font-mono italic leading-relaxed">
                    "A modern Porsche 911 parked inside an ultra-exclusive dark AI-designed showroom glass pavilion, dramatic neon electric blue light highlights on the clean glossy silver car body, wet reflective concrete floor, premium high contrast commercial automotive advertising style, photorealistic, cinematic volumetric lighting, aspect ratio 16:9"
                  </p>
                </div>
              </div>
            </div>

            {/* Bild 2: Campaign */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-5 space-y-5">
              <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-zinc-900">
                <img 
                  src={campaignImg} 
                  alt="Social kampanjbild för AutoGlam AI" 
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Bild 2: Social Kampanjaffisch</span>
                  <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-400 text-[10px] font-mono">4:3 FORMAT</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Social kampanjbild för AutoGlam AI med Porsche 911, racing-orange accent och textyta för annons.
                </p>

                {/* Visual prompt display */}
                <div className="mt-4 p-3.5 bg-zinc-900 rounded-xl border border-zinc-850">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Använd bild-prompt:</span>
                  <p className="text-[11px] text-zinc-300 font-mono italic leading-relaxed">
                    "A dynamic professional social media ad graphic for AutoGlam AI featuring a sleek dark-grey Porsche 911, vibrant racing-orange light accents and neon trails, sleek design with a clean dark layout, ample negative space on one side for promotional text overlays, high speed motion blur background, photorealistic, aspect ratio 4:3"
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CINEMATIC VIDEO & AUDIO CONCEPTS SECTION */}
      <section id="storyboard" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-2">MULTIMEDIA PRE-PRODUKTION</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Film- & Ljudproduktion
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Vi bygger inte bara bilder. Vi förser bilfirmor med fullständiga rörliga och auditiva reklamkoncept anpassade för högsta takt i sociala medier.
            </p>
          </div>

          <InteractiveVideoConcept 
            showroomImg={showroomImg} 
            beforeImg={beforeImg} 
            wheelImg={wheelImg} 
            rearImg={rearImg} 
          />

          <AudioVoiceoverConcept />

        </div>
      </section>

      {/* 9. RAPPORTDEL */}
      <ReportSection />

      {/* 10. FOOTER ACCLAIM */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <span className="text-sm font-display font-bold text-white tracking-widest uppercase">AutoGlam AI</span>
            <p className="text-xs text-zinc-500">
              © 2026. Skolprojekt - Digital marknadsföringsportfölj omarbetat med Porsche 911.
            </p>
          </div>
          
          <div className="flex gap-4 text-xs font-mono text-zinc-500">
            <span className="hover:text-white transition-colors">Vite + React</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Tailwind v4</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Ingen databas</span>
          </div>

        </div>
      </footer>

      {/* Renders Demo Form modal when triggered */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

    </div>
  );
}

