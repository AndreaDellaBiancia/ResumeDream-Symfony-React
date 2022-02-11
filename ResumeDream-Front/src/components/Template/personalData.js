/* eslint-disable camelcase */
// import Utils
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../../actions/api';

// <img src={picture} className="template__page__cv__presentation__picture" alt={first_name}/>

const PersonalData = () => {
  const {
    first_name, last_name, birth_date, city, address, email, phone_nb, picture, linkedin, content,
  } = useSelector((state) => state.personalData.personal_datas);

  const dispatch = useDispatch();

  if (localStorage.getItem('token')) {
    useEffect(
      () => {
        dispatch(getDataFromApi('personal_datas', 'donnees-personelles'));
        localStorage.setItem('personalLoaded', 'true');
      },
      [localStorage.getItem('personalLoaded')],
    );
  }

  const srcImage ='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

  const niceDate = (date) => {
    if (date) {
      const goodDate = date.replace(/T.*/, '');
      const year = parseInt(goodDate.replace(/-\d*-\d*/, ''), 10);
      const monthDay = goodDate.replace(/\d*-/, '');
      const month = parseInt(monthDay.replace(/-.*/, ''), 10) - 1;
      const day = parseInt(monthDay.replace(/\d*-/, ''), 10);
      const mixedDate = new Date(Date.UTC(year, month, day));
      return new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: '2-digit' }).format(mixedDate);
    }
    return '';
  };

  const virgule = address ? ',' : '';

  return (
    <section className="template__page__cv__personalDatas">
      <div className="template__page__cv__personalDatas__firstName"><p className="template__page__cv__personalDatas__firstName__info">{first_name}</p></div>
      <div className="template__page__cv__personalDatas__lastName"><p className="template__page__cv__personalDatas__lastName__info">{last_name}</p></div>
      <div className="template__page__cv__personalDatas__picture">
        <img
          src={srcImage}
          className="template__page__cv__personalDatas__picture__info"
          alt="{first_name}"
        />
      </div>
      <div className="template__page__cv__personalDatas__contact">
        <div className="template__page__cv__personalDatas__contact__address">
          <div className="template__page__cv__personalDatas__contact__address__street"><p className="template__page__cv__personalDatas__contact__address__street__info">{address}{virgule}</p></div>
          <div className="template__page__cv__personalDatas__contact__address__city"><p className="template__page__cv__personalDatas__contact__address__city__info">{city}</p></div>
        </div>
        <div className="template__page__cv__personalDatas__contact__birth"><p className="template__page__cv__personalDatas__contact__birth__info">{niceDate(birth_date)}</p></div>
        <div className="template__page__cv__personalDatas__contact__email"><p className="template__page__cv__personalDatas__contact__email__info">{email}</p></div>
        <div className="template__page__cv__personalDatas__contact__phone_nb"><p className="template__page__cv__personalDatas__contact__phone_nb__info">{phone_nb}</p></div>
        <div className="template__page__cv__personalDatas__contact__linkedin"><p><a className="template__page__cv__personalDatas__contact__linkedin__info" href={linkedin}>{linkedin}</a></p></div>
      </div>
      <div className="template__page__cv__personalDatas__title">
        <h2 className="template__page__cv__personalDatas__title__profil">À propos de moi</h2>
      </div>
      <div className="template__page__cv__personalDatas__content"><p className="template__page__cv__personalDatas__content__info">{content} {console.log(content)}</p></div>
    </section>
  );
};

export default PersonalData;
