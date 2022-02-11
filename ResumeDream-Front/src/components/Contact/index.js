import './styles.scss';
import ContactTop from './contacttop';
import ContactBottom from './contactbottom';

// Contact page with title and form component
const Contact = () => (
  <main className="contact">
    <ContactTop />
    <ContactBottom />
  </main>
);

export default Contact;
