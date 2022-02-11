import './styles.scss';
import PropTypes from 'prop-types';
// dispatch to call an action in the reducer
import { useDispatch } from 'react-redux';
import {
  setContactFirstName,
  setContactLastName,
  setContactEmail,
  setContactSubject,
} from '../../actions';

// Input sub-component of contact form. It takes three props
const ContactInput = ({
  type, id, label, inputClass, inputValue, setInputValue,
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
  const setFirst = (value) => {
    dispatch(setContactFirstName(value));
  };
  const setLast = (value) => {
    dispatch(setContactLastName(value));
  };
  const setEmail = (value) => {
    dispatch(setContactEmail(value));
  };
  const setSubject = (value) => {
    dispatch(setContactSubject(value));
  };

  const setMethod = (value) => {
    console.log('entré dans la méthode');
    const contactId = id;
    console.log(contactId);
    console.log(value);
    if (contactId === 'name') {
      setFirst(value);
      console.log('valeur first passée');
    } if (contactId === 'last-name') {
      setLast(value);
      console.log('valeur last passée');
    } if (contactId === 'email') {
      setEmail(value);
      console.log('valeur email passée');
    } if (contactId === 'subject') {
      setSubject(value);
      console.log('valeur subject passée');
    }
  };

  return (
    <div className={containerC}>
      <input
        type={type}
        id={id}
        className={inputC}
        value={inputValue}
        onChange={
        (event) => {
          const lastValue = event.target.value;
          console.log('nouvelle valeur : ', lastValue);
          setInputValue(lastValue);
          setMethod(lastValue);
        }
      }
      />
      <label htmlFor={id} className={labelC}>{label}</label>
    </div>
  );
};

ContactInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default ContactInput;
