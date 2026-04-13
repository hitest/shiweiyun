import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Research } from "./components/Research";
import { Innovations } from "./components/Innovations";
import { Awards } from "./components/Awards";
import { Hospital } from "./components/Hospital";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Research />
        <Innovations />
        <Awards />
        <Hospital />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}