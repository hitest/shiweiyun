import { Eye, Layers, Circle, Zap, Microscope, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const iconMap = [Eye, Microscope, Zap, Layers, Circle, Shield];

export function Expertise() {
  const { language } = useLanguage();
  const t = translations[language].expertise;

  return (
    <section id="expertise" className="bg-gray-100 py-24 lg:py-32">
      {/* Full-width banner without image to avoid awkward cropping */}
      <div className="relative h-64 mb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-10 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
                {t.sectionLabel}
              </span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl max-w-xl">
              {t.title} <span className="text-[#c9a84c]">{t.titleHighlight}</span>
            </h2>
            <p className="text-white/70 text-sm mt-4 max-w-2xl">{t.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.areas.map((area, i) => {
            const Icon = iconMap[i];
            return (
              <div
                key={area.title}
                className="relative bg-white border border-gray-200 rounded-lg p-8 hover:border-[#c9a84c]/50 hover:shadow-xl transition-all duration-500 group"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-6 text-6xl text-gray-100 select-none font-light">
                  0{i + 1}
                </span>

                <div className="inline-flex items-center justify-center w-12 h-12 border border-[#c9a84c]/40 rounded mb-6 group-hover:bg-[#c9a84c]/10 transition-colors">
                  <Icon size={22} className="text-[#c9a84c]" />
                </div>

                <h3 className="text-gray-900 text-lg font-medium mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
