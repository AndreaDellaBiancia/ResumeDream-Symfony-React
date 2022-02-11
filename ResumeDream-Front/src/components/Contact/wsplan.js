import './styles.scss';
import ContactLi from './contactli';

// Contact page with title and form component
const ContactPlan = () => (
  <section className="contact-plan">
    <div className="contact-plan__title-div">
      <h2 className="contact-plan__title-div__title">Plan du site</h2>
    </div>
    <div className="contact-plan__list-div">
      <ul className="contact-plan__list-div__list">
        <ContactLi className="contact-plan__list-div__list__item" text="Accueil" />
        <ContactLi className="contact-plan__list-div__list__item" text="À propos de nous" />
        <ContactLi className="contact-plan__list-div__list__item" text="Créer mon CV" />
        <ContactLi className="contact-plan__list-div__list__item" text="S'inscrire" />
        <ContactLi className="contact-plan__list-div__list__item" text="Mon espace" />
      </ul>
      <ul className="contact-plan__list">
        <ContactLi className="contact-plan__list-div__list__item" text="FAQ" />
        <ContactLi className="contact-plan__list-div__list__item" text="Contact" />
        <ContactLi className="contact-plan__list-div__list__item" text="Mention légales" />
      </ul>
    </div>

  </section>
);

export default ContactPlan;
