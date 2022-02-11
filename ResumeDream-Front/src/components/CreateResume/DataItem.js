// import utils
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import actions
import {
  setIsModalActive, setCurrentState, setModalTitle, setModalEndPoint,
} from '../../actions';

// import styles
import './styles.scss';

const DataItem = ({
  title, stateName, objectName, itemName, itemPlace, formClass, endPoint,
}) => {
  // use dispatch
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setIsModalActive(true));
    dispatch(setCurrentState(stateName));
    dispatch(setModalTitle(title));
    dispatch(setModalEndPoint(endPoint));
  };

  const currentState = useSelector((state) => state[stateName]);

  const barre = currentState[objectName][itemName] ? '-' : '';

  const conditonaldisplay = () => {
    if (stateName === 'personalData') {
      return (
        <div key={itemName} className="create-resume__generator__datas-list__data__form__item">
          {currentState[objectName][itemName]} {barre} {currentState[objectName][itemPlace]}
        </div>
      );
    }
    return (
      currentState[objectName].map(
        (item) => (
          <div key={item[itemName]} className="create-resume__generator__datas-list__data__form__item">
            {/*
                Maybe for a v2
                <input
                  type="checkbox"
                  name={item.company_name}
                  id={item.company_name}
                  className="create-resume__generator__datas-list__data__form__item__input"
                  value={item.id}
                />
                */}
            {item[itemName]} {item[itemPlace] ? `- ${item[itemPlace]}` : ''}
          </div>
        ),
      )
    );
  };

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      {
        conditonaldisplay()
      }
      <button className="create-resume__generator__datas-list__data__form__button" type="submit">
        Ajouter une nouvelle entrée
      </button>
    </form>
  );
};

DataItem.propTypes = {
  title: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPlace: PropTypes.string.isRequired,
  formClass: PropTypes.string.isRequired,
  endPoint: PropTypes.string.isRequired,
};

export default DataItem;
