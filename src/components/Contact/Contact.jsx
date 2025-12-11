/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const firstName = form.current.firstname.value.trim();
    const userEmail = form.current.user_mail.value.trim();
    const message = form.current.message.value.trim();

    if (userName && firstName && userEmail && message) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message envoyé");
          },
          (error) => {
            console.log(error.text);
            toast.error("Une erreur est survenue, veuillez réessayer.");
          }
        );
      e.target.reset(); 
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <div id="contact">
      <Fade duration={2000}>
        <div className="titles-contact">
          <h1>Contact</h1>
          <br />
          <p>
            N'hésitez pas à me contacter, je vous répondrai dans les plus brefs
            délais
          </p>
        </div>
        <div className="border-contact">
          <form ref={form} onSubmit={sendEmail} className="form-email">
            <label className="text-contact">Prénom*</label>
            <input
              type="text"
              name="firstname"
              required
              className="input-firstname"
            />
            <label className="text-contact">Nom*</label>
            <input
              type="text"
              name="user_name"
              required
              className="other-input"
            />
            <label className="text-contact">Email*</label>
            <input
              type="text"
              name="user_mail"
              required
              className="other-input"
            />
            <label className="text-contact">Message*</label>
            <textarea name="message" required className="input-message" />
            <input type="submit" value="Envoyer" className="button-send" />
            <h5
              style={{
                marginBottom: "2%",
                marginLeft: "3%",
                fontFamily: "var(--primary-font)",
              }}
            >
              * Champs obligatoires
            </h5>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contact;
