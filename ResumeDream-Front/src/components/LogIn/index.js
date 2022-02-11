// import utils
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postLogDatasFromApi, setInputValueLogin } from '../../actions/login';
import Input from './Input';

// import styles
import './styles.scss';

const LogIn = () => {
  // get dispatch
  const dispatch = useDispatch();

  // get navigate
  const navigate = useNavigate();

  // get state
  const { username, password } = useSelector((state) => state.user);

  // handle method
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postLogDatasFromApi(username, password));
    dispatch(setInputValueLogin('username', ''));
    dispatch(setInputValueLogin('password', ''));
    navigate('/creer-mon-cv');
  };

  return (
    <main className="login">
      <h1 className="login__title">Se connecter</h1>
      <section className="login__section">
        <h2 className="login__section__title">Conexion</h2>
        <form className="login__section__form" onSubmit={handleSubmit}>
          {/* input email */}
          <Input title="Adresse mail" type="email" name="username" inputValue={username} />

          {/* input password */}
          <Input title="Mot de passe" type="password" name="password" inputValue={password} />

          <button className="login__section__form__submit" type="submit">Se connecter</button>
        </form>
      </section>
      <section className="login__registration">
        <h2 className="login__registration__title">Pas encore de compte ? alors rejoins nous !</h2>
        <Link to="/inscription">
          <button className="login__registration__button" type="button">S'inscrire</button>
        </Link>
      </section>
    </main>
  );
};

export default LogIn;
