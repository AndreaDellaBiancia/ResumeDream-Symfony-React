import PropTypes from 'prop-types';

const Modelcv = ({ id, imgCv, name }) => (

  <img key={id} className="home__library__img__model" src={`${imgCv}`} alt={name} />

);

Modelcv.propTypes = {
  id: PropTypes.number.isRequired,
  imgCv: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Modelcv;
