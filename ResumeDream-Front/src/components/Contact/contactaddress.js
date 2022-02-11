import './styles.scss';

// Contact page with title and form component
const ContactAdress = () => (
  <section className="contact-address">
    <div className="contact-address__title-div">
      <h2 className="contact-address__title-div__title">Adresse</h2>
    </div>
    <div className="contact-address__iframe-div">
      <iframe
        title="Map"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=67%20Rue%20Henri%20Dunant,%2092700%20Colombes&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        className="contact-address__iframe-div__iframe"
      />
    </div>
  </section>
);

export default ContactAdress;
