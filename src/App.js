import "./index.css"
import "./sections.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import GlassBackground from "./components/GlassBackground/GlassBackground"
import LanguageSwitch from "./components/LanguageSwitch"
import ThemeSwitch from "./components/ThemeSwitch"
import { LanguageProvider } from "./i18n"
import "./components/responsive.css"

function App() {
  return (
    <LanguageProvider>
      <GlassBackground>
        <div className="top__controls">
          <ThemeSwitch/>
          <LanguageSwitch/>
        </div>
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Services/>
        <Skills/>
        <Projects/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </GlassBackground>
    </LanguageProvider>
  );
}

export default App;
