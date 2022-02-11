// import Utils
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../../actions/api';

const Activity = () => {
  const activityList = useSelector((state) => state.activity.activity);
  const dispatch = useDispatch();

  if (localStorage.getItem('token')) {
    useEffect(
      () => {
        dispatch(getDataFromApi('activity', 'activite'));
        localStorage.setItem('activityLoaded', 'true');
      },
      [localStorage.getItem('activityLoaded')],
    );
  }

  return (
    <div className="template__page__cv__activity">
      <div className="template__page__cv__activity__title"><p className="template__page__cv__activity__title__category">Activités</p></div>
      { activityList.map(
        (item) => (
          <div key={item.id} className="template__page__cv__activity__header">
            <div className="template__page__cv__activity__header__title"><p className="template__page__cv__activity__header__title__info">{item.title}</p></div>
            <div className="template__page__cv__activity__header__content">
              <p className="template__page__cv__activity__header__content__info">{item.content}</p>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default Activity;
