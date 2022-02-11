// import Utils
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi } from '../../actions/api';

const Experience = () => {
  const experienceList = useSelector((state) => state.experiences.work_experience);
  const dispatch = useDispatch();

  if (localStorage.getItem('token')) {
    useEffect(
      () => {
        dispatch(getDataFromApi('work_experience', 'work-experience'));
        localStorage.setItem('experiencesLoaded', 'true');
      },
      [localStorage.getItem('experiencesLoaded')],
    );
  }

  return (

    <div className="template__page__cv__experience">
      <div className="template__page__cv__experience__title"><p className="template__page__cv__experience__title__category">Expériences</p></div>
      { experienceList.map(
        (item) => {
          const niceDate = (date) => {
            if (date) {
              const goodDate = () => date.replace(/-\d*\T.*/, '');
              const year = () => parseInt(goodDate(date).replace(/-\d*/, ''), 10);
              const month = () => parseInt(goodDate(date).replace(/\d*-/, ''), 10) - 1;
              const mixedDate = () => new Date(Date.UTC(year(date), month(date)));
              return new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long' }).format(mixedDate(date));
            }
            return '';
          };
          return (
            <div key={item.id} className="template__page__cv__experience__header">
              <div className="template__page__cv__experience__header__role"><p className="template__page__cv__experience__header__role__info">{item.role}</p></div>
              <div className="template__page__cv__experience__header__company-name"><p className="template__page__cv__experience__header__company-name__info">{item.company_name}</p></div>
              <div className="template__page__cv__experience__header__city"><p className="template__page__cv__experience__header__city__info">{item.city}</p></div>
              <div className="template__page__cv__experience__header__date">
                <div className="template__page__cv__experience__header__date__start"><p className="template__page__cv__experience__header__date__start__info">| {niceDate(item.start_date)} • </p></div>
                <div className="template__page__cv__experience__header__date__end"><p className="template__page__cv__experience__header__date__end__info">{niceDate(item.end_date)}</p></div>
              </div>
              <div className="template__page__cv__experience__header__content"><p className="template__page__cv__experience__header__content__info">{item.content}</p></div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Experience;
