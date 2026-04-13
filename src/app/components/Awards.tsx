import { Trophy, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export function Awards() {
  const { language } = useLanguage();
  const t = translations[language].awards;

  return (
    <section id="awards" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
            {t.sectionLabel}
          </span>
        </div>
        <h2 className="text-gray-900 text-3xl md:text-4xl mb-16">
          {t.title} <span className="text-[#c9a84c]">{t.titleHighlight}</span>
        </h2>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {t.items.map((award) => (
            <div
              key={award.title}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:border-[#c9a84c]/50 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c9a84c]/20 transition-colors">
                  <Trophy size={20} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-[#c9a84c] text-xs tracking-wider mb-1">
                    {award.year}
                  </div>
                  <div className="text-gray-500 text-xs">{award.level}</div>
                </div>
              </div>
              <h4 className="text-gray-900 font-medium text-lg mb-3">
                {award.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{award.desc}</p>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award size={20} className="text-[#c9a84c]" />
            <h3 className="text-gray-900 font-medium text-lg">
              {t.leadership.title}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {t.leadership.positions.map((position) => (
              <div key={position} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#c9a84c] shrink-0" />
                <span className="text-gray-700 text-sm leading-relaxed">
                  {position}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
