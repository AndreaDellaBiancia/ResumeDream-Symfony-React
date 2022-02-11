// import utils
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setInputValueLogin } from '../../actions/login';

// import style
import './styles.scss';

const Input = ({
  title, type, name, inputValue,
}) => {
  // dispatch
  const dispatch = useDispatch();

  // handle method
  const handleChange = (evt) => {
    dispatch(setInputValueLogin(name, evt.target.value));
  };

  const writen = () => {
    if (inputValue !== '') {
      return ('__writen');
    }

    return ('');
  };

  const inputC = `login__section__form__input-container__input${writen()}`;
  const labelC = `login__section__form__input-container__label${writen()}`;

  return (
    <div className="login__section__form__input-container">
      <input
        className={inputC}
        type={type}
        id={name}
        name={name}
        value={inputValue}
        onChange={handleChange}
        required
      />
      <label className={labelC} htmlFor={name}>{title}</label>
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Input;
