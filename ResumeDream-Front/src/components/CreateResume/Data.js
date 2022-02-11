// import utils
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import DataItem from './DataItem';

// import style
import './styles.scss';

// eslint-disable-next-line camelcase
const Data = ({
  title, stateName, objectName, itemName, itemPlace, endPoint,
}) => {
  //  use state
  const [isOpen, setIsOpen] = useState(false);

  // class for icons "+"
  const activeClass = classNames('create-resume__generator__datas-list__data__head__icon', { 'create-resume__generator__datas-list__data__head__icon--open': isOpen });

  // class for datas display
  const formClass = classNames('create-resume__generator__datas-list__data__form', { 'create-resume__generator__datas-list__data__form--hide': !isOpen });

  // handleMethod
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="create-resume__generator__datas-list__data">
      <div className="create-resume__generator__datas-list__data__head">
        <h2 className="create-resume__generator__datas-list__data__head__title">{title}</h2>
        <span
          className={activeClass}
          onClick={handleClick}
        >
          +
        </span>
      </div>

      {/* DataItem componant */}
      <DataItem
        title={title}
        formClass={formClass}
        stateName={stateName}
        objectName={objectName}
        itemName={itemName}
        itemPlace={itemPlace}
        endPoint={endPoint}
      />

    </section>
  );
};

Data.propTypes = {
  title: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPlace: PropTypes.string.isRequired,
  endPoint: PropTypes.string.isRequired,
};

export default Data;
