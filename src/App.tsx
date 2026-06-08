import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
