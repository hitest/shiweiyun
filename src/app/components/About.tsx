import { GraduationCap, Globe, BookOpen, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import consultationImage from "../../imports/image-10.png";

const RESEARCH_IMG = consultationImage;

const iconMap = [GraduationCap, Globe, BookOpen, Award];

export function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
            {t.sectionLabel}
          </span>
        </div>
        <h2 className="text-gray-900 text-3xl md:text-4xl mb-16 max-w-xl">
          {t.title} <span className="text-[#c9a84c]">{t.titleHighlight}</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-gray-700 leading-loose mb-6">{t.paragraph1}</p>
            <p className="text-gray-700 leading-loose mb-6">
              {t.paragraph2}{" "}
              <span className="text-gray-900 font-medium">{t.paragraph2Highlight}</span>{" "}
              {t.paragraph2Continue}
            </p>
            <p className="text-gray-700 leading-loose mb-10">{t.paragraph3}</p>

            {/* Timeline */}
            <div className="border-l border-[#c9a84c]/30 pl-6 space-y-6">
              {t.timeline.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full border-2 border-[#c9a84c] bg-white" />
                  <span className="text-[#c9a84c] text-xs tracking-widest block mb-1">
                    {item.year}
                  </span>
                  <p className="text-gray-700 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + credential cards */}
          <div>
            <div className="relative mb-10">
              <img
                src={RESEARCH_IMG}
                alt="Ophthalmic Research"
                className="w-full h-72 object-cover rounded"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-[#c9a84c] px-3 py-1 text-white text-xs tracking-widest uppercase">
                  {t.instituteLabel}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.credentials.map((c, idx) => {
                const Icon = iconMap[idx];
                return (
                  <div
                    key={c.title}
                    className="border border-gray-200 rounded p-5 hover:border-[#c9a84c]/50 hover:shadow-md transition-all duration-300 group bg-white"
                  >
                    <Icon
                      size={20}
                      className="text-[#c9a84c] mb-3 group-hover:scale-110 transition-transform"
                    />
                    <h4 className="text-gray-900 text-sm font-medium mb-2">
                      {c.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
