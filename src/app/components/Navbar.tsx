import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  const navLinks = [
    { label: t.about, href: "#about" },
    { label: t.expertise, href: "#expertise" },
    { label: t.research, href: "#research" },
    { label: t.innovations, href: "#innovations" },
    { label: t.awards, href: "#awards" },
    { label: t.hospital, href: "#hospital" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-900/5"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-[#c9a84c] tracking-[0.25em] uppercase text-xs font-light">
            Prof.
          </span>
          <span className="text-gray-900 tracking-widest text-sm font-medium">
            {language === "en" ? "SHI WEIYUN" : "史伟云"}
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-gray-600 hover:text-[#c9a84c] text-xs tracking-[0.15em] uppercase transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Language Toggle & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gray-600 hover:text-[#c9a84c] transition-colors"
          >
            <Globe size={16} />
            <span className="text-xs tracking-wider uppercase">
              {language === "en" ? "中文" : "EN"}
            </span>
          </button>
          <button
            onClick={() => handleNav("#contact")}
            className="px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.15em] uppercase hover:bg-[#c9a84c] hover:text-white transition-all duration-300"
          >
            {t.appointment}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200">
          <ul className="flex flex-col py-6 px-6 gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-gray-600 hover:text-[#c9a84c] text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="border-t border-gray-200 pt-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-600 hover:text-[#c9a84c] transition-colors mb-3"
              >
                <Globe size={16} />
                <span className="text-xs tracking-wider uppercase">
                  {language === "en" ? "切换至中文" : "Switch to English"}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("#contact")}
                className="mt-2 w-full py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.15em] uppercase hover:bg-[#c9a84c] hover:text-white transition-all duration-300"
              >
                {t.bookAppointment}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
