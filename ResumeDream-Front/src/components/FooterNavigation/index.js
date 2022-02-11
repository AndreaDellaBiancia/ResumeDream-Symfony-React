// import utils
import { NavLink, Link } from 'react-router-dom';

// import styles
import './styles.scss';

// import image
import logoFooter from 'src/assets/images/typo.png';
import SocialNetworks from './SocialNetworks';

const FooterNavigation = () => (
  <footer className="footer">
    <div className="footer__navigation">
      <nav className="footer__navigation__a">
        {/* home */}
        <NavLink
          to="/"
          className="footer__navigation__link"
        >
          Accueil
        </NavLink>
        {/* AboutUs */}
        <NavLink
          to="/a-propos-de-nous"
          className="footer__navigation__link"
        >
          À propos de nous
        </NavLink>
        {/* CreateResume */}
        <NavLink
          to="/creer-mon-cv"
          className="footer__navigation__link"
        >
          Créer mon CV
        </NavLink>
      </nav>
      {/* logo */}
      <Link to="/">
        <img src={logoFooter} alt="Resume Dream footer logo" />
      </Link>
      <nav className="footer__navigation__b">
        {/* FAQ */}
        <NavLink
          to="/faq"
          className="footer__navigation__link"
        >
          FAQ
        </NavLink>
        {/* Contact */}
        <NavLink
          to="/contact"
          className="footer__navigation__link"
        >
          Contact
        </NavLink>
        {/* Legals */}
        <NavLink
          to="/legals"
          className="footer__navigation__link"
        >
          Mentions légales
        </NavLink>
      </nav>
    </div>

    <SocialNetworks />

    <p className="footer__copyright">©2021 Tous droits réservé projet Resume Dream</p>

  </footer>
);

export default FooterNavigation;
