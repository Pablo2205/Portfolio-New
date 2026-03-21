import "./index.css"
import "./sections.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import GlassBackground from "./components/GlassBackground/GlassBackground"
import "./components/responsive.css"

function App() {
  return (
    <GlassBackground>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </GlassBackground>
  );
}

export default App;