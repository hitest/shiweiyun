import { FileText, BookOpen, DollarSign, Lightbulb, Dna, Microscope, FlaskConical } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import researchImage from "../../imports/image-8.png";

const CONF_IMG = researchImage;

const iconMap = [Dna, FlaskConical, Microscope];

export function Research() {
  const { language } = useLanguage();
  const t = translations[language].research;

  const researchStats = [
    { icon: FileText, label: t.publications, desc: t.publicationsDesc },
    { icon: BookOpen, label: t.books, desc: t.booksDesc },
    { icon: DollarSign, label: t.funding, desc: t.fundingDesc },
    { icon: Lightbulb, label: t.patents, desc: t.patentsDesc },
  ];

  return (
    <section id="research" className="bg-white py-24 lg:py-32">
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

        {/* Research Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {researchStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-[#c9a84c]/50 hover:shadow-md transition-all duration-300 group"
            >
              <stat.icon
                size={24}
                className="text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform"
              />
              <h4 className="text-gray-900 font-medium mb-2">{stat.label}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Research Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {t.highlights.map((highlight, idx) => {
            const Icon = iconMap[idx];
            return (
              <div
                key={highlight.title}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:border-[#c9a84c]/50 hover:shadow-lg transition-all duration-300 group"
              >
                <Icon
                  size={28}
                  className="text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform"
                />
                <h4 className="text-gray-900 font-medium mb-3 text-lg">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote Section with Image */}
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img
            src={CONF_IMG}
            alt="Academic Conference"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-[#c9a84c] mb-6" />
              <p className="text-white text-xl md:text-2xl italic leading-relaxed mb-4">
                {language === "en"
                  ? '"Our mission is to push the boundaries of corneal medicine and restore vision to those who have lost hope."'
                  : '"我们的使命是推动角膜医学的边界，为失去希望的人恢复视力。"'}
              </p>
              <p className="text-[#c9a84c] text-sm tracking-wider">
                {language === "en" ? "— Prof. Shi Weiyun" : "— 史伟云 教授"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
