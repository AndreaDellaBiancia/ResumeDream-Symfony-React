// import utils
import { Link } from 'react-router-dom';

// import styles
import './styles.scss';

// import images
import sampleSocial from '../../assets/images/image-sample.png';

const SocialNetworks = () => (
  <div className="social-network">
    <ul className="social-network__list">
      <li className="social-network__item">
        <Link to="/">
          <img src={sampleSocial} alt="socials Logo" />
        </Link>
      </li>
      <li className="social-network__item">
        <Link to="/">
          <img src={sampleSocial} alt="socials Logo" />
        </Link>
      </li>
      <li className="social-network__item">
        <Link to="/">
          <img src={sampleSocial} alt="socials Logo" />
        </Link>
      </li>
    </ul>
  </div>
);

export default SocialNetworks;
