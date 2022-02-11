// import Utils
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../../actions/api';

const Skills = () => {
  const skillsList = useSelector((state) => state.skill.skill);
  const dispatch = useDispatch();

  if (localStorage.getItem('token')) {
    useEffect(
      () => {
        dispatch(getDataFromApi('skill', 'skill'));
        localStorage.setItem('skillLoaded', 'true');
      },
      [localStorage.getItem('skillLoaded')],
    );
  }
  return (
    <div className="template__page__cv__skills">
      <div className="template__page__cv__skills__title"><p className="template__page__cv__skills__title__category">Compétences</p></div>
      { skillsList.map(
        (item) => (
          <div key={item.id} className="template__page__cv__skills__skill">
            <div className="template__page__cv__skills__skill__title">
              <p className="template__page__cv__skills__skill__title__info">
                {item.title}
              </p>
            </div>
            {/* <div className="template__page__cv__skills__skill__content">
              <p className="template__page__cv__skills__skill__content__info">
                {item.content}
              </p>
            </div> */}
          </div>
        ),
      )}
    </div>
  );
};

export default Skills;
