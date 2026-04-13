import { Scissors } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export function Innovations() {
  const { language } = useLanguage();
  const t = translations[language].innovations;

  return (
    <section id="innovations" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
            {t.sectionLabel}
          </span>
        </div>
        <h2 className="text-gray-900 text-3xl md:text-4xl mb-6 max-w-xl">
          {t.title} <span className="text-[#c9a84c]">{t.titleHighlight}</span>
        </h2>
        <p className="text-gray-600 mb-16 max-w-3xl leading-relaxed">
          {t.intro}
        </p>

        {/* Techniques Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.techniques.map((technique, idx) => (
            <div
              key={technique.title}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#c9a84c]/50 hover:shadow-xl transition-all duration-500 group"
            >
              {/* Number badge */}
              <div className="flex items-start gap-6 mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#c9a84c]/30 flex items-center justify-center shrink-0 group-hover:bg-[#c9a84c]/10 transition-colors">
                  <Scissors size={20} className="text-[#c9a84c]" />
                </div>
                <div className="flex-1">
                  <div className="text-[#c9a84c] text-xs tracking-wider mb-2">
                    {language === "en" ? "TECHNIQUE" : "技术"} {idx + 1}
                  </div>
                  <h4 className="text-gray-900 font-medium text-lg mb-3">
                    {technique.title}
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed ml-18">
                {technique.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-[#c9a84c]/10 to-transparent border-l-4 border-[#c9a84c] p-8 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            {language === "en" ? (
              <>
                <span className="text-[#c9a84c] font-medium">
                  International Impact:{" "}
                </span>
                These surgical innovations have been adopted by ophthalmologists
                worldwide and have improved outcomes for thousands of patients with
                complex corneal diseases. Prof. Shi continues to refine these
                techniques and train the next generation of corneal surgeons.
              </>
            ) : (
              <>
                <span className="text-[#c9a84c] font-medium">国际影响：</span>
                这些手术创新技术已被世界各地的眼科医生采用，为数千名复杂角膜病患者改善了治疗效果。史教授持续优化这些技术，并培训新一代角膜外科医生。
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
