// import Utils
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../../actions/api';

const Language = () => {
  const languageList = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  if (localStorage.getItem('token')) {
    useEffect(
      () => {
        dispatch(getDataFromApi('language', 'langue'));
        localStorage.setItem('languageLoaded', 'true');
      },
      [localStorage.getItem('languageLoaded')],
    );
  }

  return (
    <div className="template__page__cv__language">
      <div className="template__page__cv__language__title"><p className="template__page__cv__language__title__category">Langues</p></div>
      <div className="template__page__cv__language__content">
        { languageList.map(
          (item) => (
            <div key={item.id} className="template__page__cv__language__content__header">
              <div className="template__page__cv__language__content__header__name"><p className="template__page__cv__language__content__header__name__info">{item.name} </p></div>
              <div className="template__page__cv__language__content__header__level"><p className="template__page__cv__language__content__header__level__info"> - {item.level}</p></div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Language;
