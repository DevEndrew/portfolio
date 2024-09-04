import "./home.css";
import Typed from "typed.js";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Desenvolvedor Front-End", "Web Designer", "Designer Gráfico"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
      showCursor: true,
    });

    // Limpa a instância ao desmontar o componente para evitar duplicações
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <header>
        <div className="containerHeader" id="containerHeader">
          <nav className="navbar" id="navbar">
            <div className="logo">
              <h1>
                Dev <span>•</span> Endrew
              </h1>
            </div>
            <a href="#" className="tab-navbar home-navbar">
              <span className="span-hashtag-navbar">#</span> Inicio
            </a>
            <a href="#" className="tab-navbar">
              <span className="span-hashtag-navbar">#</span> Habilidades
            </a>
            <a href="#" className="tab-navbar">
              <span className="span-hashtag-navbar">#</span> Projetos
            </a>
            <a href="#" className="tab-navbar">
              <span className="span-hashtag-navbar">#</span> Contato
            </a>
          </nav>
        </div>
      </header>
      <main className="home-section">
        <div className="home-container">
          <div className="home-content">
            <div className="text-container">
              <div className="m-text">
                <span className="multiple-text"></span>
              </div>
              <p>
                Meu nome é Endrew, um iniciante no mundo da programação.
                Buscando me aperfeiçoar, mergulhando profundamente em desafios
                de codificação para construir uma base sólida. <br />
                <br />
                Além de programar, eu amo criar. Quando não estou no computador,
                estou escrevendo aventuras de RPG ou desenhando.
              </p>
              <a href="#">
                <i className="bx bxl-instagram-alt btn-social-media"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin-square btn-social-media"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github btn-social-media"></i>
              </a>
              <div className="social-media">
                <a href="#" className="btn btn-cv">
                  Download CV <i className="bx bx-download"></i>
                </a>
              </div>
            </div>

            <div className="img-profile">
              <p>text</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
