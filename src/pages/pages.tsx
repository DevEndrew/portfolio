import Home  from "../sections/home/home"
import Navbar from "../components/navbar"
import Skills from "../sections/skills/skills"
import Projects from "../sections/projects/projects.tsx"
import Contact from "../sections/contact/contact.tsx"
import Footer from "../components/footer.tsx"

const pages = () => {
  return (
    <>
        <Navbar/>
        <Home />
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
       </>
  )
}

export default pages
