import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].nav;

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: nav.about, href: "#about" },
    { label: nav.expertise, href: "#expertise" },
    { label: nav.research, href: "#research" },
    { label: nav.innovations, href: "#innovations" },
    { label: nav.awards, href: "#awards" },
    { label: nav.hospital, href: "#hospital" },
    { label: nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-1">
              Prof.
            </div>
            <div className="text-white tracking-widest text-lg mb-4">
              {language === "en" ? "SHI WEIYUN · 史伟云" : "史伟云 · SHI WEIYUN"}
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              {language === "en"
                ? "Chief Physician, Level II Professor, Doctoral Supervisor. Director, Shandong Eye Institute & President, Shandong Eye Hospital."
                : "主任医师，二级教授，博士生导师。山东省眼科研究所党委书记、所长，山东省眼科医院院长。"}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-gray-400 text-xs tracking-wider uppercase mb-5">
              {language === "en" ? "Navigation" : "导航"}
            </p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-gray-400 hover:text-[#c9a84c] text-xs tracking-wide transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <p className="text-gray-400 text-xs tracking-wider uppercase mb-5">
              {language === "en" ? "Key Affiliations" : "主要机构"}
            </p>
            <ul className="space-y-3">
              {(language === "en"
                ? [
                    "Shandong Eye Institute",
                    "Shandong Eye Hospital",
                    "Chinese Ophthalmological Society",
                    "Chinese Journal of Ophthalmology",
                    "Shandong University",
                    "Qingdao University",
                  ]
                : [
                    "山东省眼科研究所",
                    "山东省眼科医院",
                    "中华医学会眼科学分会",
                    "中华眼科杂志",
                    "山东大学",
                    "青岛大学",
                  ]
              ).map((a) => (
                <li key={a} className="text-gray-500 text-xs">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <p className="text-gray-500 text-xs">{t.note}</p>
        </div>
      </div>
    </footer>
  );
}
