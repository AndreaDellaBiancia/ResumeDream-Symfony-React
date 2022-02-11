import './styles.scss';
//
import PropTypes from 'prop-types';
// import the library for the animated icons
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';

// creating a card with the photo, name, role and social media of each crewmember
const TeamCard = ({
  name, rôle, imgSrc, githubSrc, linkedinSrc,
}) => (
  <div className="profile-card">
    <img className="profile-card__avatar" src={imgSrc} alt={name} />
    <h2 className="profile-card__name">{name}</h2>
    <p className="profile-card__role">{rôle}</p>
    <ul className="profile-card__social">
      <li className="profile-card__social__item"><a href={githubSrc} aria-label="Save" target="_blank" rel="noreferrer"><UseAnimations animation={github} /></a></li>
      <li className="profile-card__social__item"><a href={linkedinSrc} aria-label="Save" target="_blank" rel="noreferrer"><UseAnimations animation={linkedin} /></a></li>
    </ul>
  </div>
);

// checking the props for each crewmember info
TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  rôle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  githubSrc: PropTypes.string.isRequired,
  linkedinSrc: PropTypes.string.isRequired,
};

export default TeamCard;
