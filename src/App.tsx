import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutSkills from "./components/AboutSkills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-background transition-colors duration-300">
        <Navigation />
        <main className="pt-32 md:pt-36">
          <Hero />
          <AboutSkills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}