import './styles.scss';
import PropTypes from 'prop-types';

// Contact page with title and form component
const ContactLi = ({ className, text }) => (
  <div className="contact-li">
    <div className="contact-li__dot" /><li className={className}>{text}</li>
  </div>
);

ContactLi.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactLi;
