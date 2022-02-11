import './styles.scss';
// import the component with the crewmember list
import TeamList from './teamlist';
// import the component with the informtion about Resume Dream
import WhoAreWe from './whoarewe';
// import the component with the contact us form
import ContactTop from '../Contact/contacttop';

const AboutUs = () => (
  <main className="about-us">
    <TeamList />
    <WhoAreWe />
    <ContactTop />
  </main>
);

export default AboutUs;
