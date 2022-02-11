// import Utils
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../../actions/api';

const SocialNetwork = () => {
  const socialNetworkList = useSelector((state) => state.socialNetwork.social_network);
  const dispatch = useDispatch();

  if (localStorage.getItem('token')) {
    useEffect(
      () => {
        dispatch(getDataFromApi('social_network', 'reseaux-sociaux'));
        localStorage.setItem('socialLoaded', 'true');
      },
      [localStorage.getItem('socialLoaded')],
    );
  }

  return (
    <div className="template__page__cv__socialNetwork">
      <p className="template__page__cv__socialNetwork__category"> Réseaux Sociaux </p>
      { socialNetworkList.map(
        (item) => {
          const deuxp = item.name ? ':' : '';
          return (
            <div key={item.id} className="template__page__cv__socialNetwork__header">
              <a className="template__page__cv__socialNetwork__header__link" href={item.link}>{item.name}{deuxp} {item.link}</a>
            </div>
          );
        },
      )}
    </div>
  );
};

export default SocialNetwork;
