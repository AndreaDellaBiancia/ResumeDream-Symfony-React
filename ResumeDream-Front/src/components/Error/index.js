// import image
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import errorImage from '../../assets/images/404.png';

// import style
import './styles.scss';

const Error = () => {
  useEffect(
    () => {
      setTimeout(() => {
        console.log('reloaded');
        document.location.reload(true);
      }, 2000);
    }, [],
  );
  return (
    <main className="error">
      <section className="error__content">
        <img className="error__content__image" src={errorImage} alt="404" />
        <div className="error__content__informations">
          <h1 className="error__content__informations__title">Oops !</h1>
          <p className="error__content__informations__text">La page que vous cherchez ne semble pas disponible.</p>
          <Link to="/">
            <button type="button" className="error__content__informations__button">Revenir à l'accueil</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Error;
