import './styles.scss';
import PropTypes from 'prop-types';

const DataListInformations = ({ children }) => (
  <article className="DataListInformations__page__informations">

    <section className="DataListInformations__page__informations__text">
      {children}

    </section>
  </article>
);

DataListInformations.propTypes = {
  children: PropTypes.object.isRequired,

};

export default DataListInformations;
