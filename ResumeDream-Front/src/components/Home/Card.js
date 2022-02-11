// import
import PropTypes from 'prop-types';

// define the properties for img, title and description .
const Card = ({ img, title, description }) => (

  // Dynamic informations to not repeat many times the same code
  <div className="home__presentation home__presentation__part">
    <img className="home__presentation home__presentation__part__img" src={img} alt="CV à votre gout" />
    <div className="home__presentation home__presentation_txt">
      <h4 className="home__presentation home__presentation__txt__tiny__title"> {title}</h4>
      <p className="home__presentation home__presentation__txt__description"> {description}</p>
    </div>
  </div>
);

// define the type of differents properties.
Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
