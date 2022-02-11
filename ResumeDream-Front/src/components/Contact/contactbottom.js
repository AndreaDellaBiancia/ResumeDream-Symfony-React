import './styles.scss';
import ContactAdress from './contactaddress';
import ContactPlan from './wsplan';
import Logo from '../../assets/images/logo.png';

// Contact page with title and form component
const ContactBottom = () => (
  <section className="contact__bottom">
    <div className="contact__bottom__logo">
      <img src={Logo} alt="Resume Dream™ Logo" />
    </div>
    <div className="contact__bottom__plan">
      <ContactAdress />
      <ContactPlan />
    </div>
  </section>
);

export default ContactBottom;
