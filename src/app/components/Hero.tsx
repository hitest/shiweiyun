import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import professorImage from "../../imports/image-4.png";

const HERO_BG = professorImage;

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: language === "en" ? "5,000+" : "5000+", label: t.stats.cornealTransplants },
    { value: "258", label: t.stats.publications },
    { value: "53", label: t.stats.sciPapers },
    { value: "2", label: t.stats.awards },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
              {t.eyebrow}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-white mb-3">
            <span className="block text-5xl md:text-7xl tracking-tight mb-1">
              {t.name}
            </span>
            <span className="block text-white/40 text-xl md:text-2xl tracking-[0.15em] mt-2">
              {t.chineseName}
            </span>
          </h1>

          {/* Divider */}
          <div className="h-px w-24 bg-[#c9a84c]/60 my-7" />

          {/* Titles */}
          <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-2xl mb-3">
            {t.title1}&nbsp;·&nbsp;{t.title2}
          </p>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl mb-10">
            {t.subtitle1}&nbsp;·&nbsp;{t.subtitle2}&nbsp;·&nbsp;{t.subtitle3}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll("#about")}
              className="px-8 py-3 bg-[#c9a84c] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#d4b560] transition-colors duration-300"
            >
              {t.viewProfile}
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="px-8 py-3 border border-white/40 text-white/80 text-xs tracking-[0.2em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              {t.bookConsultation}
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
          {stats.map((s) => (
            <div key={s.label} className="py-6 px-4 lg:px-8 text-center">
              <div className="text-[#c9a84c] text-2xl md:text-3xl mb-1 font-semibold">
                {s.value}
              </div>
              <div className="text-gray-600 text-xs tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
