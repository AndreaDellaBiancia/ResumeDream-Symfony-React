// import utils
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setChangeCurrentTemplate } from '../../actions/library';

// import styles
import './styles.scss';

const Control = () => {
  const dispatch = useDispatch();

  const [dropDown, setDropDown] = useState(false);

  const dropDownMenu = classNames('create-resume__control__buttons__item__content', { 'create-resume__control__buttons__item__content--open': dropDown });

  return (
    <section className="create-resume__control">
      {/*
    <input type="text" id="resume-title"
    className="create-resume__control__resume-title" name="resume-title" placeholder="Nom du cv" />
    */}
      <div className="create-resume__control__dropdown">
        <button
          type="button"
          className="create-resume__control__buttons__item"
          onClick={() => setDropDown(!dropDown)}
        >
          Modèles CV
        </button>
        <ul className={dropDownMenu}>
          <li
            className="create-resume__control__buttons__item__content__element"
            onClick={
              () => {
                dispatch(setChangeCurrentTemplate('./dionysosStyle.scss'));
                setDropDown(!dropDown);
              }
            }
          >
            Modèle Dyonisos
          </li>
          <li
            className="create-resume__control__buttons__item__content__element"
            onClick={
              () => {
                dispatch(setChangeCurrentTemplate('./aphroditeStyle.scss'));
                setDropDown(!dropDown);
              }
            }
          >
            Modèle Aphrodite
          </li>
          <li
            className="create-resume__control__buttons__item__content__element"
            onClick={
              () => {
                dispatch(setChangeCurrentTemplate('./apolloStyle.scss'));
                setDropDown(!dropDown);
              }
            }
          >
            Modèle Apollo
          </li>
          <li
            className="create-resume__control__buttons__item__content__element"
            onClick={
              () => {
                dispatch(setChangeCurrentTemplate('./poseidonStyle.scss'));
                setDropDown(!dropDown);
              }
            }
          >
            Modèle Poseidon
          </li>
        </ul>
      </div>
      <Link to="/template" target="_blank">
        <button type="button" className="create-resume__control__buttons__item">Exporter</button>
      </Link>
    </section>
  );
};

export default Control;
