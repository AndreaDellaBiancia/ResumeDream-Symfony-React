// import utils
import PropTypes from 'prop-types';

// import style
import './styles.scss';

const Content = ({ content }) => (
  <p className="faq__list__question__item__text">
    {content}
  </p>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
