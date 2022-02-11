import './styles.scss';
import ContactForm from './contactform';

// Contact page with title and form component
const ContactTop = () => (
  <section className="contact__top">
    <div className="contact__top__div-title">
      <h1 className="contact__top__div-title__title">Contactez-nous</h1>
    </div>
    <ContactForm />
  </section>
);

export default ContactTop;
