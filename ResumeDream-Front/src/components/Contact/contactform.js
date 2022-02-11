/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import ContactInput from './contactinput';
import ContactTextarea from './contacttextarea';
import { addNewContact } from '../../actions';

// contact form which takes a sub-component
const ContactForm = () => {
  const [inputFirstValue, setInputFirstValue] = useState('');
  const [inputLastValue, setInputLastValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputSubjectValue, setInputSubjectValue] = useState('');
  const [inputMessageValue, setInputMessageValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="contact-form">
      <h2 className="contact-form__sub-title">Formulaire de contact</h2>
      <form className="contact-form__form" action="">
        <div className="contact-form__form__prenom-nom">
          <ContactInput type="text" id="name" label="Prénom" inputClass="short" setInputValue={setInputFirstValue} inputValue={inputFirstValue} />
          <ContactInput type="text" id="last-name" label="Nom" inputClass="short" setInputValue={setInputLastValue} inputValue={inputLastValue} />
        </div>
        <ContactInput type="email" id="email" label="E-Mail" inputClass="long" setInputValue={setInputEmailValue} inputValue={inputEmailValue} />
        <ContactInput type="text" id="subject" label="Sujet" inputClass="long" setInputValue={setInputSubjectValue} inputValue={inputSubjectValue} />
        <ContactTextarea id="message" label="Message" inputClass="big" setInputValue={setInputMessageValue} inputValue={inputMessageValue} />
        <div className="contact-form__form__button">
          <input
            type="submit"
            value="Envoyer"
            className="blue-button contact-form__form__button__submit"
            onClick={
              (event) => {
                event.preventDefault();
                dispatch(addNewContact(
                  inputFirstValue,
                  inputLastValue,
                  inputEmailValue,
                  inputSubjectValue,
                  inputMessageValue,
                ));
              }
            }
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
