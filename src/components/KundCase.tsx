import { CheckCircle2, TrendingUp, Clock, Target, Calendar } from 'lucide-react';

interface KundCaseProps {
  showroomImg: string;
}

export default function KundCase({ showroomImg }: KundCaseProps) {
  return (
    <section id="kundcase" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>KUNDINTELLIGENS & RESULTAT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Kundcase: Anderssons Bil AB
          </h2>
          <p className="text-zinc-500 font-mono text-xs mt-2 uppercase tracking-widest">
            Hur en Porsche 911 flyttade från en rörig grusplan till ett exklusivt showroom på sekunder
          </p>
        </div>

        {/* Highlight Stats Block */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
            <span className="text-zinc-500 text-xs font-mono block uppercase">Försäljningstid</span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-3xl md:text-4xl font-display font-bold text-white">48h</span>
              <span className="text-xs font-mono text-emerald-400">Inom</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Bilen såldes rekordsnabbt efter uppdaterad annonsering.
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
            <span className="text-zinc-500 text-xs font-mono block uppercase">Klickökning</span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-3xl md:text-4xl font-display font-bold text-white">+320%</span>
              <span className="text-xs font-mono text-emerald-400">Klick</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Fler upptäckte annonsen tack vare exklusiv visuell närvaro.
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
            <span className="text-zinc-500 text-xs font-mono block uppercase">Engagemang</span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-3xl md:text-4xl font-display font-bold text-white">+185%</span>
              <span className="text-xs font-mono text-emerald-400">Delningar</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Spektakulära bilder ledde till rekordmånga kommentarer.
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
            <span className="text-zinc-500 text-xs font-mono block uppercase">ROI (Kostnadseffektivitet)</span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-3xl md:text-4xl font-display font-bold text-white">10x</span>
              <span className="text-xs font-mono text-emerald-400">Avkastning</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Slapp anlita en dyr professionell fotograf eller studio.
            </p>
          </div>

        </div>

        {/* Case Narrative / Step-by-Step Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* PROBLEM & PROCESS DESCRIPTION */}
          <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800 p-6 md:p-8 rounded-2xl space-y-6">
            
            <h3 className="text-2xl font-display font-semibold text-white">
              Utmaningen: Att sälja en premiumikon på en tråkig parkering
            </h3>
            
            <p className="text-zinc-300 text-sm leading-relaxed">
              Anderssons Bil AB hade fått in en exceptionellt fin <strong>Porsche 911</strong>. Trots bilens höga prestanda och exklusivitet stod den parkerad bakom en stökig industrifack på en lerig grusplan omgiven av staket och andra vanliga bilar under en grå och mulet dag. 
            </p>

            <blockquote className="border-l-2 border-orange-500 pl-4 py-1 text-zinc-400 italic text-sm font-light">
              "Folk som kollar på bilar för över en miljon förväntar sig lyx. Bilderna sänkte hela värdet på bilen och vi fick nästan inga intressenter trots aggressiv budgivning."
              <span className="block text-[11px] text-zinc-500 font-mono mt-1 NOT-ITALIC">— Marcus Andersson, VD Anderssons Bil AB</span>
            </blockquote>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">AutoGlam AI:s Lösning:</h4>
              <ul className="space-y-2 text-zinc-400 text-xs leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span><strong>AI Virtual Showroom</strong> tog bort den tråkiga asfalten och placerade bilen i vårt exklusiva mörka showroom med glänsande golv och elegant blått neonljus.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span><strong>Formulerade säljande Porsche-copy</strong> som framhävde prestanda och den pedantiskt ifyllda serviceboken på ren och inbjudande svenska.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span><strong>Cinematiskt storyboard</strong> levererades för korta videospecifikationer anpassat för sociala flöden och lyxköpare.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* ANALYSIS IN DEPTH ACCLAIM */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-2xl flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-blue-400 font-mono text-xs uppercase tracking-wider">
                <Target className="w-4 h-4 text-blue-500" />
                Varför materialet passade målgruppen
              </div>

              <h4 className="text-lg font-display font-medium text-white">
                Psykologin bakom lyxbilsaffärer
              </h4>

              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                Målgruppen för en Porsche 911 är kräsen. De köper inte bara ett fordon – de köper en livsstil, en status och en dröm. När en exklusiv sportbil presenteras på en bakgård med dålig belysning, sänder det ut omedvetna signaler om att bilen kan sakna omsorg, ha dolda fel, eller att säljaren saknar professionalitet.
              </p>

              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                Genom att byta bakgrunden till ett lyxigt, mörkt showroom och framhäva de ikoniska siluetterna med racing-orange och elektriskblå belysning, matchas bilden omedelbart med fabrikstillverkarnas officiella pressbilder. Det inger trygghet, lyxkänsla och motiverar premiumpriset.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-900 flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/10">
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-xs text-zinc-300 font-mono">
                <strong>Resultat:</strong> Bilen såld på endast 48 timmar till fullt begärt pris!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
