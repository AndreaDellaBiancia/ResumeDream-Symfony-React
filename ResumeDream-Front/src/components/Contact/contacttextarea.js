import './styles.scss';
import PropTypes from 'prop-types';
// dispatch to call an action in the reducer
import { useDispatch } from 'react-redux';
import {
  setContactMessage,
} from '../../actions';

// Input sub-component of contact form. It takes three props
const ContactTextarea = ({
  id, label, inputClass, inputValue, setInputValue,
}) => {
  const containerC = `input-container__${inputClass}`;
  const writen = () => {
    if (inputValue !== '') {
      return ('__writen');
    }

    return ('');
  };
  const inputC = `${containerC}__input${writen()}`;
  const labelC = `${containerC}__label${writen()}`;
  const dispatch = useDispatch();
  const setMessage = (value) => {
    dispatch(setContactMessage(value));
  };

  return (
    <div className={containerC}>
      <textarea
        id={id}
        className={inputC}
        value={inputValue}
        onChange={
      (event) => {
        const lastValue = event.target.value;
        console.log('nouvelle valeur : ', lastValue);
        setInputValue(lastValue);
        setMessage(lastValue);
      }
    }
      />
      <label htmlFor={id} className={labelC}>{label}</label>
    </div>
  );
};

ContactTextarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default ContactTextarea;
