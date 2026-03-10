import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import HonorAndAwards from "./components/HonorAndAwards"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

function App() {
  return <div className="min-h-screen bg-slate-950 text-white overflow-hidden h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Experience />
    <Skills />
    <HonorAndAwards />
    <Contact />
  </div>
}

export default App
