import { Link } from 'react-router-dom';

const Register = () => (

  <div className="home__register">
    <p className="home__register__txt">
      Inscrivez-vous dès maintenant pour profiter de la pleine puissance de Resume Dream
    </p>
    <div className="home__register__button">
      <div className="home__register__button home__register__button__inscription">
        {/* Link to the page Inscription */}
        <Link to="/inscription">
          <button className="home__register__button home__register__button--filled" type="button"> S'inscrire</button>
        </Link>
      </div>
      <div className="home__register__button home__register__button__contact">
        {/* Link to the page Contact */}
        <Link to="/contact">
          <button className="home__register__button home__register__button--stroked" type="button"> Contactez-nous</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Register;
