import "./skills.css";
import Marquee from "react-fast-marquee";
import css from "../../../public/css.svg";
import js from "../../../public/js.svg";
import html from "../../../public/html.svg";
import node from "../../../public/nodeJS.svg";
import react from "../../../public/react.svg";
import ts from "../../../public/ts.svg";

function Skills() {
  return (
    <>
      <main id="Habilidades" className="main-skills">
        <div className="skills-container">
          <div className="skills-tittle">
            <h1>Habilidades</h1>
          </div>
          <Marquee speed={80} className="skills-border">
            <div className="skills-img">
              <div className="skills-content">
                <img src={css} alt="" /> <p>Css</p>
              </div>
              <div className="skills-content">
                <img src={html} alt="" />
                <p>HTML</p>
              </div>
              <div className="skills-content">
                <img src={js} alt="" />
                <p>JavaScript</p>
              </div>
              <div className="skills-content">
                <img src={react} alt="" />
                <p>React.JS</p>
              </div>
              <div className="skills-content">
                <img src={node} alt="" />
                <p>Node.JS</p>
              </div>
              <div className="skills-content ">
                <img src={ts} alt="" className="ts" />
                <p>TypeScript</p>
              </div>
              <div className="skills-content">
                <img src={css} alt="" /> <p>Css</p>
              </div>
              <div className="skills-content">
                <img src={html} alt="" />
                <p>HTML</p>
              </div>
              <div className="skills-content">
                <img src={js} alt="" />
                <p>JavaScript</p>
              </div>
              <div className="skills-content">
                <img src={react} alt="" />
                <p>React.JS</p>
              </div>
              <div className="skills-content">
                <img src={node} alt="" />
                <p>Node.JS</p>
              </div>
              <div className="skills-content ts-right">
                <img src={ts} alt="" className="ts" />
                <p>TypeScript</p>
              </div>
            </div>
          </Marquee>
        </div>
      </main>
    </>
  );
}

export default Skills;
