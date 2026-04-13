import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import surgeryImage from "../../imports/image-7.png";

const SURGERY_IMG = surgeryImage;

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const infos = [
    {
      icon: MapPin,
      label: t.info.location,
      value: t.info.locationText,
    },
    {
      icon: Phone,
      label: t.info.phone,
      value: t.info.phoneText,
    },
    {
      icon: Mail,
      label: t.info.email,
      value: t.info.emailText,
    },
    {
      icon: Clock,
      label: t.info.hours,
      value: t.info.hoursText,
    },
  ];

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
            {t.sectionLabel}
          </span>
        </div>
        <h2 className="text-gray-900 text-3xl md:text-4xl mb-4">
          {t.title} <span className="text-[#c9a84c]">{t.titleHighlight}</span>
        </h2>
        <p className="text-gray-600 text-sm mb-16">{t.subtitle}</p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: form */}
          <div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  placeholder={t.form.name}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  placeholder={t.form.email}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  {t.form.phone}
                </label>
                <input
                  type="tel"
                  className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  placeholder={t.form.phone}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  {t.form.subject}
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  placeholder={t.form.subject}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  {t.form.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                  placeholder={t.form.message}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#c9a84c] text-white text-sm tracking-wider uppercase hover:bg-[#d4b560] transition-colors duration-300 rounded disabled:opacity-50"
              >
                {isSubmitting ? t.form.sending : t.form.submit}
              </button>
            </form>
          </div>

          {/* Right: info + image */}
          <div>
            <div className="space-y-5 mb-10">
              {infos.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 border-b border-gray-200 pb-5"
                >
                  <div className="w-12 h-12 rounded border border-[#c9a84c]/30 flex items-center justify-center shrink-0 bg-[#c9a84c]/5">
                    <info.icon size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-gray-800 text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img
                src={SURGERY_IMG}
                alt="Operating Room"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm">
                  {language === "en"
                    ? "State-of-the-art surgical facilities"
                    : "世界一流的手术设施"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
