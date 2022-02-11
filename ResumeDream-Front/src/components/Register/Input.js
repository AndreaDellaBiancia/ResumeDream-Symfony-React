// import utils
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setInputValue, setPasswordValue } from '../../actions/register';

// import style
import './styles.scss';

const Input = ({
  title, type, name, inputValue,
}) => {
  // dispatch
  const dispatch = useDispatch();

  // handle method
  const handleChange = (evt) => {
    if (type === 'password') {
      dispatch(setPasswordValue(name, evt.target.value));
    }
    else {
      dispatch(setInputValue(name, evt.target.value));
    }
  };

  const writen = () => {
    if (inputValue !== '') {
      return ('__writen');
    }

    return ('');
  };

  const inputC = `register__section__form__input-container__input${writen()}`;
  const labelC = `register__section__form__input-container__label${writen()}`;

  return (
    <div className="register__section__form__input-container">
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
