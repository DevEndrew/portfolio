import Home from "../src/pages/home/home.tsx";
import Contact from "./pages/contact/contact.tsx";
import Skills from "../src/pages/skills/skills.tsx";
import Footer from "../src/components/footer.tsx";
import Projects from "./pages/projects/projects.tsx";

function App() {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
