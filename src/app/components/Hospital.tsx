import { Building2, Users, Stethoscope, GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import hospitalImage from "../../imports/image-6.png";

const HOSP_IMG = hospitalImage;

const iconMap = [Stethoscope, Building2, GraduationCap, Users];

export function Hospital() {
  const { language } = useLanguage();
  const t = translations[language].hospital;

  const stats = [
    { value: language === "en" ? "300+" : "300+", label: t.stats.beds },
    { value: language === "en" ? "15,000+" : "15000+", label: t.stats.surgeries },
    { value: language === "en" ? "300,000+" : "30万+", label: t.stats.patients },
    { value: language === "en" ? "500+" : "500+", label: t.stats.staff },
  ];

  return (
    <section id="hospital" className="bg-gray-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
            {t.sectionLabel}
          </span>
        </div>
        <h2 className="text-gray-900 text-3xl md:text-4xl mb-6">
          {t.title} <span className="text-[#c9a84c]">{t.titleHighlight}</span>
        </h2>
        <p className="text-gray-700 mb-16 max-w-3xl leading-relaxed">{t.intro}</p>

        {/* Hospital Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-16">
          <img
            src={HOSP_IMG}
            alt="Shandong Eye Hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-end justify-between">
              <div>
                <span className="bg-[#c9a84c] px-4 py-2 text-white text-sm tracking-wider uppercase inline-block mb-4">
                  {language === "en" ? "Founded 2004 · Grade 3A" : "成立于2004年 · 三级甲等"}
                </span>
                <h3 className="text-white text-2xl font-medium">
                  {language === "en"
                    ? "Shandong Eye Hospital"
                    : "山东省眼科医院"}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-[#c9a84c]/50 hover:shadow-md transition-all"
            >
              <div className="text-[#c9a84c] text-3xl font-semibold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.highlights.map((highlight, idx) => {
            const Icon = iconMap[idx];
            return (
              <div
                key={highlight.title}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#c9a84c]/50 hover:shadow-xl transition-all duration-300 group"
              >
                <Icon
                  size={24}
                  className="text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform"
                />
                <h4 className="text-gray-900 font-medium mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
