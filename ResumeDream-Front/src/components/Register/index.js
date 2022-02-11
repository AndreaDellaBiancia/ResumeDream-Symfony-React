// import utils
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendRegisterDatasToApi, setInputValue, setPasswordValue } from '../../actions/register';
// import component
import Input from './Input';

// import style
import './styles.scss';

const Register = () => {
  // navigat for redirect
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();
  // state
  const { nickname, email, password } = useSelector((state) => state.register);

  const { first, second } = password;

  // handler
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendRegisterDatasToApi());
    dispatch(setInputValue('nickname', ''));
    dispatch(setInputValue('email', ''));
    dispatch(setPasswordValue('first', ''));
    dispatch(setPasswordValue('second', ''));
    navigate('/creer-mon-cv');
  };

  return (
    <main className="register">
      <h1 className="register__title">Formulaire d'inscription</h1>
      <section className="register__section">
        <form className="register__section__form" onSubmit={handleSubmit}>
          {/* input nickname */}
          <Input title="Nom d'utilisateur" type="text" name="nickname" inputValue={nickname} />

          {/* input email */}
          <Input title="Adresse mail" type="email" name="email" inputValue={email} />

          {/* input first password */}
          <Input title="Mot de passe" type="password" name="first" inputValue={first} />

          {/* input secopnd password */}
          <Input title="Vérifier mot de passe" type="password" name="second" inputValue={second} />

          <button className="register__section__form__submit" type="submit">S'inscrire</button>
        </form>
      </section>
    </main>
  );
};

export default Register;
