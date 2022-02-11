import {
  SET_CONTACT_EMAIL,
  SET_CONTACT_FIRST_NAME,
  SET_CONTACT_LAST_NAME,
  SET_CONTACT_MESSAGE,
  SET_CONTACT_SUBJECT,
  ADD_NEW_CONTACT,
} from '../actions';

const initialState = {

  contactFirstName: '',
  contactLastName: '',
  contactEmail: '',
  contactSubject: '',
  contactMessage: '',
  contact: [
    {
      firstName: 'Nathan',
      lastName: 'Debaz',
      email: '123@gmail.com',
      subject: 'Seed',
      message: 'Voici un exemple de message',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CONTACT_FIRST_NAME: {
      return {
        ...state,
        contactFirstName: action.newValue,
      };
    }
    case SET_CONTACT_LAST_NAME: {
      return {
        ...state,
        contactLastName: action.newValue,
      };
    }
    case SET_CONTACT_EMAIL: {
      return {
        ...state,
        contactEmail: action.newValue,
      };
    }
    case SET_CONTACT_SUBJECT: {
      return {
        ...state,
        contactSubject: action.newValue,
      };
    }
    case SET_CONTACT_MESSAGE: {
      return {
        ...state,
        contactMessage: action.newValue,
      };
    }
    case ADD_NEW_CONTACT: {
      return {
        ...state,
        contact: [
          ...state.contact,
          {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            subject: action.subject,
            message: action.message,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export default reducer;
