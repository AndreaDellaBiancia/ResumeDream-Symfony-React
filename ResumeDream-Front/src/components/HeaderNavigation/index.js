// import utils
import { NavLink, Link, useNavigate } from 'react-router-dom';

// import styles
import './styles.scss';

// import image
import logoHeader from 'src/assets/images/typo.png';
import { useState } from 'react';

const HeaderNavigation = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const logoClassName = isMobile ? 'header__logo--mobile' : 'header__logo';
  const navigationClassName = isMobile ? 'header__navigation--mobile' : 'header__navigation';
  const buttonClassName = isMobile ? 'header__button--mobile' : 'header__button';

  const handleClickBurgerMenu = (evt) => {
    const button = evt.target;
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'));
    setIsMobile(!isMobile);
  };

  const handleNavigationClick = () => {
    setIsMobile(!isMobile);
    document.querySelector('.opened').classList.remove('opened');
  };

  const logged = localStorage.getItem('logged') === 'true';

  // checks if user is logged

  return (
    <header className="header">
      {/* logo link */}
      <Link to="/">
        <img
          className={logoClassName}
          src={logoHeader}
          alt="Resume Dream main logo"
        />
      </Link>

      {/* navigation */}
      <nav className={navigationClassName}>
        {/* home */}
        <NavLink
          to="/"
          className="header__navigation__link"
          onClick={() => {
            handleNavigationClick();
          }}
        >
          Accueil
        </NavLink>
        {/* AboutUs */}
        <NavLink
          to="/a-propos-de-nous"
          className="header__navigation__link"
          onClick={() => {
            handleNavigationClick();
          }}
        >
          À propos de nous
        </NavLink>
        {/* CreateResume */}
        {
          logged
          && (
          <NavLink
            to="/creer-mon-cv"
            className="header__navigation__link"
            onClick={() => {
              handleNavigationClick();
            }}
          >
            Créer mon CV
          </NavLink>
          )
        }
        {/* Contact */}
        <NavLink
          to="/contact"
          className="header__navigation__link"
          onClick={() => {
            handleNavigationClick();
          }}
        >
          Contact
        </NavLink>
      </nav>

      {/* registration button and connection / My Space and deconnection */}
      <div className={buttonClassName}>
        {/* LogIn */}
        <Link
          to={logged ? '/mon-espace' : '/connexion'}
          onClick={() => {
            handleNavigationClick();
          }}
        >
          <button type="button" className="header__button--stroked">
            {logged ? 'Mon Espace' : 'Se connecter'}
          </button>
        </Link>
        {/* Register */}
        <Link
          to={logged ? '/' : '/inscription'}
          onClick={() => {
            if (logged) {
              localStorage.removeItem('token');
              localStorage.setItem('logged', false);
              navigate('/');
            }
            else {
              handleNavigationClick();
            }
          }}
        >
          <button type="button" className=" header__button--filled">
            {logged ? 'Déconnexion' : 'S\'inscrire'}
          </button>
        </Link>
      </div>

      {/* burger menu */}
      <button
        type="button"
        className="header__burger-menu"
        onClick={handleClickBurgerMenu}
        aria-label="Burger Menu"
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <path className="header__burger-menu__line header__burger-menu__line--line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="header__burger-menu__line header__burger-menu__line--line2" d="M 20,50 H 80" />
          <path className="header__burger-menu__line header__burger-menu__line--line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>

    </header>
  );
};

export default HeaderNavigation;
