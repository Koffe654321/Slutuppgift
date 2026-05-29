import { CheckCircle, ShieldAlert, BrainCircuit, Award, FileQuestion, HelpCircle } from 'lucide-react';

export default function ReportSection() {
  const reportData = [
    {
      question: "Vilka AI-verktyg använde du?",
      icon: <BrainCircuit className="w-5 h-5 text-blue-400" />,
      answer: "Jag använde Google Gemini (främst modeller tillgängliga via AI Studio) för att generera gränssnittets struktur, textinnehåll och interaktiv logik. Jag använde även den inbyggda bildgenereringsmodellen (Imagen) för att framställa högkvalitativa, skräddarsydda produktbilder av Porsche 911 i olika miljöer."
    },
    {
      question: "Vad använde du dem till?",
      icon: <HelpCircle className="w-5 h-5 text-orange-400" />,
      answer: "AI:n användes för att bygga upp källkoden och logiken för de interaktiva komponenterna (före/efter-slidern samt videokonceptet). Dessutom använde jag bild-AI:n för att ta fram realistiska referensbilder: en smutsig industrigata för 'före'-läget, ett neonbelyst showroom, närbilder på fälg/bromsar samt olika virtuella miljöer (solnedgång, monokrom studio, racingstudio)."
    },
    {
      question: "Vad blev mest lyckat?",
      icon: <Award className="w-5 h-5 text-blue-400" />,
      answer: "Det interaktiva promovideokonceptet blev extremt lyckat! Genom att synka tidslinjen med riktiga och unika bilddetaljer (från den tråkiga industrigatan, till showroomet, till den lyxiga fälgdetaljen och avslutningsvis baklyktan med en mjuk zoom-effekt) känns videon levande, professionell och dynamisk trots att den drivs av digitala element."
    },
    {
      question: "Vad behövde du förbättra själv?",
      icon: <ShieldAlert className="w-5 h-5 text-orange-400" />,
      answer: "Jag behövde förbättra och finjustera de svenska texterna så att de låter naturliga för bilhandelsbranschen istället för robotiska direktöversättningar. Dessutom krävdes en hel del manuellt arbete för att städa upp filstrukturen, rätta saknade TypeScript-typer och korrigera sökvägar till de genererade bilderna."
    },
    {
      question: "Vilken del krävde mest eget tänkande?",
      icon: <BrainCircuit className="w-5 h-5 text-blue-400" />,
      answer: "Det krävdes mest logiskt tänkande för att strukturera upp videons tidslinje och se till att alla stater (bildväxlingar, texter, undertexter, CSS-zoomhastigheter och ljudstatus) synkroniserades perfekt i takt med sekundräknaren. Att binda samman gränssnittet i React så det flyter sömlöst krävde noggrann planering."
    },
    {
      question: "Vad blev dåligt först, och hur förbättrade du det?",
      icon: <ShieldAlert className="w-5 h-5 text-orange-400" />,
      answer: "Från början använde före/efter-slidern bara exakt samma bild men med ett grått CSS-filter för 'före'-läget, vilket kändes konstigt. Likaså ändrades knappt bilderna när man valde olika studiobelysningar i tjänsteväljaren. Jag förbättrade detta genom att generera helt unika bilder för grusvägen i industriområdet, guldgula solnedgångar samt racingstudion, och kopplade på äkta bildbyten i källkoden så förändringen blir knivskarp!"
    }
  ];

  return (
    <section id="rapport" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-zinc-800 to-orange-500" />
      
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>EXAMINATION — SKOLPROJEKT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Så använde jag AI
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base mt-2">
            Här är min utvärdering och redogörelse av hur generativ AI och mänsklig design samverkade för att skapa AutoGlam AI-portfolion.
          </p>
        </div>

        {/* Q&A Presentation - Bento Style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reportData.map((item, index) => (
            <div 
              key={index}
              className="bg-zinc-900/40 border border-zinc-850 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-display font-semibold text-white">
                    {item.question}
                  </h3>
                </div>
                
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>
              
              <div className="text-[10px] font-mono text-zinc-650 mt-4 text-left border-t border-zinc-900 pt-3">
                KATEGORI: {index % 2 === 0 ? 'AI STRATEGI' : 'MÄNSKLIG DESIGN'}
              </div>
            </div>
          ))}
        </div>

        {/* Concluding message box */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-orange-400">SUMMERING AV AI-BYRÅN</span>
          <p className="text-xs text-zinc-400 leading-relaxed mt-2 italic">
            "Samspelet mellan människa och maskin är nyckeln. AI:n skapar en otroligt stark grundstruktur och hisnande visuella världar på sekunder – den mänskliga redaktören tillför lokal trovärdighet, språklig stringens och verklighetsförankring för att stänga affärer."
          </p>
        </div>

      </div>
    </section>
  );
}
