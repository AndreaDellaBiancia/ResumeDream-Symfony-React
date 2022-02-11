// import utils
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setModalInputValue, setModalStartDateValue, setModalEndDateValue } from '../../actions';

// import styles
import './styles.scss';

const Input = ({
  name, id, type, value, index,
}) => {
  const dispatch = useDispatch();

  const writen = () => {
    if (value !== '') {
      return ('__writen');
    }

    return ('');
  };

  const other = () => {
    if (type === 'date' || type === 'file') {
      return '-2.2rem';
    }
  };

  const otherColor = () => {
    if (type === 'date' || type === 'file') {
      return 'black';
    }
  };

  const checkPosition = () => {
    if (type === 'checkbox') {
      return 'absolute';
    }
  };

  const checkBottom = () => {
    if (type === 'checkbox') {
      return '1px';
    }
  };

  const checkRight = () => {
    if (type === 'checkbox') {
      return '120px';
    }
  };

  const inputC = `add-data-modal__form__input-container__input${writen()}`;
  const labelC = `add-data-modal__form__input-container__label${writen()}`;

  return (
    <div className="add-data-modal__form__input-container">
      <input
        className={inputC}
        style={{
          color: otherColor(),
          position: checkPosition(),
          bottom: checkBottom(),
          right: checkRight(),
        }}
        type={type}
        name={id}
        value={value}
        onChange={
          (evt) => {
            if (id === 'start_date') {
              dispatch(setModalStartDateValue(evt.target.value));
            }
            else if (id === 'end_date') {
              dispatch(setModalEndDateValue(evt.target.value));
            }
            else {
              dispatch(setModalInputValue(index, evt.target.value));
            }
          }
        }
      />
      <label style={{ top: other() }} className={labelC} htmlFor={id}>{name}</label>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Input;
