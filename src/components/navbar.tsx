
  

import "./navbar.css"
import { sectionIds } from "./sectionsIds";
import { Link } from "react-router-dom";

export const navbar = () => {
   

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if(element){
            const marginTop = 0;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({top: scrollToY,behavior: "smooth"})
        }
    }
  return (

    <header>  <div className="container-navbar">
    <nav className="navbar" id="navbar">
         <div className="logo">
           <h1>
             Dev <span>•</span> Endrew
           </h1>
         </div>

         {
            sectionIds.map((sectionId, i) => (
                <li key={i} onClick={() => scrollToSection(sectionId)}>
                    <Link to="/" className="active">{sectionId}</Link>
                </li>
            )
            
        )
         }
       </nav>
 </div></header>
  
  )
}

export default navbar
