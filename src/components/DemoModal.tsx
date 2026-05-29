import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Building, User, Mail, Plus } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    volume: '6-20'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Frame Window */}
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl z-10 neon-glow-blue select-none">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Close Button top right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          /* SUCCESS STATE PANEL */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 bg-blue-500/10 border-2 border-blue-500 text-blue-500 rounded-full flex items-center justify-center mx-auto animate-bounce shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-medium text-white">
                Demosamtat Reserverat!
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Tack, <strong>{formData.contactPerson}</strong>. Vi har tagit emot intresseanmälan för <strong>{formData.companyName}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-850 text-left text-xs text-zinc-400 space-y-2.5 max-w-sm mx-auto">
              <div className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-glow-blue" /> VAD HÄNDER NU?
              </div>
              <p className="leading-relaxed">
                1. En specialist granskar er nuvarande hemsida eller Blocket-butik.<br />
                2. Vi ringer er inom 24 timmar för att boka en bekväm tid online.<br />
                3. Vid demosamtalet visar vi gratis 3 färdiga AI-showroom-förvandlingar på era egna fordon!
              </p>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({ companyName: '', contactPerson: '', email: '', volume: '6-20' });
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Stäng fönster
            </button>
          </div>
        ) : (
          /* INPUT STATE FORM CONTAINER */
          <div className="space-y-6">
            
            <div className="space-y-2 text-center">
              <span className="text-xs font-mono text-orange-400 flex items-center gap-1.5 justify-center">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> FRÅN GRUSPLAN TILL RAMPLJUS
              </span>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Boka din exklusiva AI-demo
              </h3>
              <p className="text-xs text-zinc-400">
                Upplev hur AutoGlam AI ökar klickgraden och säljer era fordon snabbare. Helt kostnadsfritt för bilfirmor.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Company Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-zinc-500" /> BILFIRMA / FÖRETAGSNAMN
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="t.ex. Anderssons Bil AB"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-zinc-650 transition-colors"
                />
              </div>

              {/* Contact Person */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-500" /> KONTAKTPERSON
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="t.ex. Marcus Andersson"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-zinc-650 transition-colors"
                />
              </div>

              {/* E-mail */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" /> ARBETSEPOST
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="t.ex. marcus@anderssonsbil.se"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-zinc-650 transition-colors"
                />
              </div>

              {/* Volume scale */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400">MÅNATLIG FÖRSÄLJNINGSVOLYM (ANTAL BILAR)</label>
                <select 
                  value={formData.volume}
                  onChange={(e) => setFormData({...formData, volume: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-blue-500 focus:outline-none text-sm text-white/90 transition-colors"
                >
                  <option value="1-5">1 - 5 bilar per månad</option>
                  <option value="6-20">6 - 20 bilar per månad (Mest vald)</option>
                  <option value="20+">Fler än 20 bilar per månad</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-500 hover:to-orange-500 font-bold font-sans text-sm text-white flex items-center justify-center gap-2 shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Reserverar demo...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SKICKA DEMOFÖRFRÅGAN (KOSTNADSFRITT)</span>
                  </>
                )}
              </button>

            </form>

            <p className="text-[10px] text-zinc-600 text-center">
              Vi delar aldrig dina uppgifter. Genom att skicka godkänner du att vi ringer upp.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
