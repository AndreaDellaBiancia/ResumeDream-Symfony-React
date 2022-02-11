// import utils
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Content from './Content';

// import styles
import './styles.scss';

const Question = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // condition classnames
  const toggleIconClass = classNames('faq__list__question__item__head__icon', { 'faq__list__question__item__head__icon--open': isOpen });

  return (
    <div className="faq__list__question">
      <div className="faq__list__question__item">
        <div className="faq__list__question__item__head">
          <h2 className="faq__list__question__item__head__title">{title}</h2>
          <span onClick={handleClick} className={toggleIconClass}>+</span>
        </div>
        {
          isOpen && <Content content={content} />
        }
      </div>
    </div>
  );
};

Question.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Question;
