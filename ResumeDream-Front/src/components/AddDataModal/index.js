/* eslint-disable consistent-return */
// import utils
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalActive, setModalContentValue } from '../../actions';
import { modalSubmit } from '../../actions/api';

// import component
import Input from './Input';

// import styles
import './styles.scss';

const AddDataModal = () => {
  const dispatch = useDispatch();
  // select state
  const dataState = useSelector((state) => state.dataModals);
  const isActive = useSelector((state) => state.dataModals.isDisplayed);
  const modalTitle = useSelector((state) => state.dataModals.title);
  const currentState = useSelector((state) => state.dataModals.currentState);
  const modalInputsGroup = useSelector((state) => state.dataModals.inputs);
  const endPoint = useSelector((state) => state.dataModals.endPoint);

  // conditionnal jsx
  const loadInputsFromState = () => {
    if (currentState !== '') {
      return (
        modalInputsGroup[currentState].map(
          (input, i) => (
            <Input
              key={input.id}
              id={input.id}
              name={input.name}
              type={input.type}
              value={input.value}
              index={i}
            />
          ),
        )
      );
    }
  };

  const writen = () => {
    if (currentState.content !== '') {
      return ('__writen');
    }

    return ('');
  };

  const inputC = `add-data-modal__form__input-container__big__input${writen()}`;
  const labelC = `add-data-modal__form__input-container__big__label${writen()}`;


  const conditionalDate = () => {
    if ((currentState === 'experiences') || (currentState === 'educations')) {
      return (
        <>
          <Input id="start_date" name="Date de début" index={0} type="date" />
          <Input id="end_date" name="Date de fin" index={0} type="date" />
          <Input id="en-cours" name="En cours" index={0} type="checkbox" />
        </>
      );
    }
  };

  const dateAndDescriptionInputs = () => {
    if ((currentState === 'experiences') || (currentState === 'educations') || (endPoint === 'donnees-personelles') || (endPoint === 'activite')) {
      return (
        <>
          <div className="add-data-modal__form__input-container__big">
            <label htmlFor="content" className={labelC}>
              Description
            </label>
            <textarea
              id="content"
              className={inputC}
              name="description"
              onChange={(evt) => dispatch(setModalContentValue(evt.target.value))}
              value={currentState.content}
            />
          </div>
        </>
      );
    }
  };

  // modal className
  const modalClassName = classNames('add-data-modal', { 'add-data-modal--hide': !isActive });

  // handleMethod
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const submitData = {};
    modalInputsGroup[currentState].forEach(
      (input) => {
        if (input.value) {
          submitData[input.id] = input.value;
        }
      },
    );

    if (endPoint === 'work-experience' || endPoint === 'donnees-personelles' || endPoint === 'formation' || endPoint === 'activite') {
      if (endPoint === 'work-experience' || endPoint === 'formation' || endPoint === 'activite') {
        submitData.start_date = dataState.start_date;
        submitData.end_date = dataState.end_date;
        submitData.content = dataState.content;
      }
      if (endPoint === 'donnees-personelles') {
        submitData.picture = '';
        submitData.content = dataState.content;
      }
      if (endPoint === 'activite') {
        submitData.start_date = '2005-01-01';
      }
    }

    dispatch(modalSubmit(submitData, currentState, endPoint));
  };
  return (
    <div className={modalClassName}>
      <form className="add-data-modal__form" onSubmit={handleSubmit}>
        <div className="add-data-modal__form__close" onClick={() => dispatch(setIsModalActive(false))}>
          <p>X fermer</p>
        </div>
        <h1 className="add-data-modal__form__title">{modalTitle}</h1>
        {loadInputsFromState()}
        {conditionalDate()}
        {dateAndDescriptionInputs()}
        <button className="add-data-modal__form__submit" type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddDataModal;
