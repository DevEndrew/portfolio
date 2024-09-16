import "./contact.css";

function Contact() {
  return (
    <>
      <main>
        <div id="Contato" className="contact-container">
        <form className="form" id="contactForm">
            <input className="name-form" type="text" placeholder="Nome Completo"/>
            <input className="email-form" type="text" placeholder="Endereço de Email"/>
            <input className="number-form" type="number" placeholder="Número de Telefone/Celular"/>
            <input className="subject-form" type="text" placeholder="Assunto"/>
            <textarea className="message-form" id="" placeholder="Mensagem"></textarea>
            <button className="send-form">Enviar Mensagem</button>
          </form>
          <p id="status"></p>
        </div>
      </main>
    </>
  );
}

export default Contact;
