// import Utils
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi } from '../../actions/api';

const educations = () => {
  const educationsList = useSelector((state) => state.educations.education);
  const dispatch = useDispatch();

  if (localStorage.getItem('token')) {
    useEffect(
      () => {
        dispatch(getDataFromApi('education', 'formation'));
        localStorage.setItem('educationLoaded', 'true');
      },
      [localStorage.getItem('educationLoaded')],
    );
  }

  return (

    <div className="template__page__cv__educations">
      <div className="template__page__cv__educations__title"><p className="template__page__cv__educations__title__category">Formations</p></div>
      { educationsList.map(
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
            <div key={item.id} className="template__page__cv__educations__education">
              <div className="template__page__cv__educations__education__certificate"><p className="template__page__cv__educations__education__certificate__info">{item.certificate}</p></div>
              <div className="template__page__cv__educations__education__school-name"><p className="template__page__cv__educations__education__school-name__info">{item.school_name}</p></div>
              <div className="template__page__cv__educations__education__city"><p className="template__page__cv__educations__education__city__info">{item.city}</p></div>
              <div className="template__page__cv__educations__education__date">
                <div className="template__page__cv__educations__education__date__start"><p className="template__page__cv__educations__education__start__info">| {niceDate(item.start_date)} • </p>
                </div>
                <div className="template__page__cv__educations__education__date__end"><p className="template__page__cv__educations__education__end__info"> {niceDate(item.end_date)}</p></div>
              </div>
              <div className="template__page__cv__educations__education__content"><p className="template__page__cv__educations__education__content__info">{item.content}</p></div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default educations;
